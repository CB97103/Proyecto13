import { useState, useEffect } from "react";
import Filtros from "../components/Filtros";
import Listado from "../components/Listado";
import { useNavigate } from "react-router-dom";
import "../style/Principal.css";

const Principal = () => {
  const [characters, setCharacters] = useState([]);
  const [pagina, setPagina] = useState(1); //para traer la pagina principal
  const [filtros, setFiltros] = useState(null);
  const [charactersFiltrados, setCharactersFiltrados] = useState([]);
  const [query, setQuery] = useState("");
  const [buscar, setBuscar] = useState(filtros);

  const navigate = useNavigate();

  const reqApi = async (setCharacters, pagina) => {
    const respuesta = await fetch(
      `https://rickandmortyapi.com/api/character?page=${pagina}`
    )
      .then((res) => res.json())
      .then((json) => setCharacters(json.results));
  };

  useEffect(() => {
    reqApi(setCharacters, pagina);
    console.log(pagina);
  }, [pagina]);

  useEffect(() => {
    if (!filtros) {
      setCharactersFiltrados(characters);
    } else {
      let temp = characters?.filter(
        (character) => character.gender === filtros
      );
      setCharactersFiltrados(temp);
    }
  }, [filtros, characters]);

  useEffect(() => {
    if (query !== "") {
      let temp = charactersFiltrados.filter((obj) => obj.name.includes(query));
      setBuscar(temp);
    } else {
      setBuscar(charactersFiltrados);
    }
  }, [query, charactersFiltrados]);

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="contendor-principal">
      <div className="contenedor-busqueda">
        <button className="logout" onClick={cerrarSesion}>
          Cerrar sesion
        </button>
        <div className="botones-paginas">
          <button className="botones-p" onClick={() => setPagina(pagina - 1)}>
            Anterior
          </button>
          <button className="botones-p" onClick={() => setPagina(pagina + 1)}>
            Siguiente
          </button>
        </div>
        <div className="barra-busqueda">
          <Filtros setFiltros={setFiltros} />
          <input type="text" onChange={(e) => setQuery(e.target.value)} />
          <Listado
            characters={buscar !== null ? buscar : charactersFiltrados}
          />
        </div>
      </div>
    </div>
  );
};

export default Principal;

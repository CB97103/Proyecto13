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
      .then((json) => setCharacters(json.results)); //se le agrega results para que sea visible
  };

  useEffect(() => {
    reqApi(setCharacters, pagina); //en el use effect que incluia el traer la pagina inclui las paginas para los personajes
    console.log(pagina);
  }, [pagina]);

  useEffect(() => {
    if (!filtros) {
      setCharactersFiltrados(characters);
    } else {
      let tem = characters?.filter((personaje) => personaje.gender === filtros); //Fitran los productos por categoria
      setCharactersFiltrados(tem); //Seteamos el valor de los productos filtrados
    }
  }, [filtros, characters]); //Cada vez que cambie el filtros o productos

  useEffect(() => {
    if (query !== "") {
      let temp = charactersFiltrados.filter((obj) => obj.id.includes(query)); //Busca en los titulos que incluyan la palabra de la busqueda
      setBuscar(temp);
    } else {
      setBuscar(charactersFiltrados); //Seteamos el valor de los productos buscados
    }
  }, [query, charactersFiltrados]); //Cada vez que cambie el query o filtros

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="contendor-principal">
      <div>
        <div className="superior">
          <button className="logout" onClick={cerrarSesion}>
            Cerrar sesion
          </button>
        </div>
        <>
          {/*        <Filtros setFiltros={setFiltros} />
        <Listado
          characters={
            charactersFiltrados.length !== 0 ? charactersFiltrados : characters
          }
        />
        no aparecen los filtros por ende no se ven los personajes
        */}
        </>
        <div className="contenedor-personajes">
          <div className="personajes">
            <Filtros setFiltros={setFiltros} />
            <input type="text" onChange={(e) => setQuery(e.target.value)} />
            <Listado
              characters={buscar !== null ? buscar : charactersFiltrados}
            />
          </div>
        </div>
        <div className="contenedor-botones">
          <button className="botones-p" onClick={() => setPagina(pagina - 1)}>
            Anterior
          </button>
          <button className="botones-p" onClick={() => setPagina(pagina + 1)}>
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default Principal;

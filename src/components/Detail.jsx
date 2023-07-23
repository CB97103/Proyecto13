import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../style/Detail.css";

const Detail = () => {
  let { id } = useParams(); //para que se vea en la pagina
  let { nombre } = useParams();
  let { gender } = useParams();
  const [characters, setCharacters] = useState([]);
  const [personaje, setPersonaje] = useState({});
  const navigate = useNavigate();

  const reqApi = async () => {
    const respuesta = await fetch(`https://rickandmortyapi.com/api/character`)
      .then((res) => res.json())
      .then((json) => setCharacters(json.results)); //se le agrega results para que sea visible
  };

  useEffect(() => {
    let temp = characters?.filter((personaje) => personaje.id === parseInt(id)); //este id que seria /Fitran los producto que necesitamos utilizando el id
    let temp2 = temp[0];
    setPersonaje(temp2); //Seteamos el valor de producto
  }, [id, characters]);
  /*}  useEffect(() => {
        let temp = characters?.filter(
          (character) => character.category === filtros
        );
        setCharactersFiltrados(temp);
      }, [filtros]);
      {
        console.log(setFiltros);
      } */
  //el title en este caso seria el nombre
  return (
    <>
      <div className="contenedor-detalles">
        <div className="columna">
          <div className="imagend">
            <p>
              {" "}
              <img src={personaje?.imagen} alt="" />{" "}
            </p>
          </div>
          <div className="detalles">
            <p>
              <strong>Nombre: </strong> {personaje?.name}
            </p>
            <p>
              <strong>Id: </strong> {personaje?.id}
            </p>
            <p>
              <strong>Género:</strong> {personaje?.gender}
            </p>
            <button onClick={() => {
            navigate ('/Principal')
          }}>Regresar</button>
          </div>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </>
  );
};

export default Detail;

import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../style/Detail.css";

const Detail = () => {
  let { id } = useParams();
  const [characters, setCharacters] = useState([]);
  const [personaje, setPersonaje] = useState({});
  const navigate = useNavigate();

  const reqApi = async () => {
    const respuesta = await fetch(`https://rickandmortyapi.com/api/character`)
      .then((res) => res.json())
      .then((json) => setCharacters(json.results)); //se le agrega results para que sea visible
  };

  useEffect(() => {
    reqApi();
    let temp = characters?.filter((character) => character.id === parseInt(id)); //este id que seria /Fitran los producto que necesitamos utilizando el id
    let temp2 = temp[0];
    setPersonaje(temp2); //Seteamos el valor de producto
  }, [id, characters]);

  return (
    <>
      <div className="contenedor-detalles">
        <div className="columna">
          <div className="imagend">
            <p>
              <img src={personaje?.image} alt="" />
            </p>
          </div>
          <div className="detalles">
            <p>
              <strong>Name: </strong> {personaje?.name}
            </p>
            <p>
              <strong>Gender:</strong> {personaje?.gender}
            </p>
            <p>
              <strong>Species: </strong> {personaje?.species}
            </p>
            <p>
              <strong>Type: </strong> {personaje?.type}
            </p>
            <p>
              <strong>Status: </strong> {personaje?.status}
            </p>
            <div className="boton-detalles">
              <button
                onClick={() => {
                  navigate("/Principal");
                }}
              >
                Regresar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;

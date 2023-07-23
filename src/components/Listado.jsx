import Item from "./Item";
import "../style/Listado.css";

const Listado = ({ characters }) => {
  return (
    <div className="fondo-listado">
      <div className="tarjeta-p">
        <div className="tarjeta">
          {characters.map(
            (character) => (
              <Item
                key={character.id}
                id={character.id}
                nombre={character.name}
                imagen={character.image}
              />
            ) //al mover algo aqui se desconfigura la imagen
          )}
        </div>
      </div>
    </div>
  );
};

export default Listado;

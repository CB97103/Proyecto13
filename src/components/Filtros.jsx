import Categorias from "../data/Categorias.json";
import "../style/Filtros.css";

const Filtros = ({ setFiltros }) => {
  return (
    <>
      <div className="contenedor-categoria">
        <div className="cuadro-categoria">
          <div className="categoria-titulo">
            <h3>Categorias</h3>
          </div>
          <div className="filtros">
            <ul>
              {Categorias.map((categoria) => (
                <li key={categoria.nombre}>
                  <button
                    className="boton-estilo"
                    onClick={() => setFiltros(categoria.valor)}
                  >
                    {categoria.nombre}
                  </button>
                </li>
              ))}
              <li>
                <button
                  className="boton-estilo"
                  onClick={() => setFiltros(null)}
                >
                  Todas las categorias
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filtros;

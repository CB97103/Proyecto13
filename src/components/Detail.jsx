import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"

const Detail = () => {

    let { id } = useParams()
    const [characters, setCharacters] = useState([])  
    const [personaje, setPersonaje] = useState({})  

    const reqApi = async () => {
        const respuesta = await fetch(
          `https://rickandmortyapi.com/api/character`
        )
          .then((res) => res.json())
          .then((json) => setCharacters(json.results)); //se le agrega results para que sea visible
      };
    
      useEffect(() => {
        let temp = characters?.filter(personaje => personaje.id === parseInt(id)) //este id que seria /Fitran los producto que necesitamos utilizando el id
        let temp2 = temp[0] 
        setPersonaje(temp2) //Seteamos el valor de producto
        
    }, [id, characters]) 

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
    return(
        <> 
           <h1> { personaje?.title } </h1>
           
        </>
    )

}

export default Detail;
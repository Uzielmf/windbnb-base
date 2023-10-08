import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Card from "./components/Card";


function App() {
  // La variable data es la que va a almacenar los datos de "stays.json" y setData nos ayudará a guardar esos datos en esa variable. Es necesario que inicialicemos esa variable como un array vacío para evitar errores.
  const [data, setData] = useState([]);


  // Función para traer los datos de "stays.json".
  const getData = async () => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      // Aquí guardamos los datos de "stays.json" en la variable data.
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  // Este Hook te va a ejecutar la función getData cada vez que la página se renderice.
  useEffect(() => {
     getData();
  }, []);


  ////////////////// pruebas para el filtro

  const filterData = (text) => {
    const filtrado = data.filter( (elemento) => elemento.city.toLowerCase().includes(text.toLowerCase()))
  
    return filtrado
  
  }

  const handleFormFilter = (e)=> {
    e.preventDefault()
    const text = e.target[0].value
    const filtrado = filterData(text)
    filtrado == '' ? alert('Lo sentimos no tenemos Airbnb en esa ciudad') :setData(filtrado)
    
  }


  // Puedes ver la variable data en consola.
  console.log(data);
  return (
    <>
    <Nav  FuncionSubmit = {handleFormFilter}/>
    {/* Aquí te dejo un ejemplo de cómo podrías imprimir varios elementos a la vez. */}

    <div className="cards-container">
      {data.map((el, i) => {
        return (
        <Card elemento={el} index={i}/>
        )
      })}
      </div>
    </>
  );
}

export default App;

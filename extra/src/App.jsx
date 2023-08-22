import { useEffect, useState } from "react";
import Producto from "./Components/Producto";

function App() {
   const [loading, setLoading] = useState(false);
   const [productos, setProductos] = useState([]);

   async function promiseTimer() {
      return new Promise((resolve) => {
         setTimeout(() => {
            resolve("hola");
         }, 10000);
      });
   }

   /* 
      Hook de efecto que se encarga de ejecutar una función al momento de que el componente se renderiza. En la lista [] se especifican las variables que se deben de monitorear para que se ejecute la función. Si la lista está vacía, la función se ejecuta una sola vez al momento de renderizar el componente.
   */
   useEffect(() => {
      async function obtenerDatos() {
         setLoading(true);
         const respuesta = await fetch("https://dummyjson.com/products");
         const datos = await respuesta.json();
         console.log(datos);
         setProductos(datos.products);
         setLoading(false);
      }
      async function espera() {
         setLoading(true);
         const respuesta = await promiseTimer();
         console.log(respuesta);
         setLoading(false);
      }
      obtenerDatos();
      //espera();
   }, []);

   // todavía no se ha cargado la información
   if (loading) {
      return (
         <div>
            <h1>Cargando...</h1>
         </div>
      );
   }

   return (
      <div>
         {productos.map((producto) => (
            <Producto producto={producto} key={producto.id} />
         ))}
      </div>
   );
}

export default App;

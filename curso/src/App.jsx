import { useState } from "react";
import BotonConTitulo from "./BotonConTitulo";

function App() {
   // let contador = 0;
   const [contador, setContador] = useState(0)

   function aumentaContador() {
      const nuevoContador = contador + 1;
      setContador(nuevoContador)
   }

   return (
      <div>
         <h1>Hola Mundo</h1>
         <h3>Contador: {contador}</h3>
         <button onClick={aumentaContador} >Dame Click</button>
         <BotonConTitulo numero={1} titulo={"Mi primer Titulo"} /> 
         <BotonConTitulo numero={2} titulo={"Mi Segundo titulo"} />
         <BotonConTitulo numero={3} titulo={"Mi Tercer titulo"} />
      </div>
   );
}

export default App;

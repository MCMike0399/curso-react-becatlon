import { useState } from "react";
import "./Producto.css";
import Details from "./Details";

export default function Producto({ producto }) {
   const [showDetails, setShowDetails] = useState(false);

   function muestraDetalles() {
      setShowDetails(!showDetails);
   }

   return (
      <div>
         <h1 style={{ color: "gray" }}>
            {producto.brand}_{producto.title}
         </h1>
         <h3>{producto.description}</h3>
         <button onClick={muestraDetalles}>{showDetails ? <>Cerrar Detalles</> : <>Mostrar Detalles</>}</button>
         {showDetails && (
            <Details price={producto.price} discountPercentage={producto.discountPercentage} stock={producto.stock} />
         )}
      </div>
   );
}

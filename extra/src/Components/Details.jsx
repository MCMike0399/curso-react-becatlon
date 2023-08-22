export default function Details({price, discountPercentage, stock}) {
   return (
      <div>
         <h3>precio: {price}</h3>
         <h3>discuento: {discountPercentage}</h3>
         <h3>inventario: {stock}</h3>
         
      </div>
   );
}

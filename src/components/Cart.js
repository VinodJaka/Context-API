import TotalContext from "../store/total-context";

const Cart=(props)=>{
    return(
      <TotalContext.Consumer>
        {(total)=>{
          return(
            <div className="customDiv">
            <h3>Cart Component</h3>
            <hr/>
             <ul>
               {
                 props.cart.map((product,index)=>{
                   return(
                     <li key={index}>{product.pName} </li>
                   )
                 })
               }
             </ul>
             {total}
         </div>
   
          )
        }}
      </TotalContext.Consumer>
    )
}

export default Cart;
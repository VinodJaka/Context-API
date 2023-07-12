import TotalContext from "../store/total-context";
import { useContext } from "react";

const Total=()=>{
    const total=useContext(TotalContext);
    return(
                    <div className="customDiv">
                    <h3>Total Component</h3>
                    <hr/>
                     <h2>Total : {total}</h2>
                 </div>
    )
}
export default Total;
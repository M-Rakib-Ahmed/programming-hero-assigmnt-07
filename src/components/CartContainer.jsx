import Avalibale from "./Avalibale";
import Selected from "./Selected";

const CartContainer = ({ addToTogal, togal, buyPlayer }) => {
    return (
        <div> 
           <div>
                <button onClick={() => addToTogal(false)} className={togal ? "btn" :" btn bg-amber-300"}>Available</button>
                <button onClick={() => addToTogal(true)} className={togal ? "btn bg-amber-300" : "btn"}>Selected({buyPlayer.length})</button>
                {
                    togal? <Avalibale></Avalibale>:<Selected></Selected>
                }
           </div>
        </div>
    );
};

export default CartContainer;
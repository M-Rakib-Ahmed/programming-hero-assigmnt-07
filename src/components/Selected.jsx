import { MdDeleteForever } from "react-icons/md";
const Selected = ({ buyPlayer, handleDeletePlayer }) => {
  
    return (
        <div>
          {
           buyPlayer?.map((p, index)=> <div key={index}>
             <h1>{p.name}</h1>
             <img className="w-20" src={p.image} alt="" />
             <button onClick={() => handleDeletePlayer(p.playerId)} className="btn bg-red-500 text-2xl">
              <MdDeleteForever></MdDeleteForever>
             </button>
           </div>)
          }
        </div>
    );
};

export default Selected;
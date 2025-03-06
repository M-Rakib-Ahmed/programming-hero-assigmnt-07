import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaFlag } from "react-icons/fa";
const Avalibale = () => {
   
    const [player, setPlayer]=useState([])
    useEffect(()=>{
        fetch('../../public/player.json')
        .then(res=>res.json())
        .then(data => setPlayer(data))
    },[])
    return (
        <div>
            <h2>avaliable </h2>
           <div className="grid grid-cols-1 
          mt-10 lg:grid-cols-3 ml-12 gap-8">
                {
                    player.map(player => <div>
                        <div className="card bg-base-100 shadow-sm p-5 border text-gray-400">
                            <figure>
                                <img className="w-full"
                                    src="https://i.imgpost.net/2025/03/05/oezs.png"
                                    alt="Shoes" />
                            </figure>
                            <div className="">
                               <div className="flex items-center gap-3">
                                    <CgProfile className="text-xl font-medium"></CgProfile>
                                    <h2 className="card-title text-xl font-medium">{player.name}</h2>
                               </div>
                               <div className="flex items-center gap-3 mt-6">
                                    <FaFlag className="text-xs font-medium"></FaFlag>
                                    <h2 className="card-title text-xs font-medium">{player.country}</h2>
                               </div>
                               <p className="border-b-2 pb-5 text-gray-400"></p>
                               <p className="text-lg font-semibold">Role: {player.role}</p>
                                <p className="text-lg font-medium">Batsman:{player.battingBowlingType}</p>
                             <div className="flex items-center justify-between">
                                    <p>Price${player.biddingPrice}</p>
                                    <button className="btn bg-blue-500 text-white">Chosse Player</button>

                             </div>
                               
                                
                            </div>
                        </div>
                    </div>)
                }
           </div>
        </div>
    );
};

export default Avalibale;
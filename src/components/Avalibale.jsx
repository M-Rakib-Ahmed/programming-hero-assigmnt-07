import { useEffect, useState } from "react";

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
                        <div className="card bg-base-100 shadow-sm">
                            <figure>
                                <img className="w-full"
                                    src="https://i.imgpost.net/2025/03/05/oezs.png"
                                    alt="Shoes" />
                            </figure>
                            <div className="">
                                <h2 className="card-title">Card Title</h2>
                                <p>A card component hasa a figure, a body part, and inside body there are title and actions parts</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
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
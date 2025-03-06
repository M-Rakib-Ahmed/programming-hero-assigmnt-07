import { useState } from "react";
import Avalibale from "./components/Avalibale";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Selected from "./components/Selected";
import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import CartContainer from "./components/CartContainer";
import AbailbalePlayers from "./components/AbailbalePlayers";
const App = () => {
  const [money, setMoney]=useState(0)
  const [togal, setTogal]=useState(false);
  const [buyPlayer, setBuyPlayer]=useState([])

  const deletePrice = (id)=>{
    setMoney(money - id)
    toast('Congrates!! Mamus Labuschange is now your squad')
  }
  const addToBuyPlayer = id =>{
    if(buyPlayer.length >= 6 ){
      toast(`You can't add more than 6 players!`)
      return
    }
    if (money <= 0){
      toast("Not enough coins to buy this player.Claim some Credit")
      return
     
    }
    

    const isExist = buyPlayer.find((p) => p.playerId == id.playerId)
    if (isExist) {
      toast('Alredy isExist')
    }
    else {
      deletePrice(id.biddingPrice)
      const newPlayer = [...buyPlayer, id];
      setBuyPlayer(newPlayer)
    }

  }

  const handleDeletePlayer = (id) => {
    toast('Player remove')
    // handleDeletePrice(id)
    const newDeleteProduct = buyPlayer.filter((p) => p.playerId!=id)
    setBuyPlayer(newDeleteProduct)

  }

  
  const handleAddToMoney = taka => {
   setMoney((money)=> money + taka)
   toast('Credit Added to your Account')
    
  }
  const addToTogal = status=>{
    alert(status)
  if(status == true){
    setTogal(true)
  }
  else[
    setTogal(false)
  ]

    
  }

  return (
    <div>
      <Navbar money={money}></Navbar>
      <Banner handleAddToMoney={handleAddToMoney}></Banner>
     <div className="flex justify-between w-11/12 mx-auto mt-20">
        <AbailbalePlayers></AbailbalePlayers>
        <CartContainer buyPlayer={buyPlayer} togal={togal} addToTogal={addToTogal}></CartContainer>
     </div>
      <div className="flex flex-col lg:flex-row w-11/12 mx-auto">
        <Avalibale addToBuyPlayer={addToBuyPlayer}></Avalibale>
        <Selected handleDeletePlayer={handleDeletePlayer} buyPlayer={buyPlayer}></Selected>
      </div>
     <div>
        <Footer ></Footer>
        
     </div>
    
    </div>
  );
};

export default App;
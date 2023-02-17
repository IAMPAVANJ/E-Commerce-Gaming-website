import { useState,useEffect } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Cart from "./components/Cart/Cart";
import HomePage from "./components/Home/home";
import NavBar from "./components/NavBar/navbar";
import Shop from "./components/Shop/shop";

function App() {
  const [data,setData] = useState([])

//   useEffect(()=>{
//     if(data.length===0){
//         const options = {
//             method: 'GET',
//             headers: {
//                 'X-RapidAPI-Key': 'd09cfc8f05msh707dc42b00e1450p12b003jsn300b5fb674f0',
//                 'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
//             }
//         };
//         fetch('https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc', options)
//            .then(response => response.json())
//            .then(res =>  {setData(data => {return data=res})})
//            .catch(err => console.error(err));
//     }
//  },[])

//  useEffect(()=>{const fetchData = async()=>{
//   const options = {
//    method: 'GET',
//    headers: {
//        'X-RapidAPI-Key': 'd09cfc8f05msh707dc42b00e1450p12b003jsn300b5fb674f0',
//        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
//    }
// };
// const data = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc', options)
//   .then(response => response.json())
//   .then(res =>  {setData(res)})
//   .catch(err => console.error(err));

// }},[])


  return (
    <div>
      
      <Router>
          <NavBar/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>  
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/cart" element={<Cart />} />
          </Routes>
      </Router>
    </div>
     
  );
}

export default App;

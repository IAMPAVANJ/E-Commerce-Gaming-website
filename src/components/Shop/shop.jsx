import { useEffect, useState } from "react"
import Cart from "../Cart/Cart";
import "./shop.css";
const addPrice = (data) => {
    for (let item of data){
        item.price = Math.floor(Math.random()*800+50);
    }
    return 
}
const Shop = ()=>{
    const [data,setData] = useState([]);
    const [cart,setCart] = useState([]);
     useEffect(()=>{
        if(data.length===0){
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'd09cfc8f05msh707dc42b00e1450p12b003jsn300b5fb674f0',
                    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                }
            };
            fetch('https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc', options)
               .then(response => response.json())
               .then(data =>  {addPrice(data);setData(data)})
               .catch(err => console.error(err));
        }
     },[])
     
    return(
        <div className="products">
            {data.map((ele)=>{
        return(
           <div id="productInfo" key={ele.id}> 
                <img src={ele.thumbnail} alt={ele.title} />
                 <p>Title:{ele.title}</p> 
                 <p>Platform:{ele.platform}</p>
                 <p>Release Date:{ele.release_date}</p>
                 <h2>Price:{ele.price}</h2>
                 <button id="buybtn" onClick={()=>{setCart([...cart,ele]);alert("Item Added to cart")}}>Buy Now</button> &nbsp;&nbsp;
                <a href={ele.game_url}><button id="buybtn">Get Free</button></a>
            </div>
        )
   })}
      <Cart cartData={cart}/>
        </div>
    )
}

export default Shop;
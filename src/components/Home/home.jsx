import React from "react";
import "./home.css"
import {Link} from "react-router-dom"
const HomePage =()=>{

    return(
        <div id="home-container">
            <h1>WelCome To My Gaming Community</h1>
            <img src="./Logo.png" alt="Pavan gaming" />
            <div>
                <h2>About me</h2>
                <div>
                    <p>
                        Hi I am Pavan. A Enthusiastic Web Developer. This is Website Where you can Get games is cheaper Cost.
                        But You can also Get these games free of cost by Clicking on get Free Button.
                    </p>
                    <h3>Go To Shop</h3>
                    <Link to="/Shop"><button id="homebtn">Shop</button></Link>
                </div>
            </div>
        </div>
        
      
    )
}
export default HomePage;
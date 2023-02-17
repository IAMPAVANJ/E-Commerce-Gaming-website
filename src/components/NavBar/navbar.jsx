import React from "react";
import {Link} from "react-router-dom"
import {ShoppingCart} from "phosphor-react"
import "./navbar.css"
const NavBar = ()=>{
    return(
        <div className="Navbar">
            <div className="NavBarLinks">
                <h2>Pavan's Shop</h2>
                <Link to="/"><button id="homebtn">Home</button></Link>
                <h1>E-Commerce</h1>
                <Link to="/Shop"><button id="homebtn">Shop</button></Link>
                <Link to="/cart"><ShoppingCart color="White" size={42}/></Link>
            </div>
        </div>
    )
}

export default NavBar;
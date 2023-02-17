import { createContext, useState } from "react";
import Shop from "../Shop/shop";

const GetDefaultCart = (props)=>{
    let cart = {};
    for(let i=0;i<props.data.length+1;i++){
        cart[i]=0
    }
    return cart
}

const ShopContext = createContext(null);
const ShopContextProvider = (props)=>{
    const [cartItem,setCartItem] = useState(GetDefaultCart())
    return(
        <ShopContext.Provider>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;
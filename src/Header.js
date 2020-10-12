import React from 'react';
import alogo from './Images/alogo.png';
import {Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from './StateProvider';
import {auth} from "./firebase";

function Header() {
    const [{ basket, user }] = useStateValue();
    const login=()=>{
        if (user){
            auth.signOut();
        }
    };
    return ( <nav className="header">
    {/* logo*/}
    <Link to="/">
        <img 
            className="header_logo" 
            src={alogo} 
            alt="Logo"
        />
    </Link>
     
    {/* search*/}
    <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon  className="header_searchicon"/>
        
    </div>

    {/* Links*/}
    <div className="headerNav">
        {/*1 link*/}
        <Link to={!user && '/login'} className="header_link">
        <div Onclick={login} className="header_option">
        <span className="header_option1">Hello{!user ? 'Guest' : user.email}</span>
        <span className="header_option2">{user ? 'Sign Out' : 'Sign In'}</span>
        </div>   
        </Link>

        {/*2 link*/}
        <Link to="/checkout" className="header_link">
        <div className="header_option">
        <span className="header_option1">Returns</span>
        <span className="header_option2">& Orders</span>
        </div>   
        </Link>

        {/*3 link*/}
        <Link to="/login" className="header_link">
        <div className="header_option">
        <span className="header_option1">Your</span>
        <span className="header_option2">Prime</span>
        </div>   
        </Link>
        {/*4 link*/}
        <Link to="/checkout" className="header_link">
        <div className="header_optionBasket">
        <ShoppingBasketIcon/>
        <span className="header_option2 header_basketcount">
         {basket?.length} 
         </span>
        </div>   
    </Link>
    </div>
    
                
</nav>
    
);
}



export default Header;

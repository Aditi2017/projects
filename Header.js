import React from 'react'
import './Header.css'
import { Link,useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { useStateValue } from "./StateProvider";
import { auth } from './firebase';
import reducer from './reducer';  
import Login from "./Login"; 



function Header() {

  const [{basket ,user}]= useStateValue();
   
  const login = () => {
    
             if(user) {
              
     
      auth.signOut();
              
    }
      
    
  };

    return (
        
            <nav className="header">
                <Link to="/">
                <img className="header__logo" src = "https://cdn.logojoy.com/wp-content/uploads/2018/08/23161101/5-25.png" />
                </Link>
                <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon" />
                </div>
                
                <div className="header__nav">
                    
                    <Link to = { !user && "/Login" } className="header__link">

                    <div  onClick={login} className="header__option">
                    <span className="header__optionLineOne">Hello,</span>
                      <span  className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                      
                    </Link>

                    <Link  className="header__link">
                    <div className="header__option">
                    <span className="header__optionLineOne"  className="header__optionLineOne">Returns</span>
                      <span className="header__optionLineTwo">&Orders</span>
                    </div>
                      
                    </Link>

                    <Link to="/" className="header__link">
                    <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                      <span className="header__optionLineTwo">Account</span>
                    </div>
                      
                    </Link>
                    <Link to="/checkout" className="header__link">
                        <div className="header__optionBasket">
                            <ShoppingBasketIcon />
                           <span className="header__optionLineTwo header__basketNumber">{basket?.length}</span> 
                        </div>
                    </Link>
                </div>
                

            
        </nav>
    )
}

export default Header 

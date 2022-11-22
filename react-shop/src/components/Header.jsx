import React, {useState} from "react";
import "Styles/header.scss"
import MenuDesktop from 'Components/MenuDesktop'

import iconMenu from "Icons/icon_menu.svg";
import logo from "Logos/logo_yard_sale.svg";
import shoppingCart from "Icons/icon_shopping_cart.svg";


const Header = () => {
const [toggle, setToggle] = useState(false);
const handleToggle = () => {
    setToggle(!toggle)
};

    return (
        <nav>
            <img src={iconMenu} alt="menu" className="nav-menu"/>

            <div className="navbar-left">
                <img src={logo} alt="logo" className="nav-logo"/>

                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>

            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToggle}>platzi@example.com</li>
                    <li className="navbar-shopping-cart">
                        <img src={shoppingCart} alt="shopping cart"/>
                        <div>2</div>
                    </li>
                </ul>
            </div>
            {toggle && <MenuDesktop/>}
            
        </nav>
    );
}

export default Header;

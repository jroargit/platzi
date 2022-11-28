import React, {useState, useContext} from "react";
import "Styles/header.scss";
import MenuDesktop from 'Components/MenuDesktop';
import AppContext from '../context/AppContext';
import iconMenu from "Icons/icon_menu.svg";
import logo from "Logos/logo_yard_sale.svg";
import shoppingCart from "Icons/icon_shopping_cart.svg";
import MyOrder from '../containers/MyOrder';


const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const {state} = useContext(AppContext);
    const handleToggle = () => {
        setToggle(!toggle);
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
                    <li className="navbar-shopping-cart" onClick={() => setToggleOrders(!toggleOrders)}>
                        <img src={shoppingCart} alt="shopping cart"/>
                        <div>{state.cart.length > 0 ? <div> {state.cart.length} </div> : null }</div>
                    </li>
                </ul>
            </div>
            {toggle && <MenuDesktop/>}
            {toggleOrders && <MyOrder/>}
            
        </nav>
    );
};

export default Header;

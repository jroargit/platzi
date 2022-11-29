import React, {useState, useContext} from "react";
import MenuDesktop from 'Components/MenuDesktop';
import AppContext from 'Context/AppContext';
import iconMenu from "Icons/icon_menu.svg";
import logo from "Logos/logo_yard_sale.svg";
import shoppingCart from "Icons/icon_shopping_cart.svg";
import MyOrder from 'Containers/MyOrder';
import styles from 'styles/Header.module.scss';


const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const {state} = useContext(AppContext);
    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <nav className={styles.nav}>
            <image src={iconMenu} alt="menu" className="nav-menu"/>

            <div className="navbar-left">
                <image src={logo} alt="logo" className="nav-logo"/>

                <ul>
                    <li>
                        <link href="/">All</link>
                    </li>
                    <li>
                        <link href="/">Clothes</link>
                    </li>
                    <li>
                        <link href="/">Electronics</link>
                    </li>
                    <li>
                        <link href="/">Furnitures</link>
                    </li>
                    <li>
                        <link href="/">Toys</link>
                    </li>
                    <li>
                        <link href="/">Others</link>
                    </li>
                </ul>
            </div>

            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToggle}>platzi@example.com</li>
                    <li className="navbar-shopping-cart" onClick={() => setToggleOrders(!toggleOrders)}>
                        <image src={shoppingCart} alt="shopping cart"/>
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

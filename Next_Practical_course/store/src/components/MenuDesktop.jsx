import React from "react";
import styles from 'Styles/menuDesktop.module.scss';

const MenuDesktop = () => {
    return (
        <div className={styles.desktopMenu}>
            <ul>
                <li>
                    <link href="/" className="title">My orders</link>
                </li>

                <li>
                    <link href="/">My account</link>
                </li>

                <li>
                    <link href="/">Sign out</link>
                </li>
            </ul>
        </div>
    );
};

export default MenuDesktop;

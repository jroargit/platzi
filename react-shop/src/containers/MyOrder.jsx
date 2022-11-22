import React, {useContext} from "react";
import "../styles/myOrder.scss"
import OrderItem from "../components/OrderItems";
import AppContext from "../context/AppContext";

const MyOrder = () => {
    const {state} = useContext(AppContext);
    return (
        <div className="my-order">
            <div className="my-order-container">
                <h1 className="title">My orders</h1>

                <div className="my-order-content">
                    {state.cart.map(item => (
                        <OrderItem product = {product} key={`orderItem-${product.id}`}/>
                    ))}
                    <div className="order">
                        <p>
                            <span>03.25.21</span>
                            <span>6 articles</span>
                        </p>
                        <p>$560.00</p>
                        <img src="./icons/flechita.svg" alt="arrow"/>
                    </div>

                    <div className="order">
                        <p>
                            <span>03.25.21</span>
                            <span>6 articles</span>
                        </p>
                        <p>$560.00</p>
                        <img src="./icons/flechita.svg" alt="arrow"/>
                    </div>

                    <div className="order">
                        <p>
                            <span>03.25.21</span>
                            <span>6 articles</span>
                        </p>
                        <p>$560.00</p>
                        <img src="./icons/flechita.svg" alt="arrow"/>
                    </div>

                    <div className="order">
                        <p>
                            <span>03.25.21</span>
                            <span>6 articles</span>
                        </p>
                        <p>$560.00</p>
                        <img src="./icons/flechita.svg" alt="arrow"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;
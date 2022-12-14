import React, { useContext } from 'react';
import OrderItem from 'Components/OrderItems';
import AppContext from 'Context/AppContext';
import arrow from 'Icons/flechita.svg';
import styles from 'styles/myOrder.module.scss';

const MyOrder = () => {
	const { state } = useContext(AppContext);

	const sumTotal = () => {
		const reducer = (acumulator, currentValue) => acumulator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	};
	
	return (
		<aside className={styles.MyOrder}>
			<div className="title-container">
				<image src={arrow} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map(product => (
					<OrderItem product={product} key={`orderItem-${product.id}`} />
				))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
};

export default MyOrder;

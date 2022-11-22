import React from 'react';
import ProductItem from 'Components/ProductItem';
import 'Styles/productList.scss';

const ProductList = () => {
	return (
		<section className="main-container">
			<div className="ProductList">
				<ProductItem />
			</div>
		</section>
	);
}

export default ProductList;

import React from 'react';
import PropTypes from 'prop-types';
import { Link, useParams, useLocation } from 'react-router-dom';

const Product = ({ addToCart, products }) => {
  const { id } = useParams();
  const location = useLocation();

  const handleBuy = () => {
    addToCart(id);
  };

  return (
    <div>
      <img
        src={products[id].src}
        alt={products[id].title}
        style={{ height: '80%' }}
      />
      <p>{products[id].title}</p>
      <Link
        to={{
          pathname: '/cart',
          state: { ...location.state, modal: false, productId: id },
        }}
        onClick={handleBuy}
        className='btn btn-primary'
      >
        Buy
      </Link>
    </div>
  );
};

Product.propTypes = {
  addToCart: PropTypes.func,
  products: PropTypes.arrayOf(PropTypes.object),
};

export default Product;

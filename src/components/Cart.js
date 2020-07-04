import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, products }) => {
  return (
    <div>
      {Object.keys(cartItems).length === 0 ? <p>Your cart is empty</p> : ''}
      <ul className='list-group list-group-flush'>
        {Object.keys(cartItems).map((item) => (
          <li key={item} className='list-group-item'>
            {products[item].title} - {cartItems[item]}
          </li>
        ))}
      </ul>
      <Link to='/checkout' className='btn btn-primary'>
        Checkout
      </Link>
      <Link to='/' className='btn btn-info'>
        Home
      </Link>
    </div>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.objectOf(PropTypes.number),
  products: PropTypes.arrayOf(PropTypes.object),
};

export default Cart;

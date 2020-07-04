import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

const Checkout = ({ cartItems, products }) => {
  let count = 0;

  return (
    <div>
      <h1>Invoice</h1>
      <table className='table table-bordered'>
        <tbody>
          {Object.keys(cartItems).map((item) => {
            count += cartItems[item];
            return (
              <tr key={item}>
                <td>{products[item].title}</td>
                <td>{cartItems[item]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p>Total: {count}</p>
    </div>
  );
};

Checkout.propTypes = {
  cartItems: PropTypes.objectOf(PropTypes.number),
  products: PropTypes.arrayOf(PropTypes.object),
};

export default Checkout;

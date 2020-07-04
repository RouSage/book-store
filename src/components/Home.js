import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Copy from './Copy';

const Home = ({ products }) => {
  const location = useLocation();

  return (
    <div>
      <Copy />
      <p>
        <Link to='/cart' className='btn btn-danger'>
          Cart
        </Link>
      </p>
      <div>
        {products.map((product) => (
          <Link
            key={product.id}
            to={{
              pathname: `/products/${product.id}`,
              state: { modal: true, returnTo: location.pathname },
            }}
          >
            <img
              src={product.src}
              alt={product.title}
              height='100'
              style={{ margin: 10 }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

Home.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

export default Home;

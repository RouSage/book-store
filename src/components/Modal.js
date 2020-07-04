import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Modal = ({ children, returnTo }) => {
  const styles = {
    position: 'fixed',
    top: '20%',
    right: '20%',
    bottom: '20%',
    left: '20%',
    width: 450,
    height: 400,
    padding: 20,
    boxShadow: '0px 0px 150px 130px rgba(0, 0, 0, 0.5)',
    overflow: 'auto',
    background: '#fff',
  };

  return (
    <div style={styles}>
      <p>
        <Link to={returnTo}>Back</Link>
      </p>
      {children}
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  returnTo: PropTypes.string,
};

export default Modal;

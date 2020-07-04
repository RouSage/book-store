import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Modal from './Modal';
import Heading from './Heading';

const Layout = ({ children }) => {
  const location = useLocation();
  const isModal = useRef(false);
  const previousChildren = useRef(null);

  useEffect(() => {
    isModal.current = location.state && location.state.modal;

    if (isModal) {
      previousChildren.current = children;
    }
  }, [children, location.key, location.state]);

  return (
    <div className='well'>
      <Heading />
      <div>
        {isModal.current ? previousChildren.current : children}
        {isModal.current && (
          <Modal isOpen returnTo={location.state.returnTo}>
            {children}
          </Modal>
        )}
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default Layout;

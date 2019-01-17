import React from 'react';
import PropTypes from 'prop-types';

const Page = ({ children }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    }}
  >
    {children}
  </div>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;

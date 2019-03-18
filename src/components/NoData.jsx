import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as NoDataImage } from '../assets/icons/undraw_task_31wc.svg';
import '../styles/no-data.scss';

const NoData = ({ children }) => (
  <div className="no-data">
    <NoDataImage />
    {children}
  </div>
);

NoData.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
export default NoData;

import React from 'react';
import PropTypes from 'prop-types';
import '../styles/model-card.scss';

const ModelCard = ({ firstName, lastName }) => (
  <div className="model-card">
    {firstName}
    {' '}
    {lastName}
  </div>
);

ModelCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};
export default ModelCard;

import React from 'react';
import PropTypes from 'prop-types';

const RadioFormInput = ({
  title, name, value, handleChange, id, checked,
}) => (
  <div className="radio-container">
    <input
      id={id}
      name={name}
      type="radio"
      value={value}
      onChange={handleChange}
      checked={checked}
    />
    <span className="radio" />
    <label htmlFor={id}>{title}</label>
  </div>
);

RadioFormInput.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
};

RadioFormInput.defaultProps = {
  checked: false,
};
export default RadioFormInput;

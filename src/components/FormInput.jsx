import React from 'react';
import PropTypes from 'prop-types';
import '../styles/form-input.scss';

const FormInput = ({
  title, name, type, value, handleChange, placeholder,
}) => (
  <div className="form-input">
    <label htmlFor={name}>{title}</label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  </div>
);

FormInput.defaultProps = {
  value: '',
};

FormInput.propTypes = {
  value: PropTypes.string,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};
export default FormInput;
import React, { PropTypes } from 'react';

const PasswordInput = ({ error, name, onChange, placeholder, value }) => {
  return (
    <div className="password-input">
      <div className="field">
      {error && <div className="alert alert-danger">{error}</div>}
        <input
          type="password"
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}/>
      </div>
    </div>
  );
};

PasswordInput.propTypes = {
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

export default PasswordInput;

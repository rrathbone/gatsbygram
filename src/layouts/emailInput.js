import React, { PropTypes } from 'react';

const EmailInput = ({ error, name, onChange, placeholder, value }) => {
  return (
    <div className="email-input">
      <div className="field">
      {error && <div className="alert alert-danger">{error}</div>}
        <input
          type="email"
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}/>
      </div>
    </div>
  );
};

EmailInput.propTypes = {
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

export default EmailInput;

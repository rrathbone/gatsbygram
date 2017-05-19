import React, { PropTypes } from 'react';

const TextInput = ({ error, name, onChange, placeholder, value }) => {
  return (
    <div className="text-input">
    {error && <div className="alert alert-danger">{error}</div>}
      <div className="field">
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}/>
      </div>
    </div>
  );
};

TextInput.propTypes = {
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

export default TextInput;

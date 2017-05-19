import React from 'react'
import EmailInput from '../common/emailInput'
import PasswordInput from '../common/passwordInput'

const ConnectExistingForm = ({ errors, onChange, onSave, saving, user }) => {
  return (
    <form className="connect-form">
      <EmailInput
        error={errors.email}
        name="email"
        onChange={onChange}
        placeholder="email"
        type="email"
        value={user.email}
      />
      <PasswordInput
        error={errors.password}
        name="password"
        onChange={onChange}
        placeholder="password"
        type="password"
        value={user.password}
      />
      <div className="row form-btn">
        <input
          disabled={saving}
          onClick={onSave}
          type="submit"
          value="Login"
        />
      </div>
    </form>
  )
}

ConnectExistingForm.propTypes = {
  errors: React.PropTypes.object,
  onChange: React.PropTypes.func.isRequired,
  onSave: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  user: React.PropTypes.object.isRequired
}

export default ConnectExistingForm

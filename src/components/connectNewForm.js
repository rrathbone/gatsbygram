import React from 'react'
import EmailInput from '../common/emailInput'
import PasswordInput from '../common/passwordInput'
import TextInput from '../common/textInput'

const ConnectNewForm = ({ errors, onChange, onSave, saving, user }) => {
  return (
    <form className="connect-form">
      <TextInput
        error={errors.fullName}
        name="fullName"
        onChange={onChange}
        placeholder="full name"
        type="text"
        value={user.fullName}
      />
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
      <PasswordInput
        error={errors.confirmPassword}
        name="confirmPassword"
        onChange={onChange}
        placeholder="confirm password"
        type="password"
        value={user.confirmPassword}
      />
      {saving ? <p>Account successfully created</p> : null}
      <div className="row form-btn">
        <input
          disabled={saving}
          onClick={onSave}
          type="submit"
          value="Next"
        />
      </div>
    </form>
  )
}

ConnectNewForm.propTypes = {
  errors: React.PropTypes.object,
  onChange: React.PropTypes.func.isRequired,
  onSave: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  user: React.PropTypes.object.isRequired
}

export default ConnectNewForm

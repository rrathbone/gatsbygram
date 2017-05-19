import React from 'react'
import EmailInput from '../common/emailInput'
import TextInput from '../common/textInput'

const SignupForm = ({ errors, onChange, onSave, saving, user }) => {
  return (
    <div className="signup-row">
      <form id="signup-form">
        <TextInput
          error={errors.firstName}
          name="firstName"
          onChange={onChange}
          placeholder="first name"
          type="text"
          value={user.firstName}
        />
        <TextInput
          error={errors.lastName}
          name="lastName"
          onChange={onChange}
          placeholder="last name"
          type="text"
          value={user.lastName}
        />
        <EmailInput
          error={errors.email}
          name="email"
          onChange={onChange}
          placeholder="email"
          type="email"
          value={user.email}
        />
        <TextInput
          error={errors.phone}
          name="phone"
          onChange={onChange}
          placeholder="mobile phone"
          type="text"
          value={user.phone}
        />
        <p>We will send a verification code to this number</p>
        <div className="row form-btn">
          <input
            disabled={saving}
            onClick={onSave}
            type="submit"
            value="Next"
          />
        </div>
      </form>
    </div>
  )
}

SignupForm.propTypes = {
  errors: React.PropTypes.object,
  onChange: React.PropTypes.func.isRequired,
  onSave: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  user: React.PropTypes.object.isRequired
}

export default SignupForm

import React from 'react'
import TextInput from '../common/textInput'

const AddPayment = ({ errors, onChange, onSave, saving, payment }) => {
  return (
    <form className="add-payment">
      <TextInput
        error={errors.ccNumber}
        name="ccNumber"
        onChange={onChange}
        placeholder="credit card number"
        pattern="\d{16}"
        type="text"
        value={payment.ccNumber}
      />
      <TextInput
        error={errors.expDate}
        name="expDate"
        onChange={onChange}
        placeholder="expiration date"
        type="date"
        value={payment.expDate}
      />
      <TextInput
        error={errors.cvc}
        name="cvc"
        onChange={onChange}
        placeholder="verification number"
        type="number"
        value={payment.cvc}
      />
      <TextInput
        error={errors.fullName}
        name="fullName"
        onChange={onChange}
        placeholder="full name"
        type="text"
        value={payment.fullName}
      />
    </form>
  )
}

AddPayment.propTypes = {
  errors: React.PropTypes.object,
  onChange: React.PropTypes.func.isRequired,
  onSave: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  payment: React.PropTypes.object.isRequired
}

export default AddPayment

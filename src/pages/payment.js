// import React, { Component, PropTypes } from 'react'
// import { connect } from 'react-redux'
// import { Link } from 'react-router'
// import { bindActionCreators } from 'redux'
//
// import * as authActions from '../../actions/authActions'
//
// import PaymentForm from './paymentForm'
//
// class AddPayment extends Component {
//   constructor(props) {
//     super(props)
//
//     this.state = {
//       payment: Object.assign({}, this.props.payment),
//       errors: {},
//       optional: false,
//       saving: false
//     }
//
//     this.savePayment = this.savePayment.bind(this)
//     this.updateUserPaymentState = this.updateUserPaymentState.bind(this)
//   }
//
//   updateUserPaymentState(event) {
//     const field = event.target.name
//     let payment = this.state.payment
//     payment[field] = event.target.value
//
//     return this.setState({ payment: payment })
//   }
//
//   redirect() {
//     this.setState({ saving: false })
//     this.context.router.push('/verification')
//   }
//
//   savePayment(event) {
//     event.preventDefault()
//
//     if(!this.addPaymentInfoValidation()) {
//       return
//     }
//
//     this.setState({ saving: true })
//
//     if(this.addPaymentInfoValidation()) {
//       this.redirect()
//     }
//
//     // this.props.actions.savePayment(this.state.payment)
//     //   .then(() => this.redirect())
//     //   .catch(error => {
//     //     this.setState({ saving: false })
//     //   })
//   }
//
//   addPaymentInfoValidation() {
//     let formIsValid = true
//     let errors = {}
//
//     const ccNumber = this.state.payment.ccNumber
//     const expDate = this.state.payment.expDate
//     const cvc = this.state.payment.cvc
//     const fullName = this.state.payment.fullName
//
//     if(ccNumber === '') {
//       errors.ccNumber = 'Credit card number must not be blank'
//       // formIsValid = false
//     }
//
//     if(expDate === '') {
//       errors.expDate = 'Expiration date must not be blank'
//       // formIsValid = false
//     }
//
//     if(cvc === '') {
//       errors.cvc = 'Verification number must not be blank'
//       // formIsValid = false
//     }
//
//     if(fullName === '') {
//       errors.fullName = 'Full name must not be blank'
//       // formIsValid = false
//     }
//
//     this.setState({ errors: errors })
//
//     return formIsValid
//   }
//
//   render() {
//     const syc = '../../public/images/syc_logo.jpeg'
//     const optional = this.state.optional
//
//     return (
//       <div className="account-flow">
//         <div className="account-forms payment">
//           <img src={syc} className="logo-service" alt="SYC logo"/>
//           {optional ? <h1 className="account-header">Add your payment information (optional)</h1>
//             : <h1 className="account-header">Add your payment information</h1>
//           }
//
//           <PaymentForm
//             onChange={this.updateUserPaymentState}
//             onSave={this.savePayment}
//             payment={this.state.payment}
//             errors={this.state.errors}
//             saving={this.state.saving}
//           />
//
//           {optional ?
//             <div><h5 id="charge-card">We will charge your credit card to pay for the following:</h5>
//               <ul id="charge-items">
//                 <li>The metered taxi ride or flat rate</li>
//                 <li>The metered extras</li>
//                 <li>Tolls</li>
//                 <li>20% tip for the driver</li>
//               </ul>
//             </div>
//             : null }
//
//           <div className="row checkbox">
//             <input type="checkbox" id="checkboxInput" value="1" className="square"/>
//             <label htmlFor="checkboxInput"></label>
//             <p className="save-skip">Save payment info</p>
//           </div>
//
//           <div className="row form-btn">
//             <input
//               disabled={this.state.saving}
//               onClick={this.savePayment}
//               type="submit"
//               value="Create Account"
//             />
//           </div>
//
//           {optional ? <p className="save-skip later">Skip. I{"'"}ll do this later</p>
//           : <p className="save-skip later"></p>}
//           <Link to="legal">Terms of Service</Link>
//         </div>
//       </div>
//     );
//   }
// }
//
// AddPayment.contextTypes = {
//   router: PropTypes.object
// }
//
// AddPayment.propTypes = {
//   actions: PropTypes.object.isRequired,
//   users: PropTypes.array.isRequired
// }
//
// // Redux connect and related functions
// function mapStateToProps(state, ownProps) {
//   let payment = { ccNumber: '', expDate: '', cvc: '', fullName: '' }
//
//   return {
//     errorMessage: state.auth.error,
//     users: state.users,
//     payment: payment
//   }
// }
//
// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(authActions, dispatch)
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(AddPayment)

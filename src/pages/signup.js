// import React, { Component, PropTypes } from 'react'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import axios from 'axios'
//
// import * as authActions from '../../actions/authActions'
//
// import SignupForm from './signupForm'
//
// class SignupPage extends Component {
//   // Initialize state
//   constructor(props, context) {
//     super(props, context)
//
//     this.state = {
//       user: Object.assign({}, this.props.user),
//       errors: {},
//       saving: false
//     }
//
//     // Call bind functions
//     this.saveUser = this.saveUser.bind(this)
//     this.updateUserState = this.updateUserState.bind(this)
//   }
//
//   updateUserState(event) {
//     const field = event.target.name
//     let user = this.state.user
//     user[field] = event.target.value
//
//     return this.setState({ user: user })
//   }
//
//   redirect() {
//     this.setState({ saving: false })
//     this.context.router.push('/verification')
//   }
//
//   saveUser(event) {
//     event.preventDefault()
//
//     if(!this.signupFormIsValid()) {
//       return
//     }
//     this.setState({ saving: true })
//
//     let user = this.state.user
//
//     // axios.post('http://localhost:10010/api/users', { firstName: user.firstName, lastName: user.lastName, phone: user.phone, email: user.email })
//     // .then((response) => {
//     //   console.log('NEW USER:', this.state.user);
//     //   console.log('Super secret validation code', this.props.codes[0].code);
//     // });
//
//     this.props.actions.saveUser(this.state.user)
//       .then(() => this.redirect())
//       .catch(error => {
//         this.setState({ saving: false })
//       })
//   }
//
//   signupFormIsValid() {
//     let formIsValid = true
//     let errors = {}
//
//     const firstName = this.state.user.firstName
//     const lastName = this.state.user.lastName
//     const phone = this.state.user.phone
//     const email = this.state.user.email
//
//     if(firstName === '') {
//       errors.firstName = 'First name must not be blank'
//       // formIsValid = false
//     }
//
//     if(lastName === '') {
//       errors.lastName = 'Last name must not be blank'
//       // formIsValid = false
//     }
//
//     const validNumber = /^\d{3}-?\d{3}-?\d{4}$/g
//     const validEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
//
//     if(phone === '') {
//       errors.phone = 'Phone number must not be blank.'
//       // formIsValid = false
//     } else if(!validNumber.test(phone)) {
//       errors.phone = 'Phone number must be valid.'
//       // formIsValid = false
//     }
//
//     if(email === '') {
//       errors.email = 'Email must not be blank.'
//       // formIsValid = false
//     } else if(!validEmail.test(email)) {
//       errors.email = 'Email must be valid.'
//       // formIsValid = false
//     }
//
//     this.setState({ errors: errors })
//
//     return formIsValid
//   }
//
//   // Render function that calls a child component
//   // <div className="auth-banner">
//   //   <div className="row back-forward">
//   //     <p className="go-back">{"<"} Back</p>
//   //     <p className="cancel"> Cancel</p>
//   //   </div>
//   // </div>
//   render() {
//     return (
//       <div className="signup-form account-flow">
//         <div className="account-screens">
//           <div className="account-forms">
//             <h1 className="account-header">To use ride services within Migo, some information is required</h1>
//             <SignupForm
//               onChange={this.updateUserState}
//               onSave={this.saveUser}
//               user={this.state.user}
//               errors={this.state.errors}
//               saving={this.state.saving}
//             />
//           </div>
//         </div>
//       </div>
//     )
//   }
// }
//
// SignupPage.contextTypes = {
//   router: PropTypes.object
// }
//
// // PropTypes that provide proptypes validation
// SignupPage.propTypes = {
//   actions: PropTypes.object.isRequired,
//   codes: PropTypes.array.isRequired,
//   users: PropTypes.array.isRequired
// }
//
// // Redux connect and related functions
// function mapStateToProps(state, ownProps) {
//   let user = { firstName: '', lastName: '', phone: '', email: '' }
//
//   return {
//     errorMessage: state.auth.error,
//     users: state.users,
//     codes: state.codes,
//     user: user
//   }
// }
//
// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(authActions, dispatch)
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(SignupPage)

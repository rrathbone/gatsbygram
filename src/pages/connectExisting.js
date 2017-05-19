// import React, { Component, PropTypes } from 'react'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
//
// import * as authActions from '../../actions/authActions'
//
// import ConnectExistingForm from './connectExistingForm'
//
// class ConnectExisting extends Component {
//   constructor(props) {
//     super(props)
//
//     this.state = {
//       user: Object.assign({}, this.props.user),
//       errors: {},
//       saving: false
//     }
//
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
//     this.context.router.push('/services')
//   }
//
//   saveUser(event) {
//     event.preventDefault()
//
//     if(!this.connectExistingFormIsValid()) {
//       return
//     }
//
//     this.setState({ saving: true })
//
//     this.props.actions.saveUser(this.state.user)
//       .then(() => this.redirect())
//       .catch(error => {
//         this.setState({ saving: false })
//       })
//   }
//
//   connectExistingFormIsValid() {
//     let formIsValid = true
//     let errors = {}
//
//     const email = this.state.user.email
//     const password = this.state.user.password
//
//     const validEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
//
//     if(email === '') {
//       errors.email = 'Email must not be blank.'
//       // formIsValid = false
//     } else if(!validEmail.test(email)) {
//       errors.email = 'Email must be valid.'
//       // formIsValid = false
//     }
//
//     const strongRegex = /^(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}$/
//
//     if(password === '') {
//       errors.password = 'Password must not be blank.'
//       // formIsValid = false
//     } else if(!strongRegex.test(password)) {
//       errors.password = 'Password must have at least 8 characters, 1 special character, and 1 number.'
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
//
//     return (
//       <div className="account-flow">
//         <div className="account-forms connect-existing">
//           <img src={syc} className="logo-service" alt="SYC logo"/>
//           <h1 className="account-header">Please login to your Seattle Yellow Cab account</h1>
//           <h5>phone 626-555-1234</h5>
//           <ConnectExistingForm
//             onChange={this.updateUserState}
//             onSave={this.saveUser}
//             user={this.state.user}
//             errors={this.state.errors}
//             saving={this.state.saving}
//           />
//
//           <div className="forgot-login">
//             <a href="#">Forgot ID or Password?</a>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
//
// ConnectExisting.contextTypes = {
//   router: PropTypes.object
// }
//
// ConnectExisting.propTypes = {
//   actions: PropTypes.object.isRequired,
//   users: PropTypes.array.isRequired
// }
//
// // Redux connect and related functions
// function mapStateToProps(state, ownProps) {
//   let user = { email: '', password: '' }
//
//   return {
//     errorMessage: state.auth.error,
//     users: state.users,
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
// export default connect(mapStateToProps, mapDispatchToProps)(ConnectExisting)

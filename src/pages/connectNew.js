// import React, { Component, PropTypes } from 'react'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
//
// import * as authActions from '../../actions/authActions'
//
// import ConnectNewForm from './connectNewForm'
//
// class ConnectNew extends Component {
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
//     this.context.router.push('/payment')
//   }
//
//   saveUser(event) {
//     event.preventDefault()
//
//     if(!this.createNewFormIsValid()) {
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
//   createNewFormIsValid() {
//     let formIsValid = true
//     let errors = {}
//
//     const fullName = this.state.user.fullName
//     const email = this.state.user.email
//     const password = this.state.user.password
//     const confirmPassword = this.state.user.confirmPassword
//
//     if(fullName === '') {
//       errors.fullName = 'Full name must not be blank'
//       // formIsValid = false
//     }
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
//     } else if(!password.match(confirmPassword)) {
//       errors.password = 'Passwords do not match.'
//       // formIsValid = false
//     }
//
//     if(confirmPassword === '') {
//       errors.confirmPassword = 'Password confirmation cannot be blank.'
//       // formIsValid = false
//     } else if(!confirmPassword.match(password)) {
//       errors.confirmPassword = 'Passwords do not match.'
//       // formIsValid = false
//     }
//
//     this.setState({ errors: errors })
//
//     return formIsValid
//   }
//
//
//   render() {
//     const syc = '../../public/images/syc_logo.jpeg'
//
//     return (
//       <div className="account-flow">
//         <div className="account-forms connect-new">
//           <img src={syc} className="logo-service" alt="SYC logo"/>
//           <h1 className="account-header">Create a Seattle Yellow Cab account.</h1>
//           <h5><span id="phone">phone</span><span id="number">626-555-1234</span></h5>
//           <ConnectNewForm
//             onChange={this.updateUserState}
//             onSave={this.saveUser}
//             user={this.state.user}
//             errors={this.state.errors}
//             saving={this.state.saving}
//           />
//         </div>
//       </div>
//     );
//   }
// }
//
// ConnectNew.contextTypes = {
//   router: PropTypes.object
// }
//
// ConnectNew.propTypes = {
//   actions: PropTypes.object.isRequired,
//   users: PropTypes.array.isRequired
// }
//
// // Redux connect and related functions
// function mapStateToProps(state, ownProps) {
//   let user = { fullName: '', email: '', password: '', confirmPassword: '' }
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
// export default connect(mapStateToProps, mapDispatchToProps)(ConnectNew)

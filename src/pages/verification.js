// import React, { Component, PropTypes } from 'react'
// import { connect } from 'react-redux'
// import { Link } from 'react-router'
// import { bindActionCreators } from 'redux'
// import { browserHistory } from 'react-router'
// import ReactPoint from 'react-point'
// // import Modal from 'react-awesome-modal'
//
// import * as verificationActions from '../../actions/verificationActions'
//
// class DialPadDisplay extends Component {
//   render() {
//     const { value, ...props } = this.props
//     const codeVal = value.substring(0, 4)
//
//     return (
//       <div {...props} className="dialpad-display">
//          <div>{codeVal}</div>
//       </div>
//     )
//   }
// }
//
// class DialpadKey extends Component {
//   render() {
//     const { onPress, className, ...props } = this.props
//
//     return (
//       <ReactPoint onPoint={onPress}>
//         <button className={`dialpad-key ${className}`} {...props}/>
//       </ReactPoint>
//     )
//   }
// }
//
// class Verification extends Component {
//   constructor(props) {
//     super(props)
//
//     this.state = {
//       value: null,
//       displayValue: ''
//     }
//
//     this.clearDisplay = this.clearDisplay.bind(this)
//     this.closeModal = this.closeModal.bind(this)
//   }
//
//   closeModal() {
//     browserHistory.push('/');
//   }
//
//   renderAlert() {
//     if (this.props.errorMessage) {
//       return (
//         <div className="alert alert-danger">
//           <strong>Oops!</strong> {this.props.errorMessage}
//         </div>
//       )
//     }
//   }
//
//   clearDisplay(event) {
//     event.preventDefault()
//
//     this.setState ({
//       displayValue: ''
//     })
//   }
//
//   clearLastChar() {
//     const { displayValue } = this.state
//
//     this.setState({
//       displayValue: displayValue.substring(0, displayValue.length - 1) || ''
//     })
//   }
//
//   inputDigit(digit) {
//     const { displayValue } = this.state
//
//     this.setState({
//       displayValue: displayValue + digit
//     })
//   }
//
//   handleKeyDown = (event) => {
//     let { key } = event
//
//     if(key === 'Enter')
//       key = '='
//
//     if((/\d/).test(key)) {
//       this.inputDigit(parseInt(key, 4))
//     } else if(key === 'back') {
//       event.preventDefault()
//       this.clearLastChar()
//     }
//   }
//
//   componentDidMount() {
//     document.addEventListener('keydown', this.handleKeyDown)
//   }
//
//   componentWillUnmount() {
//     document.removeEventListener('keydown', this.handleKeyDown)
//   }
//
//   render() {
//     const { displayValue } = this.state
//     let users = this.props.users
//     let codes = this.props.codes
//     let verificationCode
//     let enteredCode
//
//     if(displayValue.length >= 4) {
//       enteredCode = displayValue
//     }
//
//     if(Object.keys(codes).length > 0) {
//       verificationCode = codes[0].code
//     }
//
//     let invalidCode = false
//     let validCode = false
//
//     if(enteredCode) {
//       if(verificationCode !== enteredCode) {
//         invalidCode = true
//       } else {
//         validCode = true
//       }
//     }
//
//     let phone
//
//     if(users.length > 0) {
//       let userNumber = users.slice(-1)[0].phone
//       if(phone !== undefined) {
//         phone = userNumber.replace(/(\d{3})(\d{3})(\d+)/, '$1-$2-$3')
//       }
//     }
//
//     const syc = '../../public/images/syc_logo.jpeg'
//
//     return (
//       <div>
//       {!validCode ?
//         <div className="verification account-flow">
//           <div className="container">
//
//             <div className="dialpad">
//               <div className="account-forms">
//                 <img src={syc} className="logo-service" alt="SYC logo"/>
//                 <h1 className="account-header">To verify your phone, enter the code we texted you</h1>
//                 <div className="row code-fields" onChange={this.getVal}>
//                   <DialPadDisplay value={displayValue}/>
//                 </div>
//
//                 <div className="spacer"></div>
//
//                 <ul className="code-input">
//                   <li className="line"></li>
//                   <li className="line"></li>
//                   <li className="line"></li>
//                   <li className="line"></li>
//                 </ul>
//                 {invalidCode ? <p className="code-error">Invalid entry. Please try again.</p> :
//
//                 <p className="number-sent">Enter the code sent to {phone}</p>}
//                 <div className="row" id="row-btn">
//                   {validCode ? <Link to="services">Timed modal to open here</Link> :
//                   <button onClick={this.clearDisplay} id="react-btn">Resend code</button>}
//                 </div>
//               </div>
//               <div className="dialpad-keypad">
//                 <div className="input-keys">
//                   <div className="container digit-keys">
//                     <DialpadKey className="key-button grey left bottom" id="blank-key"></DialpadKey>
//                     <DialpadKey className="key-button bottom" onPress={() => this.inputDigit(0)}>0</DialpadKey>
//                     <DialpadKey className="key-button grey right bottom" id="backspace" onPress={() => this.clearLastChar()}><img src="../../public/images/backspace.png" alt="Delete code characters"/></DialpadKey>
//                     <DialpadKey className="key-button left" onPress={() => this.inputDigit(7)}>7<span className="letter">QRS</span></DialpadKey>
//                     <DialpadKey className="key-button" onPress={() => this.inputDigit(8)}>8<span className="letter">TUV</span></DialpadKey>
//                     <DialpadKey className="key-button right" onPress={() => this.inputDigit(9)}>9<span className="letter">WXYZ</span></DialpadKey>
//                     <DialpadKey className="key-button left" onPress={() => this.inputDigit(4)}>4<span className="letter">GHI</span></DialpadKey>
//                     <DialpadKey className="key-button" onPress={() => this.inputDigit(5)}>5<span className="letter">JKL</span></DialpadKey>
//                     <DialpadKey className="key-button right" onPress={() => this.inputDigit(6)}>6<span className="letter">MNOP</span></DialpadKey>
//                     <DialpadKey className="key-button left" onPress={() => this.inputDigit(1)}>1</DialpadKey>
//                     <DialpadKey className="key-button" onPress={() => this.inputDigit(2)}>2<span className="letter">ABC</span></DialpadKey>
//                     <DialpadKey className="key-button right" onPress={() => this.inputDigit(3)}>3<span className="letter">DEF</span></DialpadKey>
//                   </div>
//                 </div>
//               </div>
//             </div>
//
//           </div>
//         </div> :
//         <a href="migo://auth"><div className="verification account-flow" onClick={this.closeModal}>
//           <div className="container" id="account-success">
//             <div className="account-forms">
//               <img src={syc} className="logo-service" alt="SYC logo"/>
//               <h4>Seattle Yellow Cab Account Created</h4>
//             </div>
//           </div>
//         </div></a>
//       }
//       </div>
//     )
//   }
// }
//
// Verification.propTypes = {
//   actions: PropTypes.object.isRequired,
//   users: PropTypes.array.isRequired,
//   codes: PropTypes.array.isRequired
// }
//
// function mapStateToProps(state, ownProps) {
//   return {
//     errorMessage: state.auth.error,
//     users: state.users,
//     codes: state.codes
//   }
// }
//
// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(verificationActions, dispatch)
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(Verification)

// import React, { Component } from 'react'
// import { Link } from 'react-router'
// // import Modal from 'react-awesome-modal'
//
// // import * as actions from '../../actions/authActions'
//
// import AllServices from './allServices'
// import NearbyServices from './nearbyServices'
//
// class Services extends Component {
//   constructor(props) {
//     super(props)
//
//     this.state = {
//       visible : false
//     }
//
//     this.preventSubmit = this.preventSubmit.bind(this)
//   }
//
//   preventSubmit(event) {
//     event.preventDefault()
//   }
//
//   openModal() {
//     this.setState({
//       visible : true
//     })
//   }
//
//   closeModal() {
//     this.setState({
//       visible : false
//     })
//   }
//
//   render() {
//     // const syc = '../../public/images/syc_logo.jpeg'
//
//     return (
//       <div className="account-flow">
//         <div className="account-forms select-services">
//           <h1 className="account-header"><span>Connect</span> (optional)</h1>
//
//           <div className="connect-options">
//             <h6 className="connect-header">Nearby Ride Services</h6>
//             <NearbyServices />
//
//             <h6 className="connect-header">All Ride Services</h6>
//             <AllServices />
//           </div>
//
//           <Link to="migo://auth"><button className="done">Done</button></Link>
//
//         </div>
//       </div>
//     );
//   }
// }
//
// export default Services

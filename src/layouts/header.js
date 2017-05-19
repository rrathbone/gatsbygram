import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class Header extends Component {
  renderLinks() {
    if(this.props.authenticated) {
      // show a link to sign out
      return <li className="nav-item">
        <Link to="/signout" className="nav-link">Sign Out</Link>
      </li>
    } else {
      // show a link to sign in or sign up
      return [
        <li className="nav-item" key={1}>
          <Link to="/partners" className="nav-link">Partners</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link to="/ride" className="nav-link">Ride</Link>
        </li>,
        <li className="nav-item" key={3}>
          <Link to="/about" className="nav-link">About</Link>
          <ul id="inner-list">
            <Link to="/media"><li className="inner-links first">Media</li></Link>
            <Link to="/careers"><li className="inner-links">Careers</li></Link>
          </ul>
        </li>,
        <li className="nav-item" key={4}>
          <Link to="/help" className="nav-link">Help</Link>
          <ul id="inner-list">
            <Link to="/help"><li className="inner-links first">FAQ</li></Link>
            <Link to="/contact"><li className="inner-links">Contact</li></Link>
            <Link to="/help"><li className="inner-links">Account Help</li></Link>
          </ul>
        </li>
      ]
    }
  }

  render() {
    const logo = '../../public/images/migo_white.png'

    return (
      <div className="nav">
        <nav className="navbar navbar-light">
          <Link to="/" className="navbar-brand"><img src={logo} alt="Migo logo" className="migo-logo"></img></Link>
          <ul className="nav navbar-nav">
            {this.renderLinks()}
          </ul>
        </nav>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(Header)

// ,
// <li className="nav-item" key={3}>
//   <Link to="/courses" className="nav-link">Courses</Link>
// </li>

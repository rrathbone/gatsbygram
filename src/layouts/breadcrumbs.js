import React, { Component } from 'react'
import { Link } from 'react-router'

class BreadCrumbs extends Component {
  renderCountryLinks() {
    return [
      <li className="breadcrumb-item" key={1}>
        <Link to="/" className="breadcrumb-link">Home</Link>{" > "}
      </li>,
      <li className="breadcrumb-item" key={2}>
        <Link to="" className="breadcrumb-link">Country</Link>
      </li>
    ]
  }

  renderStateLinks() {
    return [
      <li className="breadcrumb-item" key={1}>
        <Link to="/" className="breadcrumb-link">Home</Link>{" > "}
      </li>,
      <li className="breadcrumb-item" key={2}>
        <Link to="" className="breadcrumb-link">Country</Link>{" > "}
      </li>,
      <li className="breadcrumb-item" key={3}>
        <Link to="" className="breadcrumb-link">State</Link>
      </li>
    ]
  }

  renderCityLinks() {
    return [
      <li className="breadcrumb-item" key={1}>
        <Link to="/" className="breadcrumb-link">Home</Link>{" > "}
      </li>,
      <li className="breadcrumb-item" key={2}>
        <Link to="" className="breadcrumb-link">Country</Link>{" > "}
      </li>,
      <li className="breadcrumb-item" key={3}>
        <Link to="" className="breadcrumb-link">State</Link>{" > "}
      </li>,
      <li className="breadcrumb-item" key={4}>
        <Link to="/city" className="breadcrumb-link">City</Link>
      </li>
    ]
  }

  renderRouteLinks() {
    return [
      <li className="breadcrumb-item" key={1}>
        <Link to="/" className="breadcrumb-link">Home</Link>{" > "}
      </li>,
      <li className="breadcrumb-item" key={2}>
        <Link to="" className="breadcrumb-link">Country</Link>{" > "}
      </li>,
      <li className="breadcrumb-item" key={3}>
        <Link to="" className="breadcrumb-link">State</Link>{" > "}
      </li>,
      <li className="breadcrumb-item" key={4}>
        <Link to="/city" className="breadcrumb-link">City</Link>{" > "}
      </li>,
      <li className="breadcrumb-item" key={5}>
        <Link to="/city" className="breadcrumb-link">First location - second location</Link>
      </li>
    ]
  }

  render() {
    let cityPage = false
    let statePage = false

    if(location.pathname.includes('city')) {
      cityPage = true
    }

    if(location.pathname.includes('state')) {
      statePage = true
    }

    return (
      <div className="breadcrumbs">
        <ul className="city-breadcrumbs">
          {cityPage ? this.renderCityLinks() : statePage ? this.renderStateLinks() : this.renderRouteLinks()}
        </ul>
      </div>
    )
  }
}

export default BreadCrumbs

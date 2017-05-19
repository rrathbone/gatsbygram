import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const FooterCities = ({ label }) => {
  return (
    <div>
      <div className="col-md-2">
        <ul>
          <Link to={'/city/' + label.marketId} className="footer-city-links">{label.label}</Link>
          <Link to={'/city/' + label.marketId} className="footer-city-links">{label.label}</Link>
          <Link to={'/city/' + label.marketId} className="footer-city-links">{label.label}</Link>
          <Link to={'/city/' + label.marketId} className="footer-city-links">{label.label}</Link>
          <Link to={'/city/' + label.marketId} className="footer-city-links">{label.label}</Link>
          <Link to={'/city/' + label.marketId} className="footer-city-links">{label.label}</Link>
        </ul>
      </div>
      <div className="col-md-2">
        <ul>
          <Link to={'/city/' + label.marketId} className="footer-city-links">{label.label}</Link>
          <Link to={'/city/' + label.marketId} className="footer-city-links">{label.label}</Link>
          <Link to={'/city/' + label.marketId} className="footer-city-links">{label.label}</Link>
          <Link to={'/city/' + label.marketId} className="footer-city-links">{label.label}</Link>
          <Link to={'/city/' + label.marketId} className="footer-city-links">{label.label}</Link>
          <Link to={'/city/' + label.marketId} className="footer-city-links">{label.label}</Link>
        </ul>
      </div>
      <div className="col-md-2">
        <ul>
          <Link to={'/city/' + label.marketId} className="footer-city-links">{label.label}</Link>
          <Link to={'/city/' + label.marketId} className="footer-city-links">{label.label}</Link>
          <Link to={'/city/' + label.marketId} className="footer-city-links">{label.label}</Link>
          <Link to={'/city/' + label.marketId} className="footer-city-links">{label.label}</Link>
          <Link to={'/city/' + label.marketId} className="footer-city-links">{label.label}</Link>
          <Link to={'/city/' + label.marketId} className="footer-city-links">{label.label}</Link>
        </ul>
      </div>
    </div>
  )
}

FooterCities.propTypes = {
  label: PropTypes.object
}

export default FooterCities

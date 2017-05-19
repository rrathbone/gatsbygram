import React from 'react'

import Geolocation from '../map/geolocation'

const LocationBanner = ({ market }) => {
  let cityPage = false
  let statePage = false

  if(location.pathname.includes('city')) {
    cityPage = true
  }

  if(location.pathname.includes('state')) {
    statePage = true
  }

  return (
    <section className="location-banner">
      <div className="row">
        {cityPage? <h1 id="location-header">{market.label} Car Services</h1>
        : statePage? <h1 id="location-header">State Car Services</h1> :
        <h1 id="location-header">Location to Location</h1>}
        <Geolocation />
        <button className="location-btn">Compare Rides</button>
      </div>
    </section>
  )
}

LocationBanner.propTypes = {
  market: React.PropTypes.object
}

export default LocationBanner

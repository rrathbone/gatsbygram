import React from 'react';

const RidesInLocation = ({ provider, market }) => {
  let cityPage = false

  if(location.pathname.includes('city')) {
    cityPage = true
  }

  let providerLogos = []

  if(market.marketId === 1) {
    if(provider.assets.icons.images !== undefined) {
      providerLogos.push(provider.assets.icons.images[0].url)
    }
  }

  return (
    <section className="rides-in-location">
      {cityPage ?
        <div><ul><li>{provider.providerName}{providerLogos.map((logo, index) =>
          <img src={logo} key={index} alt="Partner logos in {market.label}"/>)}</li></ul></div> :
        <div><h2>X Ridesharing Companies in STATE</h2><h5>CAROUSEL & POP UP CARDS GOES HERE</h5></div>}
    </section>
  )
}

RidesInLocation.propTypes = {
  provider: React.PropTypes.object,
  market: React.PropTypes.object
}

export default RidesInLocation

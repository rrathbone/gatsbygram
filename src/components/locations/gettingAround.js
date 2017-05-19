import React from 'react'

const GettingAround = ({ market }) => {
  let cityPage = false

  if(location.pathname.includes('city')) {
    cityPage = true
  }

  const marketLabel = market.label

  return (
    <section className="getting-around-location">
      {cityPage ?
        <div><h2>Getting Around {marketLabel}</h2><p>{marketLabel} is a major city in STATE. It is in....</p></div> :
        <div><h2>Getting Around STATE</h2><p>Bacon ipsum dolor amet frankfurter sirloin flank andouille spare.</p></div>}
    </section>
  )
}

GettingAround.propTypes = {
  market: React.PropTypes.object
}

export default GettingAround

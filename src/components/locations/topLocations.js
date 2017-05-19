import React from 'react'

const TopLocations = ({ market }) => {
  let cityPage = false

  if(location.pathname.includes('city')) {
    cityPage = true
  }

  const marketLabel = market.label
  const placeholder = '../../public/images/placeholder.jpg'

  return (
    <section className="top-locations">
    {cityPage ?
    <div>
      <h2>Top Neighborhoods in {marketLabel}</h2>
      <p>Turkey frankfurter shank, cow capicola jerky beef ribs short loin. Kevin tenderloin bresaola rump spare ribs andouille meatball pork belly pork tail. Tongue biltong strip steak shoulder tail sirloin flank hamburger, spare ribs landjaeger ball tip.</p>

      <div className="row places-cards">
        <div className="col-md-6 top-places left">
          <div className="col-md-4">
            <img src={placeholder} className="places-img" alt=""/>
          </div>

          <div className="col-md-8">
            <h3>Neighborhood</h3>
            <p>Ham turducken pork, rump andouille frankfurter pork belly. Biltong jowl shoulder venison hamburger. Biltong alcatra kielbasa hamburger short ribs strip steak beef ribs, bacon drumstick.</p>
            <a href="#">View rides to neighborhood</a>
          </div>

        </div>
        <div className="col-md-6 top-places">
          <div className="col-md-4">
            <img src={placeholder} className="places-img" alt=""/>
          </div>

          <div className="col-md-8">
            <h3>Neighborhood</h3>
            <p>Ham turducken pork, rump andouille frankfurter pork belly. Biltong jowl shoulder venison hamburger. Biltong alcatra kielbasa hamburger short ribs strip steak beef ribs, bacon drumstick.</p>
            <a href="#">View rides to neighborhood</a>
          </div>
        </div>
      </div>
      <div className="row places-cards">
        <div className="col-md-6 top-places left">
          <div className="col-md-4">
            <img src={placeholder} className="places-img" alt=""/>
          </div>

          <div className="col-md-8">
            <h3>Neighborhood</h3>
            <p>Ham turducken pork, rump andouille frankfurter pork belly. Biltong jowl shoulder venison hamburger. Biltong alcatra kielbasa hamburger short ribs strip steak beef ribs, bacon drumstick.</p>
            <a href="#">View rides to neighborhood</a>
          </div>

        </div>
        <div className="col-md-6 top-places">
          <div className="col-md-4">
            <img src={placeholder} className="places-img" alt=""/>
          </div>

          <div className="col-md-8">
            <h3>Neighborhood</h3>
            <p>Ham turducken pork, rump andouille frankfurter pork belly. Biltong jowl shoulder venison hamburger. Biltong alcatra kielbasa hamburger short ribs strip steak beef ribs, bacon drumstick.</p>
            <a href="#">View rides to neighborhood</a>
          </div>
        </div>
      </div>

    </div>
    :
    <div>
      <h2>Top Cities in STATE</h2>
      <p>Turkey frankfurter shank, cow capicola jerky beef ribs short loin. Kevin tenderloin bresaola rump spare ribs andouille meatball pork belly pork tail. Tongue biltong strip steak shoulder tail sirloin flank hamburger, spare ribs landjaeger ball tip.</p>
      <h5>CARDS GO HERE</h5>
    </div>
    }
    </section>
  )
}

TopLocations.propTypes = {
  market: React.PropTypes.object
}

export default TopLocations

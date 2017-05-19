import React from 'react'

const TopPoints = ({ market }) => {
  let cityPage = false
  let statePage = false

  if(location.pathname.includes('city')) {
    cityPage = true
  }

  if(location.pathname.includes('state')) {
    statePage = true
  }

  const marketLabel = market.label
  const placeholder = '../../public/images/placeholder.jpg'

  return (
    <section className="top-points-of-interest">
      {cityPage ?
        <div>
          <h2>Top Points of interest in {marketLabel}</h2>
          <p>Pancetta meatloaf jowl cow, sausage ham biltong filet mignon hamburger pork belly leberkas shank tail frankfurter. Corned beef meatball hamburger swine bacon turducken fatback pork chop salami strip steak short loin venison pork loin frankfurter pork belly.</p>
          <div className="row places-cards">
            <div className="col-md-6 top-places left">
              <div className="col-md-4">
                <img src={placeholder} className="places-img" alt=""/>
              </div>

              <div className="col-md-8">
                <h3>Point of Interest</h3>
                <p>Ham turducken pork, rump andouille frankfurter pork belly. Biltong jowl shoulder venison hamburger. Biltong alcatra kielbasa hamburger short ribs strip steak beef ribs, bacon drumstick.</p>
                <a href="#">View rides to point of interest</a>
              </div>

            </div>
            <div className="col-md-6 top-places">
              <div className="col-md-4">
                <img src={placeholder} className="places-img" alt=""/>
              </div>

              <div className="col-md-8">
                <h3>Point of Interest</h3>
                <p>Ham turducken pork, rump andouille frankfurter pork belly. Biltong jowl shoulder venison hamburger. Biltong alcatra kielbasa hamburger short ribs strip steak beef ribs, bacon drumstick.</p>
                <a href="#">View rides to point of interest</a>
              </div>
            </div>
          </div>
          <div className="row places-cards">
            <div className="col-md-6 top-places left">
              <div className="col-md-4">
                <img src={placeholder} className="places-img" alt=""/>
              </div>

              <div className="col-md-8">
                <h3>Point of Interest</h3>
                <p>Ham turducken pork, rump andouille frankfurter pork belly. Biltong jowl shoulder venison hamburger. Biltong alcatra kielbasa hamburger short ribs strip steak beef ribs, bacon drumstick.</p>
                <a href="#">View rides to point of interest</a>
              </div>

            </div>
            <div className="col-md-6 top-places">
              <div className="col-md-4">
                <img src={placeholder} className="places-img" alt=""/>
              </div>

              <div className="col-md-8">
                <h3>Point of Interest</h3>
                <p>Ham turducken pork, rump andouille frankfurter pork belly. Biltong jowl shoulder venison hamburger. Biltong alcatra kielbasa hamburger short ribs strip steak beef ribs, bacon drumstick.</p>
                <a href="#">View rides to point of interest</a>
              </div>
            </div>
          </div>
        </div>

        : statePage ?
        <div>
          <h2>Top Points of interest in STATE</h2>
          <p>Pancetta meatloaf jowl cow, sausage ham biltong filet mignon hamburger pork belly leberkas shank tail frankfurter. Corned beef meatball hamburger swine bacon turducken fatback pork chop salami strip steak short loin venison pork loin frankfurter pork belly.</p>
          <h5>CARDS GO HERE</h5>
        </div> :
        <div>
          <h2>Top Points of interest in LOCATION</h2>
          <p>Pancetta meatloaf jowl cow, sausage ham biltong filet mignon hamburger pork belly leberkas shank tail frankfurter. Corned beef meatball hamburger swine bacon turducken fatback pork chop salami strip steak short loin venison pork loin frankfurter pork belly.</p>
          <h5>CARDS GO HERE</h5>
        </div>
      }
    </section>
  )
}

TopPoints.propTypes = {
  market: React.PropTypes.object
}

export default TopPoints

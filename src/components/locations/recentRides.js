import React from 'react'

const RecentRides = ({ market }) => {
  const marketLabel = market.label

  return (
    <section id="recent-rides">
      <h2>Recent Routes in {marketLabel}</h2>
      <p>Rump pancetta tail bacon, fatback burgdoggen hamburger tri-tip jerky pork chop drumstick. Shoulder pork strip steak hamburger. Turducken burgdoggen kielbasa landjaeger, picanha meatball fatback t-bone shoulder strip steak pig meatloaf andouille tongue.</p>

      <div className="row recent-rides-cards">
        <div className="col-md-4">
          <p id="start-route">Route</p>
          <p id="end-route">Route</p>
          <h4>Only: <strong>$15.{91}</strong></h4>
          <p id="provider">Lyft</p>
          <div className="link-to-route">
            <a className="view-route" href="#">View this route</a>
          </div>
        </div>
        <div className="col-md-4">
          <p id="start-route">Route</p>
          <p id="end-route">Route</p>
          <h4>Only: <strong>$15.{91}</strong></h4>
          <p id="provider">Lyft</p>
          <div className="link-to-route">
            <a className="view-route" href="#">View this route</a>
          </div>
        </div>
        <div className="col-md-4">
          <p id="start-route">Route</p>
          <p id="end-route">Route</p>
          <h4>Only: <strong>$15.{91}</strong></h4>
          <p id="provider">Lyft</p>
          <div className="link-to-route">
            <a className="view-route" href="#">View this route</a>
          </div>
        </div>
      </div>
    </section>
  )
}

RecentRides.propTypes = {
  market: React.PropTypes.object
}

export default RecentRides

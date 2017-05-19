import React, { Component } from 'react'
import { connect } from 'react-redux'

import FooterCities from './footerCities'
import FooterLinks from './footerLinks'

class Footer extends Component {
  render() {
    const markets = this.props.markets
    let labels
    let labelLength = false

    for(let key in markets) {
      if(markets.hasOwnProperty(key)) {
        const val = markets[key]
        labels = val
        labelLength = true
      }
    }
    console.log('labels from footer', labels);

    return (
      <div className="footer">
        <footer>

          <FooterLinks />

          <div className="divider"></div>

          <div className="row" id="city-footer">
            <h5>Top Cities</h5>
            {labelLength ? labels.map((label, index) =>
              <FooterCities
               key={index}
               label={label}
            />) : null}
          </div>

        </footer>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    markets: state.markets
  }
}

export default connect(mapStateToProps)(Footer)

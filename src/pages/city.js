// import React, { Component, PropTypes } from 'react'
// import { connect } from 'react-redux'
// import DocumentMeta from 'react-document-meta'
//
// import BreadCrumbs from '../common/breadcrumbs'
// import CompareRides from './compareRides'
// import Footer from '../common/footer'
// import Geolocation from '../map/geolocation'
// import GettingAround from './gettingAround'
// import Header from '../common/header'
// import LocationBanner from './locationBanner'
// import MapSection from '../map/mapSection'
// import RecentRides from './recentRides'
// import RidesInLocation from './ridesInLocation'
// import TopLocations from './topLocations'
// import TopPoints from './topPoints'
//
// class CityPage extends Component {
//   constructor(props) {
//     super(props)
//
//     this.state = {
//       market: Object.assign({}, props.market)
//     }
//   }
//
//   componentWillReceiveProps(nextProps) {
//     if(this.props.market.marketId !== nextProps.market.marketId) {
//       this.setState({
//         market: Object.assign({}, nextProps.market)
//       })
//     }
//   }
//
//   render() {
//     const meta = {
//       title: 'Some Meta Title',
//       description: 'I am a description, and I can create multiple tags',
//       canonical: 'http://example.com/path/to/page',
//       meta: {
//         charset: 'utf-8',
//         name: {
//           keywords: 'react,meta,document,html,tags'
//         }
//       }
//     }
//     const { market } = this.state
//     let providers
//     let numProviders
//     if(market.providers) {
//       providers = market.providers
//       numProviders = market.providers.length
//     }
//
//     const marketLabel = market.label
//
//     return (
//       <div className="city-page">
//       <DocumentMeta {...meta} />
//         <Header />
//
//         <div id="city-page">
//           <LocationBanner
//             market={this.state.market}
//           />
//
//           <div className="row getting-around location-sections">
//             <BreadCrumbs />
//             <GettingAround
//               market={this.state.market}
//             />
//           </div>
//
//           <MapSection />
//
//           <div className="location-sections">
//             <div className="row space rides-in-location">
//               {providers ? <div><h2>{numProviders} Ridesharing Companies in {marketLabel}</h2>
//               {providers.map((provider, index) => <RidesInLocation
//                 key={index}
//                 provider={provider}
//                 market={this.state.market}
//               />)}</div>:<h2>X Ridesharing Companies in CITY</h2>}
//             </div>
//
//             <div className="row space">
//               <TopLocations
//                 market={this.state.market}
//               />
//             </div>
//
//             <div className="row space">
//               <TopPoints
//                 market={this.state.market}
//               />
//             </div>
//           </div>
//
//           <div className="row space compare-rides">
//             <CompareRides />
//           </div>
//
//           <div className="row space location-sections">
//             <RecentRides
//               market={this.state.market}
//             />
//           </div>
//
//         </div>
//
//         <div className="row">
//           <div className="search-fields">
//             <Geolocation />
//             <button className="location-btn">Compare Rides</button>
//           </div>
//         </div>
//
//         <Footer />
//       </div>
//     )
//   }
// }
//
// CityPage.propTypes = {
//   market: PropTypes.object
// }
//
// function mapStateToProps(state, ownProps) {
//   const marketId = Number(ownProps.params.id)
//   const markets = state.markets
//   let val
//
//   for(let key in markets) {
//     if(markets.hasOwnProperty(key)) {
//       val = markets[key]
//     }
//   }
//
//   let market = { marketId: '', label: '', providers: [] }
//   let valLength
//
//   if(val) {
//     valLength = val.length
//   }
//
//   for(let i = 0; i < valLength; i++) {
//     if(val[i].marketId === marketId) {
//       market = val[i]
//       console.log('market from city page', market);
//     }
//   }
//   console.log('market from city page PART 2', market);
//
//   return {
//     market: market
//   }
// }
//
// export default connect(mapStateToProps)(CityPage)

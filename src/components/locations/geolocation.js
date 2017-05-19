import React from 'react'

class Geolocation extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      enteredAddress: '',
      geocodeLocation: '',
    }
  }

  componentDidMount() {
    this.getLocation()
    this.initializeAutoComplete(document.getElementById('origin'))
    this.initializeAutoComplete(document.getElementById('destination'))
  }

  initializeAutoComplete(input) {
    let autocomplete = new window.google.maps.places.Autocomplete(input)
    const _this = this

    function autoCompletePlaceChanged() {
      let place = autocomplete.getPlace()

      _this.setState({
        geocodeLocation: place.geometry.location.lat() + ',' + place.geometry.location.lng(),
        enteredAddress: place.formatted_address
      })
    }

    autocomplete.addListener('place_changed', autoCompletePlaceChanged)
  }

  getLocation(){
    let geocoder
    const _this = this

    function getGoogleMapsAddress(position) {
      if(_this.state.enteredAddress !== '')

      return

      _this.setState ({ geocodeLocation: position.coords.latitude + ',' + position.coords.longitude })
      // localStorage.setItem('userLatLng', position.coords.latitude + ',' + position.coords.longitude)
      geocoder = new window.google.maps.Geocoder()

      let latLng = new window.google.maps.LatLng(position.coords.latitude, position.coords.longitude)

      geocoder.geocode( { location: latLng }, (results, status) => {
        if(results.length > 0){
          document.getElementById('origin').value = results[0].formatted_address
          _this.setState({ enteredAddress: results[0].formatted_address})
        }
      })
    }

    if('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(getGoogleMapsAddress)

      return
    }

    return
  }

  render() {
    return (
      <div className="geolocation">
        <div className="row">
          <label className="search-label pickup">Pickup Location</label>
          <label className="search-label dropoff">Destination</label>
        </div>

        <div className="row">
          <input className="search-input pickup" ref="origin" id="origin" placeholder="What is your current location?"/>
          <input className="search-input dropoff" id="destination" placeholder="Where are you going to?"/>
        </div>
      </div>
    )
  }
}


export default Geolocation

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="migo-site">
        {this.props.children}
      </div>
    )
  }
}

App.PropTypes = {
  children: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  }
}

export default connect(mapStateToProps)(App)

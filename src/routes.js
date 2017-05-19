import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/app'

// ABOUTPAGE
import AboutPage from './components/about/aboutPage'

// AUTH
// import RequireAuth from './components/auth/requireAuth'
import Signin from './components/auth/signinPage'
import Signout from './components/auth/signout'
import Signup from './components/auth/signupPage'
import Verification from './components/auth/verification'

// CAREERS
import CareersPage from './components/careers/careersPage'

// COUNTRIES, STATES, CITIES
import CityPage from './components/locations/cityPage'

// CONTACT
import ContactPage from './components/contact/contactPage'

// HELP
import HelpPage from './components/help/helpPage'

// HOMEPAGE
import HomePage from './components/homepage/homepage'

// LEGAL
import LegalPage from './components/legal/legalPage'

// MEDIA
import MediaPage from './components/media/mediaPage'

// PARTNERS
import PartnersPage from './components/partners/partnersPage'

// PAYMENT
import AddPayment from './components/payment/addPayment'

// RIDE
import RidePage from './components/ride/ridePage'

// ROUTE
import RoutePage from './components/locations/routePage'

// SERVICES
import ConnectExisting from './components/services/connectExisting'
import ConnectNew from './components/services/connectNew'
import ConnectServicesSelect from './components/services/connectServicesSelect'
import Services from './components/services/services'

// STATE
import StatePage from './components/locations/statePage'

// <Route path="feature" component={RequireAuth(Feature)} />
export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="about" component={AboutPage} />
    <Route path="careers" component={CareersPage} />
    <Route path="city" component={CityPage} />
    <Route path="city/:id" component={CityPage} />
    <Route path="connect" component={ConnectServicesSelect} />
    <Route path="connectexisting" component={ConnectExisting} />
    <Route path="connectnew" component={ConnectNew} />
    <Route path="contact" component={ContactPage} />
    <Route path="help" component={HelpPage} />
    <Route path="legal" component={LegalPage} />
    <Route path="media" component={MediaPage} />
    <Route path="partners" component={PartnersPage} />
    <Route path="payment" component={AddPayment} />
    <Route path="ride" component={RidePage} />
    <Route path="route" component={RoutePage} />
    <Route path="services" component={Services} />
    <Route path="signin" component={Signin} />
    <Route path="signout" component={Signout} />
    <Route path="signup" component={Signup} />
    <Route path="state" component={StatePage} />
    <Route path="state/:id" component={StatePage} />
    <Route path="verification" component={Verification} />
  </Route>
)

import React from 'react'
import { Link } from 'react-router'

const FooterLinks = () => {
  const apple = "../../public/images/app-store.png"
  const google = "../../public/images/google-play.png"

  return (
    <div className="row" id="main-footer">
      <div className="col-md-2">
        <ul>
          <Link to="/about"><li className="footer-links">About</li></Link>
          <Link to="/ride"><li className="footer-links">Ride</li></Link>
          <Link to="/partners"><li className="footer-links">Partners</li></Link>
          <Link to="/city"><li className="footer-links">Cities</li></Link>
          <Link to="/media"><li className="footer-links">Media & Features</li></Link>
        </ul>
      </div>
      <div className="col-md-2">
        <ul>
          <Link to="/careers"><li className="footer-links">Careers</li></Link>
          <Link to="/contact"><li className="footer-links">Contact</li></Link>
          <Link to="/help"><li className="footer-links">Help</li></Link>
          <Link to="/legal"><li className="footer-links">Privacy</li></Link>
          <Link to="/legal"><li className="footer-links">Terms of Service</li></Link>
        </ul>
      </div>
      <div className="col-md-4" id="footer-btn">
        <div className="row btns">
          <img className="footer-app-btn" src={apple} id="apple-footer"  alt="Apple Store"/>
        </div>
        <div className="row btns">
          <img className="footer-app-btn" src={google} id="google-footer" alt="Google Play Store"/>
        </div>
      </div>
      <div className="col-md-4">
        <div className="row" id="migo-social">
          <Link to="/" className="footer-brand"><img src="/public/images/migo_white.png" alt="" className="migo-logo footer"></img></Link>
        </div>
        <div className="row" id="social-media">
          <a href="https://twitter.com/GetMigo?lang=en" target="_blank"><i className="fa fa-facebook fa-3x social-media-icons" id="linkedin-sm"></i></a>
          <a href="https://www.linkedin.com/company-beta/16211431/" target="_blank"><i className="fa fa-linkedin fa-3x social-media-icons"></i></a>
          <a href="https://twitter.com/GetMigo?lang=en" target="_blank"><i className="fa fa-instagram fa-3x social-media-icons"></i></a>
          <a href="https://twitter.com/GetMigo?lang=en" target="_blank"><i className="fa fa-twitter fa-3x social-media-icons"></i></a>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;

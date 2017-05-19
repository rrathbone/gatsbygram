import React from 'react'
import { Link } from 'react-router'

const NearbyServices = () => {
  return (
    <div className="nearby-services">
      <ul>
        <li><span className="left">Curb </span>
          <Link to="/connect" className="connect-services right"><span>Connect</span></Link>
        </li>
        <li><span className="left">Lyft </span>
          <Link to="/connect" className="connect-services right"><span>Connect</span></Link>
        </li>
        <li><span className="left">Seattle Yellow Cab </span>
          <Link to="/connect" className="connect-services right"><span>Connect</span></Link>
        </li>
        <li className="last"><span className="left">Car2Go </span>
          <Link to="/connect" className="connect-services right"><span>Connect</span></Link>
        </li>
      </ul>
    </div>
  );
};

export default NearbyServices

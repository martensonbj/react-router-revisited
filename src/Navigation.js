import React from 'react';
import { Link } from 'react-router'

const Navigation = () => {
    return (
      <div className="Navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>
            <Link to="/about"
                      style={{ color: 'blue', background:'gray' }}
                      activeStyle={{ color: 'red'}} >
              About
            </Link>
          </li>
          <li>
            <Link to="/contact"
                  className="contact-link"
                  activeClassName="active" >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    );
}

export default Navigation;

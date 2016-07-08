import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <header id="header">
      <div className="content">
        <div id="logo"><a href=""> </a></div>
        <nav id="nav">
          <IndexLink to="/#slide1" activeClassName="active">Home</IndexLink>
          {" | "}
          <Link to="/#slide2" activeClassName="active">Projects & Apps</Link>
          {" | "}
          <Link to="/#slide3" activeClassName="active">Ideas</Link> 
          {" | "}
          <Link to="/#slide4" activeClassName="active">About Me</Link>
          {" | "}
          <Link to="/#slide5" activeClassName="active">Contact</Link>
          {" | "}
          <Link to="/blog" activeClassName="active">Blog</Link>
        </nav>
      </div>
    </header>  
  );
} ;

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;



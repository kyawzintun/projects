import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';
import './header.css';

class Header extends Component {
  checkUrlAndAddClass(path) {
    return this.props.location.pathname.match(path) ? 'active' : '';
  }
  render() {
    return (
      <div className="section">
        <a href="https://kyawzintun.github.io/">
          <h1 className="title text-bold">Kyaw Zin Tun's Projects</h1>
        </a>
        <ul className="home-nav text-normal">
          <li className={this.checkUrlAndAddClass('fullstack')}>
            <Link to={{pathname: '/projects/fullstack'}}>
              ~ Fullstack projects
            </Link>
          </li>
          <li className={this.checkUrlAndAddClass('frontend')}>
            <Link to={{pathname: '/projects/frontend'}}>
              ~Frontend projects
            </Link>
          </li>
          <li className={this.checkUrlAndAddClass('visualization')}>
            <Link to={{pathname: '/projects/visualization'}}>
              ~Data visualization projects
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(Header);
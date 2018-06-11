import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './header.css';

class Header extends Component {
  checkUrlAndAddClass(path) {
    return this.props.location.pathname.match(path) ? 'active' : '';
  }
  render() {
    return (
      <div className="section">
        <h1 className="title text-bold">Kyaw Zin Tun's Projects</h1>
        <ul className="home-nav text-normal">
          <li className={this.checkUrlAndAddClass('fullstack')}>
            <a href="/projects/fullstack">~ Fullstack projects</a>
          </li>
          <li className={this.checkUrlAndAddClass('frontend')}>
            <a href="/projects/frontend">~ Frontend projects</a>
          </li>
          <li className={this.checkUrlAndAddClass('visualization')}>
            <a href="/projects/visualization">~ Data visualization projects</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(Header);
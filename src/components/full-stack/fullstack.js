import React, { Component } from 'react';
import Header from '../header/header';
import Project from '../project/project';

const fullstackProjects = [
  {
    name: "Voting App",
    url: "https://kyawzintun.github.io/voting-app/",
    thumbnail: require("../../assets/images/wireframe/voting.png"),
    description: "A full stack project that allows users to browse existing polls as well as to sign up and login to vote or create new polls."
  },
  {
    name: "City Night",
    url: "https://kyawzintun.github.io/night-life/",
    thumbnail: require("../../assets/images/wireframe/2.png"),
    description: "A full stack project that allows users to search for nightlife venues in a specific city and save up their plans."
  },
  {
    name: "Book Trading",
    url: "https://kyawzintun.github.io/book-club/",
    thumbnail: require("../../assets/images/wireframe/book-trading.png"),
    description: "A full stack project that allows users to browse, post, and trade second hand books."
  },
  {
    name: "Real Time Stock Market",
    url: "https://kzt-stock-market.herokuapp.com/",
    thumbnail: require("../../assets/images/wireframe/stock-market.png"),
    description: "A full stack project that allows users to browse and compare stocks trend lines, as well as to share the portfolio with other users in real-time."
  },
  {
    name: "Pinterest Clone",
    url: "https://kyawzintun.github.io/pinterest-clone/",
    thumbnail: require("../../assets/images/wireframe/pinterest.png"),
    description: "A precise clone of Pinterest on UI as well as on functionalities that it allows users to browse other users' wall of images and to add, link, or delete images to their own Pinterest-style walls."
  }
];

class FullStack extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Project projects={fullstackProjects}/>
      </div>
    );
  }
}

export default FullStack;
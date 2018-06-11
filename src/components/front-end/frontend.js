import React, { Component } from 'react';
import Header from '../header/header';
import Project from '../project/project';

const frontendProjects = [
  {
    name: "Dungeon Game",
    url: "https://kyawzintun.github.io/roguelike-dungeon-crawler/",
    thumbnail: require("../../assets/images/wireframe/dungeon-game.png"),
    description: "A Roguelike Dungeon Crawler Game that allows users to move throughout a random generated map, discovering items, and fight enemies."
  },
  {
    name: "Game of Life",
    url: "https://kyawzintun.github.io/game-of-life/",
    thumbnail: require("../../assets/images/wireframe/game-of-life.png"),
    description: "A AngularJS implement of Conway's Game of Life."
  },
  {
    name: "Simon Game",
    url: "https://kyawzintun.github.io/simon/",
    thumbnail: require("../../assets/images/wireframe/simon-game.png"),
    description: "A AngularJS implement of Simon Game."
  },
  {
    name: "Tic Tac Toe",
    url: "https://kyawzintun.github.io/tic-tac-toe/",
    thumbnail: require("../../assets/images/wireframe/tic-tac-toe.png"),
    description: "Allows users to play Tic Tac Toe against the computer (unbeatable) or a friend."
  },
  {
    name: "Pomodoro Clock",
    url: "https://codepen.io/kyawzintun/full/ZKvxyz/",
    thumbnail: require("../../assets/images/wireframe/pomorodo-clock.png"),
    description: "A React.js implement of Pomodoro Clock, allows users to start, pause, reset and customize their pomodoroes."
  },
  {
    name: "JavaScript Calculator",
    url: "https://codepen.io/kyawzintun/full/oWwKMb/",
    thumbnail: require("../../assets/images/wireframe/calculator.png"),
    description: "A React.js implement of a scientific calculator."
  },
  {
    name: "Random Quote Machine",
    url: "https://codepen.io/kyawzintun/full/dvQVGq/",
    thumbnail: require("../../assets/images/wireframe/random-quote.png"),
    description: "Shows random generated quote and allows sharing on twitter."
  },
  {
    name: "Markdown Previewer",
    url: "https://kyawzintun.github.io/markdown/",
    thumbnail: require("../../assets/images/wireframe/markdown-previewer.png"),
    description: "A React.js implement of a markdown previewer."
  },
  {
    name: "Wikipedia Viewer",
    url: "https://codepen.io/kyawzintun/full/BWvZBK/",
    thumbnail: require("../../assets/images/wireframe/wikipedia-viewer.png"),
    description: "Shows search result from the Wiki api."
  },
  {
    name: "Recipe Box",
    url: "https://kyawzintun.github.io/cocktail-list/",
    thumbnail: require("../../assets/images/wireframe/cocktail-list.png"),
    description: "A React.js implement of a simple recipe box that allows users to add, edit and delete recipes."
  },
  {
    name: "Twitch.tv JSON API",
    url: "https://codepen.io/kyawzintun/full/xqmPKy/",
    thumbnail: require("../../assets/images/wireframe/twitch-tv.png"),
    description: "Allows users to view the streaming status of Twitch.tv channels and send them to the channels."
  },
  {
    name: "Camper Leaderboard",
    url: "https://kyawzintun.github.io/leaderboard/",
    thumbnail: require("../../assets/images/wireframe/2.png"),
    description: "A toggleable table of the freeCodeCamp campers who've earned the most brownie points in the past 30 days."
  }
];

class Frontend extends Component {
  state = {  }
  render() {
    return (
      <div className="container">
        <Header />
        <Project projects={frontendProjects}/>
      </div>
    );
  }
}

export default Frontend;
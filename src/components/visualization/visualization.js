import React, { Component } from 'react';
import Header from '../header/header';
import Project from '../project/project';

const visualizationProjects = [
  {
    name: "Visualize Data with a Bar Chart",
    url: "https://kyawzintun.github.io/barchart/",
    thumbnail: require("../../assets/images/wireframe/barchart.png"),
    description: "An interactive bar chart showing US Gross Domestic Product by quarter, generated using D3.js."
  }, {
    name: "Visualize Data with a Scatterplot Graph",
    url: "https://kyawzintun.github.io/scatterplot/",
    thumbnail: require("../../assets/images/wireframe/scatterplot.png"),
    description: "An interactive scatter plot showing doping in professional bicycle racing, generated using D3.js."
  }, {
    name: "Visualize Data with a Heat Map",
    url: "https://kyawzintun.github.io/heat-map/",
    thumbnail: require("../../assets/images/wireframe/heat-map.png"),
    description: "An interactive heat map showing monthly global land surface temperature, generated using D3.js."
  }, {
    name: "Show National Contiguity with a Force Directed Graph",
    url: "https://kyawzintun.github.io/force-directed-grpah/",
    thumbnail: require("../../assets/images/wireframe/force-directed-grpah.png"),
    description: "An interactive force directed graph showing national contiguity, generated using D3.js."
  }, {
    name: "Map Data Across the Globe",
    url: "https://kyawzintun.github.io/meteorites-landed-map/",
    thumbnail: require("../../assets/images/wireframe/meteorites-landed-map.png"),
    description: "An interactive map showing meteorites landing across the globe from year 861 to 2013, generated using D3.js."
  }
];

class DataVisualization extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Project projects={visualizationProjects}/>
      </div>
    );
  }
}

export default DataVisualization;
import React, { Component } from 'react';
import './project.css';
import { Grid, Image } from 'semantic-ui-react';

class Project extends Component {
  render() {
    const projectList = this.props.projects.map((project, index) => 
      <Grid.Column className="project-col" key={index}>
        <div className="project-item">
          <h3 className="project-title text-bold">{project.name}</h3>
          <div className="project-item-inner-wrapper">
            <a className="image-link" href={project.url} >
              <Image src={project.thumbnail} alt={project.name} />
            </a>
            <div className="project-desc">
              <p className="description text-normal">{project.description}</p>
            </div>
          </div>
        </div>
      </Grid.Column>
    );
    return (
      <div className="project-list-root">
        <Grid centered className="center-grid">
          <Grid.Row columns={2}>
            {projectList}
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Project;
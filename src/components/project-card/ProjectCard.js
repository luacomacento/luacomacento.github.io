import React, { Component } from 'react';
import './ProjectCard.css';

class ProjectCard extends Component {
  render() { 
    const { title, image, description, skills, githubLink, previewLink } = this.props;
    return (
      <div class="project-card">
        <img src={image} alt="" height="240px"></img>
        <div class="project-info">
          <div class="project-header">
            <a href={previewLink} target="_blank" rel="noreferrer">
              <h3>{title}</h3>
            </a>
            <div className="project-icons">
              <a href={githubLink} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href={previewLink} target="_blank" rel="noreferrer">
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <p>{ description }</p>
        </div>
      </div>
    );
  }
}
 
export default ProjectCard;
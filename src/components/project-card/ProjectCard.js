import React, { Component } from 'react';
import { tools } from '../../data/tools';
import ToolBadge from '../ToolBadge';
import './ProjectCard.css';

class ProjectCard extends Component {
  render() { 
    const { title, image, description, skills, githubLink, previewLink } = this.props;
    const skillsBadges = skills.map((skill) => {
      return tools.find((tool) => tool.slug === skill)
    });

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
          <div className="project-tools-container">
          {skillsBadges.map((item) => {
            return <ToolBadge item={item} />
          })}
          </div>
        </div>
      </div>
    );
  }
}
 
export default ProjectCard;
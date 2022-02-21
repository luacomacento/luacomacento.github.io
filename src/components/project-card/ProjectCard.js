import React, { Component } from 'react';
import { tools } from '../../data/tools';
import ToolBadge from '../ToolBadge';
import './ProjectCard.css';

class ProjectCard extends Component {

  constructor() {
    super()
    this.state = {
      wasMouseOver: false
    }
    this.toggleBadges = this.toggleBadges.bind(this);
  }

  toggleBadges() {
    const toolsBadgeContainer = document.querySelector('.project-tools-container')

    if (!this.state.wasMouseOver) {
      toolsBadgeContainer.style.opacity = '1';
      this.setState({ wasMouseOver: true })
    } else {
      toolsBadgeContainer.style.opacity = '0';
      this.setState({ wasMouseOver: false })
    }
  }

  render() { 
    const { title, image, description,
      skills, githubLink, previewLink } = this.props;

    const skillsBadges = skills
      .map((skill) => tools.find((tool) => tool.slug === skill));

    return (
      <div className="project-card" onMouseEnter={this.toggleBadges} onMouseLeave={this.toggleBadges}>
        <div className="project-img-container">
          <div className="project-tools-container">
            {skillsBadges.map((item) => {
              return <ToolBadge item={item} key={item.slug} />
            })}
            </div>
          <img className="project-preview" src={image} alt="" height="240px" />
        </div>

        <div className="project-info">
          <div className="project-header">
            <a href={previewLink} target="_blank" rel="noreferrer">
              <h3>{title}</h3>
            </a>
            <div className="project-icons">
              <a href={githubLink} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href={previewLink} target="_blank" rel="noreferrer">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
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
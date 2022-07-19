import React, { Component } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
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

  toggleBadges(event) {
    const toolsBadgeContainer = event.currentTarget.firstChild.firstChild;
  
    // Garante que o código só seja rodado caso exista algum badge no container.
    if (toolsBadgeContainer.innerHTML) {
      if (!this.state.wasMouseOver) {
        toolsBadgeContainer.style.opacity = '1';
        this.setState({ wasMouseOver: true })
      } else {
        toolsBadgeContainer.style.opacity = '0';
        this.setState({ wasMouseOver: false })
      }
    }
  }

  render() { 
    const { title, image, description,
      skills, githubLink, previewLink } = this.props;

    const skillsBadges = skills
      .map((skill) => tools.find((tool) => tool.slug === skill));

    return (
      <div className="project-card" onMouseEnter={this.toggleBadges}
        onMouseLeave={this.toggleBadges}>
        <div className="project-img-container">
          <div className="project-tools-container">
            <div className="project-badges">
              {skillsBadges.map((item) => {
                return <ToolBadge item={item} key={item.slug} />
              })}
              </div>
            </div>
          <img className="project-preview" src={image} alt="" />
        </div>

        <div className="project-info">
          <div className="project-header">
            <a href={`${previewLink ? previewLink : githubLink}`} target="_blank" rel="noreferrer">
              <h3>{title}</h3>
            </a>
            <div className="project-icons">
              <a href={githubLink} target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              { previewLink && (
                <a href={previewLink} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt />
                </a>
              )}
            </div>
          </div>
          <p>{ description }</p>
        </div>
        
      </div>
    );
  }
}
 
export default ProjectCard;
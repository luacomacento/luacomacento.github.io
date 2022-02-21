import React, { Component } from 'react';
import { projects } from '../data/projects';
import ProjectCard from './project-card/ProjectCard';
import SectionTitle from './SectionTitle';

class Projects extends Component {
  render() { 
    return (
      <section id="projects">
        <SectionTitle text="Projetos"/>
        <div className="projects-container">
          {projects.map((item) => {
            return (
              <ProjectCard
                title={item.title}
                description={item.description}
                image={item.image}
                skills={item.skills}
                githubLink={item.githubLink}
                previewLink={item.previewLink}
                key={item.title}
              />
            )
          })}
        </div>
      </section>
    );
  }
}
 
export default Projects;
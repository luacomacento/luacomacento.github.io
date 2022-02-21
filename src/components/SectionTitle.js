import React, { Component } from 'react';

class SectionTitle extends Component {
  render() { 
    const {text} = this.props;
    return (
      <h2 className="section-title">{text}</h2>
    );
  }
}

export default SectionTitle;

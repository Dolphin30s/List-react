import React, { Component } from "react";

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      health: 100
    };

    this.hit = this.hit.bind(this);
  }

  hit() {
    this.setState(prevState => ({
      health: prevState.health - 10
    }));
  }

  render() {
    const { name, ...restProps } = this.props;
    const { health } = this.state;
    return (
      <div className="hero">
        <div className="hero-avatar" />
        <div className="hero-stats">
          <div className="hero-health">{health}</div>
          <div className="hero-hit" onClick={this.hit} />
        </div>
      </div>
    );
  }
}

export default Hero;

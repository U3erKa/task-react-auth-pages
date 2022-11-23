import React, { Component } from 'react';

class Home extends Component {
  componentDidMount() {
    this.props.toggleRegistered(true);
  }

  render() {
    return <main>Homepage</main>;
  }
}

export default Home;

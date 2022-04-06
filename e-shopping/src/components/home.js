import React, { Component } from 'react';

import { connect } from 'react-redux';

class Home extends Component {
  render() {
    let header = this.props.user ? `Welcome back ${this.props.user.firstName}!` : "Hi there visitor!";
    
    return (
      <div className="componentWrapper">
        <h2>{header}</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      user: state.user
  };
}

export default connect(mapStateToProps)(Home);
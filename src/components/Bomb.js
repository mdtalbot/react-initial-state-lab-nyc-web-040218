// Bomb Component Code Goes Here
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

export default class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsLeft: this.props.initialCount
    };
  }

  render() {
    if (this.state.secondsLeft > 0) {
      return (

        <p>{this.state.secondsLeft} seconds left before I go boom!</p>
      )
    }
    else {
      return <h2>Boom!</h2>
    }
  }
}

 Bomb.propTypes = propTypes;
 Bomb.defaultProps = defaultProps;

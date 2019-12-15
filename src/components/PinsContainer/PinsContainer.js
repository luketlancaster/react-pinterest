import React from 'react';
import PropTypes from 'prop-types';

import Pin from '../Pin/Pin';

import pinShape from '../../helpers/propz/pinShape';

class PinsContainer extends React.Component {
  static propTypes = {
    pins: PropTypes.arrayOf(pinShape),
  }

  render() {
    return (
      <div className="PinsContainer d-flex flex-wrap">
        {this.props.pins.map((pin) => <Pin key={pin.id} pin={pin} />)}
      </div>
    );
  }
}

export default PinsContainer;

import React from 'react';
import PropTypes from 'prop-types';

import Pin from '../Pin/Pin';

import boardData from '../../helpers/data/boardData';
import pinData from '../../helpers/data/pinData';

class SingleBoard extends React.Component {
  static propTypes = {
    selectedBoardId: PropTypes.string,
    setSingleBoard: PropTypes.func,
  }

  state = {
    board: {},
    pins: [],
  }

  componentDidMount() {
    const { selectedBoardId } = this.props;
    boardData.getSingleBoard(selectedBoardId)
      .then(({ data }) => {
        this.setState({ board: data });
        this.getPinData(selectedBoardId);
      })
      .catch((errorFromSingleBoard) => console.error({ errorFromSingleBoard }));
  }

  getPinData = (boardId) => {
    pinData.getPinsByBoardId(boardId)
      .then((response) => this.setState({ pins: response }))
      .catch((errorFromGetPins) => console.error({ errorFromGetPins }));
  }

  removeSelectedBoardId = (e) => {
    e.preventDefault();
    const { setSingleBoard } = this.props;
    setSingleBoard(null);
  }

  deleteSinglePin = (pinId) => {
    const { selectedBoardId } = this.props;

    pinData.deletePin(pinId)
      .then(() => {
        this.getPinData(selectedBoardId);
      })
      .catch((errFromDeletePin) => console.error({ errFromDeletePin }));
  }

  render() {
    const { board, pins } = this.state;

    return (
      <div>
        <button className="btn btn-info" onClick={this.removeSelectedBoardId}>x Close Board View</button>
        <div className="SingleBoard col-8 offset-2">
          <h2>{board.name}</h2>
          <p>{board.description}</p>
          <div className="d-flex flex-wrap">
            {pins.map((pin) => <Pin key={pin.id} pin={pin} deleteSinglePin={this.deleteSinglePin} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default SingleBoard;

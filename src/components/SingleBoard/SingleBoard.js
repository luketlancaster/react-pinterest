import React from 'react';
import PropTypes from 'prop-types';

import PinsContainer from '../PinsContainer/PinsContainer';

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
        pinData.getPinsByBoardId(selectedBoardId)
          .then((response) => this.setState({ pins: response }))
          .catch((errorFromGetPins) => console.error({ errorFromGetPins }));
      })
      .catch((errorFromSingleBoard) => console.error({ errorFromSingleBoard }));
  }

  removeSelectedBoardId = (e) => {
    e.preventDefault();
    const { setSingleBoard } = this.props;
    setSingleBoard(null);
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
            <PinsContainer pins={pins} />
          </div>
        </div>
      </div>
    );
  }
}

export default SingleBoard;

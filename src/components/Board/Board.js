import React from 'react';
import PropTypes from 'prop-types';

// import boardData from '../../helpers/data/boardData';

import boardShape from '../../helpers/propz/boardShape';

class Board extends React.Component {
  static propTypes = {
    board: boardShape,
    setSingleBoard: PropTypes.func,
  }

  setSelectedBoardId = (e) => {
    e.preventDefault();
    const { board, setSingleBoard } = this.props;
    setSingleBoard(board.id);
  }

  render() {
    const { board } = this.props;

    return (
      <div className="Board col-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{board.name}</h5>
            <p className="card-text">{board.description}</p>
            <button className="btn btn-primary" onClick={this.setSelectedBoardId}>View Pins</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;

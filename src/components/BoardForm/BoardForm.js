import React from 'react';
import PropTypes from 'prop-types';

import authData from '../../helpers/data/authData';

class BoardForm extends React.Component {
  static propTypes = {
    createBoard: PropTypes.func,
  }

  state = {
    boardName: '',
    boardDescription: '',
  }

  boardNameChange = (e) => {
    e.preventDefault();
    this.setState({ boardName: e.target.value });
  }

  boardDescriptionChange = (e) => {
    e.preventDefault();
    this.setState({ boardDescription: e.target.value });
  }

  saveBoardEvent = (e) => {
    e.preventDefault();

    const newBoard = {
      name: this.state.boardName,
      description: this.state.boardDescription,
      uid: authData.getUid(),
    };

    this.props.createBoard(newBoard);
    this.setState({ boardName: '', boardDescription: '' });
  }

  render() {
    const { boardName, boardDescription } = this.state;

    return (
      <form className='col-6 offset-3 BoardForm'>
        <div className="form-group">
          <label htmlFor="order-name">Board Name:</label>
          <input
            type="text"
            className="form-control"
            id="board-name"
            placeholder="Enter board name"
            value={boardName}
            onChange={this.boardNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description-name">Board Description:</label>
          <input
            type="text"
            className="form-control"
            id="board-description"
            placeholder="Enter board description"
            value={boardDescription}
            onChange={this.boardDescriptionChange}
          />
        </div>
        <button className="btn btn-secondary" onClick={this.saveBoardEvent}>Save Board</button>
      </form>
    );
  }
}

export default BoardForm;

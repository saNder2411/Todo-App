import React, {PureComponent} from 'react';
import './todo-list-item.css';


export default class TodoListItem extends PureComponent {
  state = {
    done: false,
    important: false,
  };

  _handleLabelClick = () => {
    this.setState((prevState) => ({done: !prevState.done}));
  };

  _handleImportantBtnClick = () => {
    this.setState((prevState) => ({important: !prevState.important}));
  };

  render() {
    const {label, onDeleted} = this.props;
    const {done, important} = this.state;

    const classNames = `todo-list-item ${done ? `done` : ``} ${important ? `important` : ``}`;

    const style = {
      color: important ? `steelblue` : `black`,
      fontWeight: important ? `bold` : `normal`
    };

    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          style={style}
          onClick={this._handleLabelClick}>
          {label}
        </span>

        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={this._handleImportantBtnClick}>
          <i className="fa fa-exclamation" />
        </button>

        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDeleted}>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}


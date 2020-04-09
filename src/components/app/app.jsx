import React, {PureComponent} from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';

import './app.css';

export default class App extends PureComponent {

  state = {
    todoData: [
      {label: `Drink Coffee`, important: false, id: 1},
      {label: `Make Awesome App`, important: true, id: 2},
      {label: `Have a lunch`, important: false, id: 3},
    ],
  };

  _handleDeletedItemClick = (id) => {

    this.setState((prevState) => {
      const deletedIndexItem = prevState.todoData.findIndex((it) => it.id === id);
      const newData = [
        ...prevState.todoData.slice(0, deletedIndexItem),
        ...prevState.todoData.slice(deletedIndexItem + 1)
      ];

      return {todoData: newData};
    });
  };

  render() {
    const {todoData} = this.state;
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3}/>
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList todoData={todoData} onDeleted={this._handleDeletedItemClick} />
      </div>
    );
  }
}

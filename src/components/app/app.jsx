import React from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';

const App = () => {

  return (
    <React.Fragment>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </React.Fragment>
  );
};

export default App;

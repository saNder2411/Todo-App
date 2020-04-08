import React from 'react';

const TodoList = () => {
  const items = [`Item-1`, `Item-2`, `Item-3`, `Item-4`];
  const ListItems = items.map((it) => <li key={it}>{it}</li>);

  return (
    <ul>
      {ListItems}
    </ul>
  );
};

export default TodoList;

import React from 'react';
import './search-panel.css';

const SearchPanel = ({searchValue, onSearchChange}) => {

  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="type to search"
      value={searchValue}
      onChange={onSearchChange} />
  );
};

export default SearchPanel;

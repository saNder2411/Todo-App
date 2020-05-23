import React from 'react';
import './item-status-filter.css';


const buttonLabels = [
  {name: `all`, label: `All`},
  {name: `active`, label: `Active`},
  {name: `done`, label: `Done`},
];

const ItemStatusFilter = ({filterName, onFilterBtnClick}) => {

  const buttons = buttonLabels.map(({name, label}) => (
    <button
      type="button"
      key={name}
      className={`btn ${filterName === name ? `btn-info` : `btn-outline-secondary`}`}
      onClick={() => onFilterBtnClick(name)}>
      {label}
    </button>
  ));

  return (
    <div className="btn-group">
      {buttons}
    </div>
  );
};

export default ItemStatusFilter;

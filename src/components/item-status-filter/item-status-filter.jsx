import React, {PureComponent} from 'react';

import './item-status-filter.css';

const buttonLabels = [
  {name: `all`, label: `All`},
  {name: `active`, label: `Active`},
  {name: `done`, label: `Done`},
];

export default class ItemStatusFilter  extends PureComponent {

  render() {
    const {filterName, onFilterBtnClick} = this.props;

    const buttons = buttonLabels.map(({name, label}) => (
      <button type="button"
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
  }
}

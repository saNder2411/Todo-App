import React, {PureComponent} from 'react';
import './item-add-form.css';

export default class ItemAddForm extends PureComponent {

  state = {
    label: ``,
  };

  _handleLabelChange = (evt) => {
    this.setState({label: evt.target.value});
  };

  _handleSubmitForm = (evt) => {
    evt.preventDefault();
    this.props.onAddItem(this.state.label);
    this.setState({label: ``});
  };

  render() {

    return (
      <form className="item-add-form d-flex"
            onSubmit={this._handleSubmitForm}>
        <input type="text"
                className="form-control"
                onChange={this._handleLabelChange}
                value={this.state.label}
                placeholder="What needs to be done" />

        <button type="submit"
                className="btn btn-outline-secondary">
          Add Element
        </button>
      </form>
    );
  }
}

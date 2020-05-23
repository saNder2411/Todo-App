import React, {useState} from 'react';
import './item-add-form.css';

const ItemAddForm = ({onAddItem}) => {

  const [label, setLabel] = useState(``);

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    onAddItem(label);
    setLabel(``);
  };

  return (
    <form
      className="item-add-form d-flex"
      onSubmit={onFormSubmit}>
      <input
        type="text"
        className="form-control"
        onChange={({target}) => setLabel(target.value)}
        value={label}
        placeholder="What needs to be done" />

      <button
        type="submit"
        className="btn btn-outline-secondary">
        Add Element
      </button>
    </form>
  );
};

export default ItemAddForm;

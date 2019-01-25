import React from 'react';
import ProtoTypes from 'prop-types';

const FilterItem = ({ text, value, status, onChange }) => {
  return (
    <div className="filter-item" style={{ 'marginLeft': '10px' }}>
      <input 
        id={ text }
        type="radio"
        checked={ value === status }
        onChange={ () => onChange(value) }
      />
      <label htmlFor={ text }>{ text }</label>
    </div>
  );
};

FilterItem.prototType = {
  value: ProtoTypes.string.isRequired,
  status: ProtoTypes.string.isRequired,
  onChange: ProtoTypes.func.isRequired,
};

export default FilterItem;
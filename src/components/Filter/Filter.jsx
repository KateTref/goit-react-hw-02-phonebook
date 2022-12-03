import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <>
      <label htmlFor="filter">Find contacts by name</label>
      <input type="text" name="filter" value={value} onChange={onChange} />
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;

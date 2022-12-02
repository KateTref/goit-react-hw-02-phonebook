import React from 'react';

const Filter = ({ value, onChange }) => {
  return (
    <>
      <label htmlFor="filter"></label>
      <input type="text" name="filter" value={value} onChange={onChange} />
    </>
  );
};

export default Filter;

import React from 'react'; //eslint-disable-line

export default ({values, selectedValue, onChange}) => {
  return (
    <select value={selectedValue} onChange={onChange}>
    {
      values.map(value => <option key={value}>{value}</option>)
    }
    </select>
  );
};

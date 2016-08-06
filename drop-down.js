import React from 'react'; //eslint-disable-line

const DropDown = ({values, selectedValue, onChange}) => {
  return (
    <select value={selectedValue} onChange={onChange}>
    {
      values.map(value => <option key={value}>{value}</option>)
    }
    </select>
  );
};

const {arrayOf, func, string} = React.PropTypes;
DropDown.propTypes = {
  onChange: func.isRequired,
  selectedValue: string.isRequired,
  values: arrayOf(string).isRequired
};

export default DropDown;

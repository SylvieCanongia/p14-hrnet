import './selectDropdown.scss';
// You could use nanoid or uid for the key. If so, you will have to install/import them.

// import { nanoid } from "nanoid";
//  Then set the key to : key={nanoid()};

const SelectDropdown = ({ label, id, name,  value, required, onChangeCallback, dataToMap, optionLabel, optionValue, optionKey }) => {

  return (
      <div className="selectContainer">
        <label htmlFor={ id }>{label}</label>
        <select
          id={ id }
          name={ name }
          value={ value }
          required= { required }
          onChange={ onChangeCallback }>
            {dataToMap.map((data, index) => (
              <option value={ data[optionValue] } key={ data[optionKey] + index }>{ data[optionLabel] }</option>
            ))}
        </select>
      </div>
  );
};

export default SelectDropdown;
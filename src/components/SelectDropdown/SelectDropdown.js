import PropTypes from "prop-types";
import './selectDropdown.scss';
// You could use nanoid or uid for the key. If so, you will have to install/import them.

// import { nanoid } from "nanoid";
//  Then set the key to : key={nanoid()};

/**
 * Component - a select dropdown html element
 * @module SelectDropdown
 * @param { object[] } object
 * @param { String } object.label - The label of the select
 * @param { String } object.id - The id of the select
 * @param { String } object.name - The name of the select
 * @param { String|Number } object.value - The value of the select
 * @param { (String|Null) } [object.required] - Otional "required" attribute with value of required="required" if present
 * @param { Callback } object.onChangeCallback - The onChangeCallback of the select
 * @param { Array } object.dataToMap - The dataToMap of the select
 * @param { String } object.optionLabel - The optionLabel of the select
 * @param { String } object.optionValue - The optionValue of the select
 * @param { String } object.optionKey - The optionKey of the select
 * @returns { HTMLElement } -
 */
const SelectDropdown = ({ label, id, name, value, required, onChangeCallback, dataToMap, optionLabel, optionValue, optionKey }) => {

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

SelectDropdown.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    required: PropTypes.string,
    onChangeCallback: PropTypes.func.isRequired,
    dataToMap: PropTypes.array.isRequired,
    optionLabel: PropTypes.string.isRequired,
    optionValue: PropTypes.string.isRequired,
    optionKey: PropTypes.string.isRequired
  }

export default SelectDropdown;
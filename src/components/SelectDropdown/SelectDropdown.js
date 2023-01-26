import PropTypes from "prop-types";
import './selectDropdown.scss';
// We could use nanoid or uid for the key. If so, you will have to install/import them.

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
 * @param { (String|Null) } [object.required] - Otional "required" attribute with value of required="required" if *present
 * @param { Function } object.onChangeCallback - The onChangeCallback of the select
 * @param { Array } object.dataToMap - The dataToMap of the select
 * @param { String|Number } object.optionLabel - The optionLabel of the select
 * @param { String } object.optionValue - The optionValue of the select
 * @param { String } object.optionKey - The optionKey of the select
 * @returns { HTMLElement } - HTMLElement
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
    // If data to map has a key "String" and a value "Number"
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    required: PropTypes.string,
    onChangeCallback: PropTypes.func.isRequired,
    dataToMap: PropTypes.array.isRequired,
    optionLabel: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    optionValue: PropTypes.string.isRequired,
    optionKey: PropTypes.string.isRequired
  }

export default SelectDropdown;
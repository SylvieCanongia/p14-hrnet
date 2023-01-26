import PropTypes from "prop-types";
import SelectDropdown from "../SelectDropdown/SelectDropdown";
import "./showEntries.scss";

/**
 * A select that allows to choose a number of entries to display per page
 * @module ShowEntries
 * @param {Number} nbOfEntries - The name of the attribute that will get (in the root select element), the value of the selected option element
 * @returns { HTMLElement } HTMLElement
 */
const ShowEntries = ( { nbOfEntries, setNbOfEntries }) => {

  const entries = [
    {
      label: 5
    },
    {
      label: 10
    },
    {
      label: 20
    },
    {
      label: 30
    },
    {
      label: 40
    },
    {
      label: 50
    }
  ]

  /**
   * Updates the state of the property nbOfEntries
   * @function handleChangeEntries
   * @param {event} event - onChange event
   */
  const handleChangeEntries = (e) => {
    setNbOfEntries(Number(e.target.value));
  }
  
  return (
    <div className="showEntries">
      <span>Show</span>
      <SelectDropdown
        label=""
        id=""
        name="entries"
        value={Number(nbOfEntries)}
        required=""
        onChangeCallback={handleChangeEntries}
        dataToMap={entries}
        optionLabel="label"
        optionValue="label"
        optionKey="label"
      />
      <span>entries</span>
    </div>
  );
};

ShowEntries.propTypes = {
  nbOfEntries: PropTypes.number.isRequired,
  setNbOfEntries: PropTypes.func.isRequired
}

export default ShowEntries;
import PropTypes from "prop-types";
import SelectDropdown from "../SelectDropdown/SelectDropdown";
import "./showEntries.scss";

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
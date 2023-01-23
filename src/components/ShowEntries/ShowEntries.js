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
    setNbOfEntries(e.target.value);
  }
  
  return (
    <div className="showEntries">
      <span>Show</span>
      <SelectDropdown
        label=""
        id=""
        name="entries"
        value={nbOfEntries.toString()}
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

export default ShowEntries;
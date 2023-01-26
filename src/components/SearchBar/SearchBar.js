import PropTypes from "prop-types";
import './searchBar.scss';

/**
 * @module SearchBar
 * @param {String} keywords - The keywords entered in the searchbar
 * @param {String} setKeywords - The setter of the keywords in the state
 * @returns { HTMLElement } - HTMLElement
 */
const SearchBar = ( {keywords, setKeywords } ) => {

  /**
   * Updates the state of the property keywords and lowercase it
   * @param {event} event - onChange event
   * @function handleChange
   */
  const handleChange = (e) => {
    setKeywords(e.target.value.toLowerCase());
  }

  return (
    <div className="searchBar__container">
      <label htmlFor="searchBar">
        Search :
      </label>
      <input
      type="text"
        id="searchBar"
        value={keywords}
        onChange={ handleChange }
        placeholder= "Type your search here"
      />
    </div>
  );
};

SearchBar.propTypes = {
  keywords: PropTypes.string.isRequired,
  setKeywords: PropTypes.func.isRequired,
}

export default SearchBar;
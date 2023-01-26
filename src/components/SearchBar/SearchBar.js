import PropTypes from "prop-types";
import './searchBar.scss';

const SearchBar = ( {keywords, setKeywords } ) => {

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
import './searchBar.scss';
// import searchIcon from "./search.png";

const SearchBar = ( {keywords, setKeywords } ) => {

  const handleChange = (e) => {
    setKeywords(e.target.value.toLowerCase());
  }

  return (
    <div className="searchBar__container">
      <label htmlFor="searchBar">
        Search :
      </label>
      {/* <img src={ searchIcon } alt="" /> */}
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

export default SearchBar;
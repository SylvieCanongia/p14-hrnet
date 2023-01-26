import PropTypes from "prop-types";
import './pagination.scss';

/**
 * @module Pagination
 * 
 * @param {Number} currentPage - The number of the current page
 * @param {Function} setCurrentPage - The setter of the current page in the state
 * @param {Number} numberOfPages - The total number of pages
 * @returns {HTMLElement} HTMLElement
 */
const Pagination = ( { currentPage, setCurrentPage, numberOfPages} ) => {

  /**
   *  Goes to previous page
   * @function goToPrevious
   */
  const goToPrevious = () => {
    const newPage = currentPage === 1 ? 1 : currentPage - 1;
    // Updates currentPage only if it has changed
    if (newPage !== currentPage) {
      setCurrentPage(newPage)
    }
  }

  /**
   * Goes to next page
   * @function goToNext
   */
  const goToNext = () => {
    const newPage = currentPage === numberOfPages ? numberOfPages : currentPage + 1;
    // Updates currentPage only if it has changed
    if (newPage !== currentPage) {
      setCurrentPage(newPage)
    }
  }

  return (
    <div className='pagination'>
      <button
        className='paginationSection_previous'
        value="previous"
        type='button'
        onClick={goToPrevious}
        >
          Previous
        </button>
      <span className='pagination__currentPage'>{ currentPage }</span>
      <button
        className='paginationSection_next'
        value="next"
        type='button'
        onClick={goToNext}
      >
        Next
      </button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  numberOfPages: PropTypes.number.isRequired
}


export default Pagination;
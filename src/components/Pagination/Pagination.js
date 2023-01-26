import PropTypes from "prop-types";
import './pagination.scss';

const Pagination = ( { currentPage, setCurrentPage, numberOfPages} ) => {

  const goToPrevious = () => {
    const newPage = currentPage === 1 ? 1 : currentPage - 1;
    // Updates currentPage only if it has changed
    if (newPage !== currentPage) {
      setCurrentPage(newPage)
    }
  }

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
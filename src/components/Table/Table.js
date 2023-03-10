import PropTypes from "prop-types";
import { useState } from 'react';
import { format } from 'date-fns';
import ShowEntries from '../ShowEntries/ShowEntries';
import SearchBar from '../SearchBar/SearchBar';
import Pagination from '../Pagination/Pagination';
import './table.scss';

/**
 * The table that displays the list of employees
 * @module Table
 * @param {Array.<Object>}  employeesList - An array of object containing all the employees created
 * @returns { HTMLElement } HTMLElement
 */
const Table = ( { employeesList }) => {
  const [keywords, setKeywords] = useState("");
  const [nbOfEntries, setNbOfEntries] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // ============================================================
  // ========= Search function, filetring of the data ===========

  //create a new array of filtered employees by filtering the original array
  const filteredEmployeesList = employeesList.filter((employee) => {
    // if under 3 chars are entered in searchBar, return the entire list
    if (keywords.length < 3) {
      return employee;
    } else {
      // above 3 chars entered, filter from lastName, department or startDate
      return (employee.lastName.toLowerCase().includes(keywords)) || (employee.department.toLowerCase().includes(keywords)) || (employee.startDate.toString().includes(keywords))
    }
  })

  // === SORTING OF THE ARRAY BY startdate, in antichronological order ===
  // Turn your strings into dates, and then subtract them
  // to get a value that is either negative, positive, or zero.
  filteredEmployeesList.sort((a,b) => new Date(b.startDate) - new Date(a.startDate));

  // The search number of results
  const nbOfSearchResults = filteredEmployeesList.length;

  // ===================================================
  // =================== PAGINATION ====================

  // Calculates the number of pages in function of the total number of results (nbOfSearchResults)
  // and the number of results to display per page (nbOfEntries)
  let numberOfPages = 1;

  // calculates the number of pages for pagination if the search result has at least 1 employee
  // if(nbOfSearchResults >= 1) {
    numberOfPages = Math.ceil(nbOfSearchResults/nbOfEntries);
  // }

  let startPointer;
  if(currentPage === 1) startPointer = 0;
  if (currentPage > 1) {
    startPointer = (currentPage - 1) * (nbOfEntries);
  }
  const endPointer = startPointer + (nbOfEntries);

  const filteredEmployeesToDisplay = filteredEmployeesList.slice(startPointer, endPointer);

  // reajust pagination with empty pages when changing number of entries to show from a small number of entries
  // to a large number with less pages
  if( startPointer > nbOfSearchResults) {
    setCurrentPage(currentPage-1);
  }

  // Indicates the number of entries showed for the last page
  let lastIndexToShow;
  if(currentPage === numberOfPages) lastIndexToShow = nbOfSearchResults;

  // Pagination at the bottom left : 'Showing {nbOfFirstEntryOnThePage} to X of X entries'
  let nbOfFirstEntryOnThePage = currentPage > 1  ? 1 + (nbOfEntries * (currentPage - 1)) : 1;

  return (
    <div className="tableContainer">
      <div className='table__searchSection'>
        <ShowEntries nbOfEntries={nbOfEntries} setNbOfEntries={setNbOfEntries} />
        <SearchBar keywords={ keywords } setKeywords= { setKeywords } />
      </div>
      <table className='table'>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th className='startDate'>Start Date</th>
            <th className='department'>Department</th>
            <th className='dateOfBirth'>Date of Birth</th>
            <th className='street'>Street</th>
            <th>City</th>
            <th className='state'>State</th>
            <th className='zipCode'>Zip Code</th>
          </tr>
        </thead>
        <tbody>
        { filteredEmployeesToDisplay.map((employee) => (
          <tr key={employee.id}>
            <td aria-label="First Name">{employee.firstName}</td>
            <td aria-label="Last Name">{employee.lastName}</td>
            <td aria-label="Start Date">{format(new Date(employee.startDate), "MM/dd/yyyy")}</td>
            <td aria-label="Department">{employee.department}</td>
            <td aria-label="Date of Birth">{format(new Date(employee.dateOfBirth), "MM/dd/yyyy")}</td>
            <td aria-label="Street">{employee.street}</td>
            <td aria-label="City">{employee.city}</td>
            <td aria-label="State">{employee.state}</td>
            <td aria-label="Zip Code">{employee.zipCode}</td>
          </tr>
        ))
        }
        </tbody>
      </table>
      <div className='table__paginationSection'>
      
        { currentPage < numberOfPages &&
          <div>Showing {nbOfFirstEntryOnThePage} to {endPointer} of {nbOfSearchResults} entries</div>
        }
        { currentPage === numberOfPages &&
          <div>Showing {nbOfFirstEntryOnThePage} to {lastIndexToShow} of {nbOfSearchResults} entries</div>
        }

        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} numberOfPages={numberOfPages} nbOfEntriesToShow={nbOfEntries} />
      </div>
    </div>
  );
};

Table.propTypes = {
  employeesList: PropTypes.arrayOf(PropTypes.object)
}

export default Table;
import { useState } from 'react';
import { format } from 'date-fns';
import ShowEntries from '../ShowEntries/ShowEntries';
import SearchBar from '../SearchBar/SearchBar';
import './table.scss';

const Table = ( { employeesList }) => {
  const [keywords, setKeywords] = useState("");
  const [nbOfEntries, setNbOfEntries] = useState(10);

  
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

  // "nbOfEntries is the number of employees to display selected in ShowEntries component
  const filteredEmployeesToDisplay = filteredEmployeesList.slice(0, nbOfEntries);

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
            <th>Start Date</th>
            <th>Department</th>
            <th>Date of Birth</th>
            <th>Street</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
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
    </div>
  );
};

export default Table;
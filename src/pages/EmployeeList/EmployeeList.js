import { Link } from 'react-router-dom';
import './employeeList.scss';
import Table from '../../components/Table/Table';

/**
 * The page that displays the employees list
 * @module EmployeeList
 * @returns { HTMLElement } - HTMLElement
 */
const EmployeeList = () => {
  const employeesList = JSON.parse(localStorage.getItem('employees')) || [];

  return (
    <div className="employeeList">
      <h1>Current Employees</h1>
      <Table employeesList={ employeesList } />
     
      <Link to="/create-employee">
      <button
      className="employeeList__editButton"
      type="button"
      >
      Create employee
      </button>
      </Link>
    </div>
  );
};

export default EmployeeList;




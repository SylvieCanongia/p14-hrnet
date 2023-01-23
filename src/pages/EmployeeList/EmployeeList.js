import { Link } from 'react-router-dom';
import { useState } from "react";
import './employeeList.scss';
import Table from '../../components/Table/Table';
import SearchBar from '../../components/SearchBar/SearchBar';

const EmployeeList = () => {
  const employeesList = JSON.parse(localStorage.getItem('employees')) || [];
  const [keywords, setKeywords] = useState("");

  return (
    <div className="employeeList">
      <h1>Current Employees</h1>
      <SearchBar keywords={ keywords } setKeywords= { setKeywords }/>
      <Table employeesList={ employeesList } keywords={ keywords }/>
     
      <Link to="/create-employee">
      <button
      className="edit-button"
      type="button"
      >
      Create employee
      </button>
      </Link>
    </div>
  );
};

export default EmployeeList;




import { Link } from 'react-router-dom';
import './employeeList.scss';
import Table from '../../components/Table/Table';

const EmployeeList = () => {
  const employeesList = JSON.parse(localStorage.getItem('employees')) || [];

  return (
    <div className="employeeList">
      <h1>Current Employees</h1>

      <Table employeesList={ employeesList }/>
     
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




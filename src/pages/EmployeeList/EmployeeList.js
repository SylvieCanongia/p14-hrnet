import { Link } from 'react-router-dom';
import './employeeList.scss';

const EmployeeList = () => {
  const employeesList = JSON.parse(localStorage.getItem('employees')) || [];

  return (
    <div className="employeeList container">
      <h1>Current Employees</h1>
      <table>
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
        { employeesList.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.startDate}</td>
            <td>{employee.department}</td>
            <td>{employee.dateOfBirth}</td>
            <td>{employee.street}</td>
            <td>{employee.city}</td>
            <td>{employee.state}</td>
            <td>{employee.zipCode}</td>
          </tr>
        ))
        }
        </tbody>
      </table>
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




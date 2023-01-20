import { format } from 'date-fns';
import './table.scss';

const Table = ( { employeesList }) => {
  return (
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
        { employeesList.map((employee) => (
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
  );
};

export default Table;
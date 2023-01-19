import { useState } from "react";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import SelectDropdown from "../../components/SelectDropdown/SelectDropdown";
import { states } from "../../data/statesList";
import { departments } from "../../data/departmentsList";
import "./createEmployee.scss";

const CreateEmployee = () => {
  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("employees")) || []
  );

  //  1. Create the initial state for new entries in the form fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    startDate: "",
    department: "",
    dateOfBirth: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
  });

  // 2. Update the state with the values entered into the different input/select
  const handleAddFormChange = (event) => {
    event.preventDefault();
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  // 3. On form submission
  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newEmployee = {
      id: nanoid(),
      firstName: formData.firstName,
      lastName: formData.lastName,
      startDate: formData.startDate,
      department: formData.department,
      dateOfBirth: formData.dateOfBirth,
      street: formData.street,
      city: formData.city,
      state: formData.state,
      zipCode: formData.zipCode,
    };

    // Create a copy of the state variable "employees"
    // that contains the list of the employees
    // and add the new employee with the setter
    const newEmployees = [...employees, newEmployee];
    setEmployees(newEmployees);

    console.log(employees);

    localStorage.setItem("employees", JSON.stringify(employees));
  };

  return (
    <div className="createEmployee">
      <Link to="/" className="linkToViewEmployee">
        View Current Employees
      </Link>
      <h2>Create Employee</h2>
      <form id="create-employee" onSubmit={handleAddFormSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          required
          value={formData.firstName}
          onChange={handleAddFormChange}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          required
          value={formData.lastName}
          onChange={handleAddFormChange}
        />

        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input
          id="dateOfBirth"
          name="dateOfBirth"
          type="text"
          required
          value={formData.dateOfBirth}
          onChange={handleAddFormChange}
        />

        <label htmlFor="startDate">Start Date</label>
        <input
          id="startDate"
          name="startDate"
          type="text"
          required
          value={formData.startDate}
          onChange={handleAddFormChange}
        />

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input
            id="street"
            name="street"
            type="text"
            required
            value={formData.street}
            onChange={handleAddFormChange}
          />

          <label htmlFor="city">City</label>
          <input
            id="city"
            name="city"
            type="text"
            required
            value={formData.city}
            onChange={handleAddFormChange}
          />
          <SelectDropdown
            label="State"
            id="state"
            name="state"
            value={formData.state}
            required="required"
            onChangeCallback={handleAddFormChange}
            dataToMap={states}
            optionLabel="name"
            optionValue="abbreviation"
            optionKey="abbreviation"
          />

          <label htmlFor="zipCode">Zip Code</label>
          <input
            id="zipCode"
            name="zipCode"
            type="number"
            required
            value={formData.zipCode}
            onChange={handleAddFormChange}
          />
        </fieldset>
        <SelectDropdown
          label="Department"
          id="department"
          name="department"
          value={formData.department}
          required="required"
          onChangeCallback={handleAddFormChange}
          dataToMap={departments}
          optionLabel="name"
          optionValue="name"
          optionKey="name"
        />

        <button type="submit">Save employee</button>
      </form>

      <div id="confirmation" className="modal">
        Employee Created!
      </div>
    </div>
  );
};

export default CreateEmployee;

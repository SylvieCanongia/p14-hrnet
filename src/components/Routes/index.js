import React from "react";
import { Route, Routes } from "react-router-dom";
import EmployeeList from "../../pages/EmployeeList/EmployeeList";
import CreateEmployee from "../../pages/CreateEmployee/CreateEmployee";
import Error from "../../pages/Error/Error";

/**
 * @module index
 * @returns the routes of the application
 */
const index = () => {
  return (
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/create-employee" element={<CreateEmployee />} />
        {/* default route if no other matches */}
        <Route path="*" element={<Error />} />
      </Routes>
    </React.StrictMode>
  );
};

export default index;

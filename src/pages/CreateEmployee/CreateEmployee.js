import { useState } from "react";
import { Link } from "react-router-dom";
import "./createEmployee.scss";
import Modal from "../../components/Modal/Modal";
import Form from "../../components/Form/Form";

/**
 * The page for creating new employees
 * @module CreateEmployee
 * @returns { HTMLElement } - HTMLElement
 */
const CreateEmployee = () => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="createEmployee">
      <Link to="/" className="linkToViewEmployee">
        View Current Employees
      </Link>

      <h2>Create Employee</h2>

      <Form setOpenModal={setOpenModal} />

      { openModal &&
        <Modal open={openModal} onClose={() => setOpenModal(false)} message="Employee created !"/>
      }
    </div>
  );
};

export default CreateEmployee;

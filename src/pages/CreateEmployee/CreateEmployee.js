import { useState } from "react";
import { Link } from "react-router-dom";
import "./createEmployee.scss";
import { Modal } from "hrnet-modal-component";
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
        <Modal onClose={() => setOpenModal(false)} message="Employee created !"/>
      }
    </div>
  );
};

export default CreateEmployee;

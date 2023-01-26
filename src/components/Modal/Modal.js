import PropTypes from 'prop-types';
import "./modal.scss";

/**
 * React Component - A Modal React component to display a simple message
 * @module Modal
 * @param {String} message - The message the modal should display
 * @param {Function} onClose - A callback that closes the modal
 * @returns { HTMLElement } - HTMLElement
 */
const Modal = ( {message, onClose } ) => {

  return (
    // onClick for closing by clicking on the overlay window
    <div onClick={onClose} className="modal overlay">
    {/* stopPropagation prevents onClose to be propagated to the modal window */}
      <div onClick={(e) => {
        e.stopPropagation();
      }} className="modalBody">
        <p onClick={onClose} className="modal__closeCross">X</p>
        <p className="modalMessage">{message}</p>
      </div>
    </div>
  );
};

Modal.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default Modal;
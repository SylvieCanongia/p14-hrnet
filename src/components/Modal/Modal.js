import "./modal.scss";

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

export default Modal;
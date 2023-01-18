import React from "react";
import { FaTimes } from "react-icons/fa";
import useGlobalContext from "./hooks";

const Modal = () => {
  const { isModalOpen, modalClose } = useGlobalContext();
  return (
    <div className={`modal-overlay ${isModalOpen && "show-modal"}`}>
      <div className="modal-container">
        <h3>Modal Content</h3>
        <button className="close-modal-btn" onClick={modalClose}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;

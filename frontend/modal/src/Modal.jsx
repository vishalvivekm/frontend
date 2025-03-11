import { useState, useContext } from "react";
import ModalContext from "./Context";
// import "./styles.css";

export const Modal = () => {
  const { modalOpen, setModalOpen } = useContext(ModalContext);
  return (
    modalOpen && (
      <div className="modal">
        <div>This is modal</div>
        <button onClick={() => setModalOpen(false)}>X</button>
      </div>
    )
  );
};

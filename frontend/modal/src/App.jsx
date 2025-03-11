import { useState } from "react";
import "./styles.css";
import { Modal } from "./Modal";
import ModalContext from "./Context";

export default function App() {
  const [sidebarVisibility, setSidebarVisibility] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  const handleClose = () => {
    setSidebarVisibility((status) => !status);
  };
  const handleOpenModal = () => {
    setModalOpen(true);
  };
  return (
    <ModalContext.Provider value={{ modalOpen, setModalOpen }}>
      <div className="App">
        <div
          className="left"
          style={{ display: sidebarVisibility ? "flex" : "none" }}
        >
          <button className="closeSidebar" onClick={handleClose}>
            X
          </button>
          <div className="menu-container">
            <div className="menu-item">Home</div>
            <div className="menu-item">Team</div>
            <div className="menu-item">Calendar</div>
            <div className="menu-item">Projects</div>
            <div className="menu-item">Docuemnts</div>
          </div>
        </div>
        <button
          className="sidebar-toggler"
          onClick={handleClose}
          style={{ display: sidebarVisibility ? "none" : "block" }}
        >
          open
        </button>
        <div className="right">
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
          <button onClick={handleOpenModal}>Open Modal</button>
        </div>
        <Modal />
      </div>
    </ModalContext.Provider>
  );
}

// FullPageModal.tsx
import React from "react";
import "./modal.css";
import TodoNavbar from "../todo/Header";

type Props = {
  children?: React.ReactNode; // Add this line
  show: boolean;
  onClose: () => void;
};

const FullPageModal: React.FC<Props> = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="fullpage-modal-overlay">
      <div className="fullpage-modal-content">
        <TodoNavbar />
        <div className="button">
          <button className={"button-7"} onClick={onClose}>
            BACK
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default FullPageModal;

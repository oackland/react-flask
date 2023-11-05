// FullPageModal.tsx
import React from "react";
import "./modal.css";

type Props = {
  children?: React.ReactNode,
  show: boolean,
  onClose: () => void,
  modalOpen: boolean,
  handleCloseModal: () => void,
};

const FullPageModal: React.FC<Props> = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="fullpage-modal-overlay">
      <div className="fullpage-modal-content">
        <div className="button">
          <button className={"button-7"} onClick={onClose}>
            BACK
          </button>

          <div style={{ width: "100vw", height: "100vh" }}></div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default FullPageModal;

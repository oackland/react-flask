import React, { useState } from "react";

interface ModalProps {
  title: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const ModalComponent: React.FC<ModalProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      {isOpen && (
        <div
          style={{
            border: "1px solid black",
            padding: "16px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h2>{title}</h2>
          {children}

          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default ModalComponent;

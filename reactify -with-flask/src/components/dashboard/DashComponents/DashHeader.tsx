import React, { useState } from "react";
import FullPageModal from "../../modal/FullPageModal";
import { User } from "../../types";
import TodoPage from "../../todo/TodoPage";

interface SectionOneProps {
  user?: User;
}

const DashHeader: React.FC<SectionOneProps> = ({ user }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <section className="section-1 center" id="section-1">
      <h1 className="section-1-heading">Atypical Project</h1>
      <img
        src="img/dash/john-smith.jpg"
        alt="User unknown"
        className="person-img"
      />
      <h3 className="person-name">{user?.username || "Unknown User"}</h3>

      {/* Button to trigger modal */}
      <button onClick={() => setModalVisible(true)} className="section-1-btn">
        Projects
      </button>

      <FullPageModal
        show={isModalVisible}
        onClose={() => setModalVisible(false)}
      >
        <h1>Welcome to the Full Page Modal</h1>
        <p>This modal takes up the entire page!</p>
        <TodoPage />
      </FullPageModal>
    </section>
  );
};
export default DashHeader;

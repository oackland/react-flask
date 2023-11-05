import React, { useState } from "react";
import FullPageModal from "../../modal/FullPageModal";
import TodoPage from "../../todo/TodoPage";

const DashHeader: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <section className="section-1 center" id="section-1">
      <h1 className="section-1-heading">Atypical Project</h1>
      <img
        src="../../../../public/img/dash/john-smith.jpg"
        alt="User unknown"
        className="person-img"
      />
      <h3 className="person-name"></h3>

      <button onClick={() => setModalVisible(true)} className="section-1-btn">
        Add a self Note
      </button>
    </section>
  );
};
export default DashHeader;

import React from "react";
import Draggable from "../../components/draggable/Draggable";
import EmbeddedBrowser from "../../components/dashboard/webEbedded.tsx";

const Dashboard: React.FC = () => {
  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
      <Draggable>
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "lightblue",
          }}
        ></div>
        <EmbeddedBrowser url="https://www.google.com" />
      </Draggable>
    </div>
  );
};

export default Dashboard;

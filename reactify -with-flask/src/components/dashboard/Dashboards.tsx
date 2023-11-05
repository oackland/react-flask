import React from "react";
import Layout from "./Layout";

interface DashboardProps {
  children: React.ReactNode;
  user: {
    id: number;
    username: string;
    email: string;
  };
}

const Dashboard: React.FC<DashboardProps> = ({ children }: DashboardProps) => {
  return (
    <>
      <Layout children={children}></Layout>
      <div></div>
    </>
  );
};

export default Dashboard;

import React from "react";
import Navbar from "../components/Navbar";
import SubmissionForm from "../components/SubmissionForm";
import SubmissionList from "../components/SubmissionList";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <SubmissionForm onSuccess={() => window.location.reload()} />
      <SubmissionList />
    </div>
  );
};

export default Dashboard;

import React from "react";
import Navbar from "../components/Navbar";
import SubmissionForm from "../components/SubmissionForm";
import SubmissionList from "../components/SubmissionList";

const Dashboard = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
      }}
    >
      <Navbar />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
        <h1
          style={{ textAlign: "center", marginBottom: "30px", color: "#333" }}
        >
          Interview Experiences Dashboard
        </h1>

        {/* Submission Form */}
        <div
          style={{
            marginBottom: "40px",
            padding: "20px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 style={{ textAlign: "center", color: "#333" }}>
            Submit Your Interview Experience
          </h2>
          <SubmissionForm onSuccess={() => window.location.reload()} />
        </div>

        {/* Submission List */}
        <div
          style={{
            padding: "20px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2
            style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}
          >
            Submitted Experiences
          </h2>
          <SubmissionList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

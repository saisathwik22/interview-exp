import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
      }}
    >
      <Router>
        <Routes>
          <Route
            path='/dashboard'
            element={isAuthenticated ? <Dashboard /> : <Navigate to='/login' />}
          />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Navigate to='/dashboard' />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

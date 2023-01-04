import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useState, useEffect } from "react";
import AdminLogin from "./Admin/pages/LFC Page/AdminLogin";
import AdminRegister from "./Admin/pages/LFC Page/AdminRegister";
import AdminForgotpsw from "./Admin/pages/LFC Page/AdminForgotpsw";
import Appoinment from "./Appoinment/Appoinment";
import PatientLogin from "./Appoinment/patient/Patient lfc Page/PatientLogin";
import PatientForgotpsw from "./Appoinment/patient/Patient lfc Page/PatientForgotpsw";
import AdminMain from "./Admin/components/AdminMain";
import AdminHome from "./Admin/pages/home/AdminHome";
import DoctorMain from "./Admin/pages/Doctor/DoctorMain";
import PatientMain from "./Admin/pages/Patient/PatientMain";
import CustomerMain from "./Admin/pages/Customer/CustomerMain";
import DoctorRecord from "./Admin/pages/Doctor/DoctorRecord";
import DoctorRegister from "./Admin/pages/Doctor/DoctorRegister";
import DoctorSpecialisation from "./Admin/pages/Doctor/DoctorSpecialisation";
import PatientRecord from "./Admin/pages/Patient/PatientRecord";
import PatientAdmit from "./Admin/pages/Patient/PatientAdmit";
import PatientApprove from "./Admin/pages/Patient/PatientApprove";
import ProfileMain from "./Admin/pages/Profile/ProfileMain";

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route
            exact
            path="/admin/profile"
            element={
              <>
                <AdminMain />
                <ProfileMain />
              </>
            }
          />
          <Route
            exact
            path="/admin/patient/approve"
            element={
              <>
                <AdminMain />
                <PatientApprove />
              </>
            }
          />
          <Route
            exact
            path="/admin/patient/admit"
            element={
              <>
                <AdminMain />
                <PatientAdmit />
              </>
            }
          />
          <Route
            exact
            path="/admin/patient/record"
            element={
              <>
                <AdminMain />
                <PatientRecord />
              </>
            }
          />
          <Route
            exact
            path="/admin/doctor/specialisation"
            element={
              <>
                <AdminMain />
                <DoctorSpecialisation />
              </>
            }
          />
          <Route
            exact
            path="/admin/doctor/register"
            element={
              <>
                <AdminMain />
                <DoctorRegister />
              </>
            }
          />
          <Route
            exact
            path="/admin/doctor/record"
            element={
              <>
                <AdminMain />
                <DoctorRecord />
              </>
            }
          />
          <Route
            exact
            path="/admin/customer"
            element={
              <>
                <AdminMain />
                <CustomerMain />
              </>
            }
          />
          <Route
            exact
            path="/admin/patient"
            element={
              <>
                <AdminMain />
                <PatientMain />
              </>
            }
          />
          <Route
            exact
            path="/admin/doctor"
            element={
              <>
                <AdminMain />
                <DoctorMain />
              </>
            }
          />
          <Route
            exact
            path="/admin/dashboard"
            element={
              <>
                <AdminMain />
                <AdminHome />
              </>
            }
          />
          <Route
            exact
            path="/"
            element={
              <>
                <Appoinment />
              </>
            }
          />
          <Route
            exact
            path="/Patient/Forgot"
            element={
              <>
                <PatientForgotpsw />
              </>
            }
          />
          <Route
            exact
            path="/Patient/Login"
            element={
              <>
                <PatientLogin />
              </>
            }
          />
          <Route
            exact
            path="/admin"
            element={
              <>
                <AdminLogin />
              </>
            }
          />
          <Route
            exact
            path="/admin/forgot-password"
            element={
              <>
                <AdminForgotpsw />
              </>
            }
          />
          <Route
            exact
            path="/admin/register"
            element={
              <>
                <AdminRegister />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;

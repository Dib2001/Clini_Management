import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import AdminLogin from "./Admin/pages/LFC Page/AdminLogin";
import AdminRegister from "./Admin/pages/LFC Page/AdminRegister";
import AdminForgotpsw from "./Admin/pages/LFC Page/AdminForgotpsw";
import Appoinment from "./Index/Appoinment";
import PatientLogin from "./Patient/Patient lfc Page/PatientLogin";
import PatientForgotpsw from "./Patient/Patient lfc Page/PatientForgotpsw";
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
import Preview from "./Admin/pages/Patient/Preview";
import PatientrecordPreview from "./Admin/pages/Patient/PatientrecordPreview";
import Error404 from "./Index/Error404";
import About from "./Index/About";
import Faqs from "./Index/Faqs";
import Pricing from "./Index/Pricing";
import Feature from "./Index/Feature";
import Error404Copy from "./Index/Error404Copy";

const App = () => {
  
  if (
    localStorage.getItem("token") &&
    localStorage.getItem("refresh") &&
    localStorage.getItem("adminEmail")
  ) {
    return (
      <Router>
        <Routes>
          <Route
            exact
            path="/admin/patient/record/preview/:patientId"
            element={
              <>
                <AdminMain />
                <PatientrecordPreview />
              </>
            }
          />
          <Route
            exact
            path="/admin/patient/approve/preview/:patientId"
            element={
              <>
                <AdminMain />
                <Preview />
              </>
            }
          />
          <Route
            exact
            path="*"
            element={
              <>
                <AdminMain />
                <Error404Copy />
              </>
            }
          />
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
        </Routes>
      </Router>
    );
  } else {
    return (
      <>
        <Router>
          <Routes>
            <Route
              exact
              path="*"
              element={
                <>
                  <Error404 />
                </>
              }
            />
            <Route
              exact
              path="/feature"
              element={
                <>
                  <Feature />
                </>
              }
            />
            <Route
              exact
              path="/pricnig"
              element={
                <>
                  <Pricing />
                </>
              }
            />
            <Route
              exact
              path="/faqs"
              element={
                <>
                  <Faqs />
                </>
              }
            />
            <Route
              exact
              path="/about"
              element={
                <>
                  <About />
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
};
export default App;

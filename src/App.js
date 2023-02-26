import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
import ProtectedAdmin from "./utils/ProtectedAdmin";
import ProtectedPublic from "./utils/ProtectedPublic";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/admin/patient/record/preview/:patientId" element={<ProtectedAdmin Component1={AdminMain} Component2={PatientrecordPreview} /> } />
        <Route exact path="/admin/patient/approve/preview/:patientId" element={<ProtectedAdmin Component1={AdminMain} Component2={Preview} />} />
        {/* <Route exact path="*" element={<ProtectedAdmin Component1={AdminMain} Component2={Error404Copy} /> } /> */}
        <Route exact path="/admin/profile" element={<ProtectedAdmin Component1={AdminMain} Component2={ProfileMain} />} />
        <Route exact path="/admin/patient/approve" element={<ProtectedAdmin Component1={AdminMain} Component2={PatientApprove} /> } />
        <Route exact path="/admin/patient/admit" element={<ProtectedAdmin Component1={AdminMain} Component2={PatientAdmit} />  } />
        <Route exact path="/admin/patient/record" element={<ProtectedAdmin Component1={AdminMain} Component2={PatientRecord} />  } />
        <Route exact path="/admin/doctor/specialisation" element={<ProtectedAdmin Component1={AdminMain} Component2={DoctorSpecialisation} />  } />
        <Route exact path="/admin/doctor/register" element={<ProtectedAdmin Component1={AdminMain} Component2={DoctorRegister} /> }/>
        <Route exact path="/admin/doctor/record" element={<ProtectedAdmin Component1={AdminMain} Component2={DoctorRecord} />} />
        <Route exact path="/admin/customer" element={<ProtectedAdmin Component1={AdminMain} Component2={CustomerMain} />} />
        <Route exact path="/admin/patient" element={<ProtectedAdmin Component1={AdminMain} Component2={PatientMain} />} />
        <Route exact path="/admin/doctor" element={<ProtectedAdmin Component1={AdminMain} Component2={DoctorMain} />} />
        <Route exact path="/admin/dashboard" element={<ProtectedAdmin Component1={AdminMain} Component2={AdminHome} />} />
        {/* <Route exact path="*" element={<ProtectedPublic Component1={Error404}/>} /> */}
        <Route exact path="/feature" element={<ProtectedPublic Component1={Feature}/>} />
        <Route exact path="/pricnig" element={<ProtectedPublic Component1={Pricing}/>} />
        <Route exact path="/faqs" element={<ProtectedPublic Component1={Faqs}/>} />
        <Route exact path="/about" element={<ProtectedPublic Component1={About}/>} />
        <Route exact path="/" element={<ProtectedPublic Component1={Appoinment}/>} />
        <Route exact path="/Patient/Forgot" element={<PatientForgotpsw />} />
        <Route exact path="/Patient/Login" element={<PatientLogin />} />
        <Route exact path="/admin" element={<ProtectedPublic Component1={AdminLogin}/>} />
        <Route exact path="/admin/forgot-password" element={<ProtectedPublic Component1={AdminForgotpsw}/>} />
        <Route exact path="/admin/register" element={<ProtectedPublic Component1={AdminRegister}/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

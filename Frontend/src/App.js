import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AdminLogin from "./Admin/pages/LFC Page/AdminLogin";
import AdminRegister from "./Admin/pages/LFC Page/AdminRegister";
import AdminForgotpsw from "./Admin/pages/LFC Page/AdminForgotpsw";
import Appoinment from "./Index/Appoinment";
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
import MadicineHome from "./Admin/pages/Madicine/MadicineHome";
import CommingSoon from "./Admin/pages/CommingSoon";
import Navbar from "./Index/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/admin/patient/record/preview/:patientId" element={<><AdminMain/><PatientrecordPreview/></>} />
        <Route exact path="/admin/patient/approve/preview/:patientId" element={<><AdminMain/><Preview/></>} />
        <Route exact path="*" element={<Error404/>} />
        <Route exact path="/admin/profile" element={<><AdminMain/><ProfileMain/> </>}/>
        <Route exact path="/admin/commingsoon" element={<><AdminMain/><CommingSoon/> </>}/>
        <Route exact path="/admin/patient/approve" element={<><AdminMain/><PatientApprove/> </>}/>
        <Route exact path="/admin/patient/admit" element={<><AdminMain/><PatientAdmit/> </>}/>
        <Route exact path="/admin/patient/record" element={<><AdminMain/><PatientRecord/> </>}/>
        <Route exact path="/admin/doctor/specialisation" element={<><AdminMain/><DoctorSpecialisation/> </>}/>
        <Route exact path="/admin/doctor/register" element={<><AdminMain/><DoctorRegister/> </>}/>
        <Route exact path="/admin/doctor/record" element={<><AdminMain/><DoctorRecord/> </>}/>
        <Route exact path="/admin/customer" element={<><AdminMain/><CustomerMain/> </>}/>
        <Route exact path="/admin/patient" element={<><AdminMain/><PatientMain/> </>}/>
        <Route exact path="/admin/doctor" element={<><AdminMain/><DoctorMain/> </>}/>
        <Route exact path="/admin/dashboard" element={<><AdminMain/><AdminHome/> </>}/>
        <Route exact path="/admin/madicine" element={<><AdminMain/><MadicineHome/> </>}/>
        <Route exact path="/feature" element={<><Navbar/><Feature/> </>}/>
        <Route exact path="/pricing" element={<><Navbar/><Pricing/> </>}/>
        <Route exact path="/faqs" element={<><Navbar/><Faqs/> </>}/>
        <Route exact path="/about" element={<><Navbar/><About/> </>}/>
        <Route exact path="/" element={<><Navbar/><Appoinment/> </>}/>
        {/* <Route exact path="/Patient/Track" element={<><PatientForgotpsw /> </>}/> */}
        <Route exact path="/admin" element={<><AdminLogin/> </>}/>
        <Route exact path="/admin/forgot-password" element={<><AdminForgotpsw/> </>}/>
        <Route exact path="/admin/register" element={<><AdminRegister/> </>}/>

      </Routes>
    </BrowserRouter>
  );
}
export default App;

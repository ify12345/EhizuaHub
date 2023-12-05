
import { Route,  Routes } from "react-router-dom"

import AdminDashboard from "./admin/AdminDashboard"
import ForgotPassword from "./admin/ForgotPassword";
import AdminLoginInterface from "./admin/AdminLoginInterface";


function App() {
  

  
  return (
     <>
      <Routes>
        <Route path = "/adminlogin" element={<AdminLoginInterface/>} />
        <Route path = "/admindashboard" element={<AdminDashboard/>} />
        <Route path = "/adminforgot" element={<ForgotPassword/>} />
      </Routes>
     </>
  );
}

export default App;



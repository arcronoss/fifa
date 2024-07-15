
import React  ,{useState,useEffect  } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Manubar from "./components/Manubar.js";
import Banner from "./components/Banner";
import RegisterForm from "./components/RegisterForm";
import Mainpage from "./components/Mainpage.js";
import Forgot from "./components/Forgot.js"
import UserReport from "./components/UserReport.js";
import { salesOrders } from './data';
import SOList from './components/SalesOrderList';
import SODetail from './components/SalesOrderDetails';

function App() {
  return (
    <Router>
      
      <Manubar />
      <div>
        
        <div style={{ paddingTop: "64px" }}>{/* เพิ่ม paddingTop เพื่อหลีกเลี่ยงการซ้อนทับกัน */}
          <Routes>
          <Route path="/mainpage" element={<Mainpage />} />  
          <Route path="/Register" element={<RegisterForm />} />
          <Route path="/login" element={<Banner />} />
          <Route path="/forgot" element={<Forgot />}/>
          <Route path="/report" element={<UserReport />}/>
          </Routes>
        </div>
      </div>
    </Router>
    // // src/App.js
  //   <Router>
  //   <Routes>
  //     <Route path="/" element={<SOList />} />
  //     <Route path="/so-detail/:so_id" element={<SODetail />} />
  //   </Routes>
  // </Router>
    );
};

export default App;

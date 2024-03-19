import { useState } from 'react'
import './App.css'
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './Components/MainPage/MainPage';
import Popularplans from './Components/Popularplans/Popularplans';
import AddOns from './Components/AddOns/AddOns';
import RechargeHistory from './Components/RechargeHistory/RechargeHistory';
import AdminPopularplans from './Components/Admin/AdminPopularplans/AdminPopularplans';
import AddPlan from './Components/Admin/Addplan/Addplan';
import EditPlan from './Components/Admin/EditPlan/EditPlan';
import AdminAddOns from './Components/Admin/AdminAddOns/AdminAddOns';
import AddAO from './Components/Admin/AddAO/AddAO';
import EditAO from './Components/Admin/EditAO/EditAO';
import AdminRechargeHistory from './Components/Admin/AdminRechargeHistory/AdminRechargeHistory';
import RechargeDetails from './Components/RechargeDetails/RechargeDetails';
import Recharge from './Components/Recharge/Recharge';
import Payment from './Components/Payment/Payment';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/main" element={<MainPage/>}>
            <Route path="popular-plans" element={<Popularplans/>}/>
            <Route path="add-ons" element={<AddOns/>}/>
            <Route path="recharge-details" element={<RechargeHistory/>}/>
            <Route path="admin/popularplans" element={<AdminPopularplans/>}/>
            <Route path="admin/popularplans/addplan" element={<AddPlan/>}/>
            <Route path="admin/popularplans/editplan" element={<EditPlan/>}/>
            <Route path="admin/addons" element={<AdminAddOns/>}/>
            <Route path="admin/addons/addplan" element={<AddAO/>}/>
            <Route path="admin/addons/editaddon" element={<EditAO/>}/>
            <Route path="admin/rechargehistory" element={<AdminRechargeHistory/>}/>
            <Route path="rechargedetails" element={<RechargeDetails/>}/>
            <Route path="recharge" element={<Recharge/>}/>
            <Route path="payment" element={<Payment/>}/>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

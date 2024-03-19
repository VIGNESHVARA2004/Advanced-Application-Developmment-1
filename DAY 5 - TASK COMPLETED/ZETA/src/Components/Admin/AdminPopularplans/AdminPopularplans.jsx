import React, { useState } from 'react';
import './AdminPopularplans.css';
import AdminPlanCards from '../AdminPlanCards/AdminPlanCards';
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
export default function AdminPopularplans() {
  const plans = useSelector(state => state.plans.plans);
  const navigate = useNavigate()
  return (
    <div className='Admin-Popular-Card'>
      <div className="add-plan-container">
        <button onClick={() => {navigate('/main/admin/popularplans/addplan')}} className="add-plan-btn button-59">Add Plan</button>
      </div>
      <div className="Admin-plans-container">
        {plans.map((plan, index) => (
          <AdminPlanCards key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
}

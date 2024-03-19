import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AdminAddCards from '../AdminAddCards/AdminAddCards';
import './AdminAddOns.css'

export default function AdminAddOns() {
const addOnsData = useSelector(state => state.addons.addons);
  const navigate = useNavigate();

  const handleAddPlanClick = () => {
    navigate('/main/admin/addons/addplan');
  };

  return (
    <div className='Admin-Add-Ons-Card'>
      <div className="add-plan-container">
        <button onClick={handleAddPlanClick} className="add-plan-btn button-59">Add Plan</button>
      </div>
      <div className="Admin-plans-container">
        {addOnsData.map((plan, index) => (
          <AdminAddCards key={index} addon={plan} />
        ))}
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPen } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { deletePlan } from '../../Redux/planSlice';

const AdminPlanCards = ({ plan, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedPlan, setEditedPlan] = useState({ ...plan });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    dispatch(deletePlan(plan.id));
  };
  const handleSave = () => {
    onEdit(editedPlan);
    setIsEditing(false);
  };

  const handleEditClick = () => {
    navigate('/main/admin/popularplans/editplan', { state: { plan: plan } });
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2>{plan.title}</h2>
        <div className="Admin-card-actions">
          {isEditing ? (
            <button onClick={handleSave}><FontAwesomeIcon icon={faEdit} /></button>
          ) : (
            <div className='action-buttons'>
              <FontAwesomeIcon style={{width:"20px",height:"20px",marginRight:"20px"}}icon={faPen} onClick={handleEditClick}/>
              <FontAwesomeIcon style={{width:"20px",height:"20px"}}icon={faTrashAlt} onClick={handleDeleteClick}/>
            </div>
          )}
        </div>
      </div>
      <div className='card-content-outer'>
        <div className="card-content">
          <div className='card-content-box'>
            <p><strong>Price</strong></p>
            <p>{plan.price}</p>
          </div>
          <div className='card-content-box'>
            <p><strong>Data</strong></p>
            <p>{plan.data}</p>
          </div>
          <div className='card-content-box'>
            <p><strong>Speed</strong></p>
            <p>{plan.speed}</p>
          </div>
          <div className='card-content-box'>
            <p><strong>Validity</strong></p>
            <p>{plan.validity}</p>
          </div>
          <div className='card-content-box'>
            <p><strong>Note</strong></p>
            <p>{plan.note}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPlanCards;

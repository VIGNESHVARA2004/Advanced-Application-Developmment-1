import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPen } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteAddon } from '../../Redux/addonsSlice';
import './AdminAddCards.css';

const AdminAddCards = ({ addon, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedAddon, setEditedAddon] = useState({ ...addon });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    dispatch(deleteAddon(addon.id));
  };

  const handleEditClick = () => {
    navigate('/main/admin/addons/editaddon', { state: { addon: addon } });
  };

  return (
    <div className="card">
      <div className="add-card-header">
        <h2>{addon.title}</h2>
        <div className="card-actions">
          {isEditing ? (
            <button onClick={handleSave}><FontAwesomeIcon icon={faEdit} /></button>
          ) : (
            <div className='action-buttons'>
              <FontAwesomeIcon style={{ width: "20px", height: "20px", marginRight: "20px" }} icon={faPen} onClick={handleEditClick} />
              <FontAwesomeIcon style={{ width: "20px", height: "20px" }} icon={faTrashAlt} onClick={handleDeleteClick} />
            </div>
          )}
        </div>
      </div>
      <div className='card-content-outer'>
        <div className="card-content">
          <div className='card-content-box'>
            <p><strong>Price</strong></p>
            <p>{addon.price}</p>
          </div>
          <div className='card-content-box'>
            <p><strong>Data</strong></p>
            <p>{addon.data}</p>
          </div>
          <div className='card-content-box'>
            <p><strong>Speed</strong></p>
            <p>{addon.speed}</p>
          </div>
          <div className='card-content-box'>
            <p><strong>Validity</strong></p>
            <p>{addon.validity}</p>
          </div>
          <div className='card-content-box'>
            <p><strong>Note</strong></p>
            <p>{addon.note}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminAddCards;

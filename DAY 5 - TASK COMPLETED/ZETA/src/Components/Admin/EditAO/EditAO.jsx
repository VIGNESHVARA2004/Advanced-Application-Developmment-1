import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateAddon } from '../../Redux/addonsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';
import './EditAO.css';

const EditAO = () => {
  const location = useLocation();
  const addon = location.state?.addon;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ ...addon });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateAddon(formData));
    navigate('/main/admin/addons');
  };

  return (
    <div className="edit-ao-form">
      <div className='edit-title'>
        <FontAwesomeIcon onClick={() => navigate('/main/admin/addons')} icon={faArrowLeft} className="left-arrow" />
        <h2>Edit Add-On</h2>
      </div>
      <form className='form-outer' onSubmit={handleSubmit}>
        <div className='edit-divide'>
          <div className='edit-input-box'>
            <input type='text' name="title" value={formData.title} onChange={handleChange} required />
            <label htmlFor="title">Title</label>
          </div>
          <div className='edit-input-box'>
            <input type='text' name="price" value={formData.price} onChange={handleChange} required />
            <label htmlFor="price">Price</label>
          </div>
        </div>
        <div className='edit-divide'>
          <div className='edit-input-box'>
            <input type='text' name="data" value={formData.data} onChange={handleChange} required />
            <label htmlFor="data">Data</label>
          </div>
          <div className='edit-input-box'>
            <input type='text' name="speed" value={formData.speed} onChange={handleChange} required />
            <label htmlFor="speed">Speed</label>
          </div>
        </div>
        <div className='edit-divide'>
          <div className='edit-input-box'>
            <input type='text' name="validity" value={formData.validity} onChange={handleChange} required />
            <label htmlFor="validity">Validity</label>
          </div>
          <div className='edit-input-box'>
            <input type='text' name="note" value={formData.note} onChange={handleChange} required />
            <label htmlFor="note">Note</label>
          </div>
        </div>
        <button type="submit">Update Add-On</button>
      </form>
    </div>
  );
}

export default EditAO;

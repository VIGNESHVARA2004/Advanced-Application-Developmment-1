import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updatePlan } from '../../Redux/planSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './EditPlan.css';

const EditPlan = () => {
  const location = useLocation();
  const plan = location.state?.plan;
  console.log(plan);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ ...plan });
  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePlan(formData));
    navigate('/main/admin/popularplans');
  };

  return (
    <div className="edit-plan-form">
      <div className='edit-title'>
        <FontAwesomeIcon onClick={() => navigate('/main/admin/popularplans')} icon={faArrowLeft} className="left-arrow" />
        <h2>Edit Plan</h2>
      </div>
      <form className='form-outer' onSubmit={handleSubmit}>
        <div className='edit-divide'>
          <div className='edit-input-box'>
            <select className="edit-opt" name="title" value={formData.title} onChange={handleChange} required>
              <option value='Prepaid'>Prepaid</option>
              <option value='Postpaid'>Postpaid</option>
            </select>
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
        <button type="submit">Update Plan</button>
      </form>
    </div>
  );
}

export default EditPlan;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAddon } from '../../Redux/addonsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './AddAO.css';

const AddAO = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    data: '',
    speed: '',
    validity: '',
    note: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAddon(formData));
    // Clear form after submission
    setFormData({
      title: '',
      price: '',
      data: '',
      speed: '',
      validity: '',
      note: ''
    });
    navigate('/main/admin/addons');
  };

  return (
    <div className="add-ao-form">
      <div className='add-title'>
        <FontAwesomeIcon onClick={() => { navigate('/main/admin/addons') }} icon={faArrowLeft} className="left-arrow" />
        <h2>Add Add-On</h2>
      </div>
      <form className='form-outer' onSubmit={handleSubmit}>
        <div className='add-divide'>
          <div className='add-input-box'>
            <input type='text' name="title" value={formData.title} onChange={handleChange} required />
            <label htmlFor="title">Title</label>
          </div>
          <div className='add-input-box'>
            <input type='text' name="price" value={formData.price} onChange={handleChange} required />
            <label htmlFor="price">Price</label>
          </div>
        </div>
        <div className='add-divide'>
          <div className='add-input-box'>
            <input type='text' name="data" value={formData.data} onChange={handleChange} required />
            <label htmlFor="data">Data</label>
          </div>
          <div className='add-input-box'>
            <input type='text' name="speed" value={formData.speed} onChange={handleChange} required />
            <label htmlFor="speed">Speed</label>
          </div>
        </div>
        <div className='add-divide'>
          <div className='add-input-box'>
            <input type='text' name="validity" value={formData.validity} onChange={handleChange} required />
            <label htmlFor="validity">Validity</label>
          </div>
          <div className='add-input-box'>
            <input type='text' name="note" value={formData.note} onChange={handleChange} required />
            <label htmlFor="note">Note</label>
          </div>
        </div>
        <button type="submit">Add Add-On</button>
      </form>
    </div>
  );
}

export default AddAO;

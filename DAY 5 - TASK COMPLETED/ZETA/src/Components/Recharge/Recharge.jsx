import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Recharge.css';
import {useNavigate} from 'react-router-dom'
const Recharge = () => {

    const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/main/payment');
  };

  return (
    <div className="recharge">
      <div className="back-button">
        <Link to="/main/popular-plans" className="back-link">
          <FontAwesomeIcon icon={faArrowLeft} className="left-arrow" />
          Back
        </Link>
      </div>
      <h2>Recharge</h2>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" value="Prepaid - 10GB" readOnly />
        </div>
        <div className="field">
          <label htmlFor="data">Data:</label>
          <input type="text" id="data" name="data" value="10GB" readOnly />
        </div>
        <div className="field">
          <label htmlFor="price">Price:</label>
          <input type="text" id="price" name="price" value="$30" readOnly />
        </div>
        <div className="field">
          <label htmlFor="email">Email ID:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="field">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="field">
          <label htmlFor="number">Number:</label>
          <input type="tel" id="number" name="number" required />
        </div>
        <button type="submit">Recharge</button>
      </form>
    </div>
  );
}

export default Recharge;

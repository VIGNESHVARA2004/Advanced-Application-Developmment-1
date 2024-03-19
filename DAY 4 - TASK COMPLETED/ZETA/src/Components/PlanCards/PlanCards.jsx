import React from 'react';
import './PlanCards.css'; 
import {useNavigate} from 'react-router-dom'

const PlanCards = ({ title, price, data, speed, validity, note }) => {
  const navigate = useNavigate()
  return (
    <div className="card">
      <div className="card-header">
        <h2>{title}</h2>
        <span onClick={()=>{navigate('/main/recharge')}} className="right-arrow">&#10132;</span>
      </div>
      <div className='card-content-outer'>
        <div className="card-content">
          <div className='card-content-box'>
            <p><strong>Price</strong></p>
            <p>{price}</p>
          </div>
          <div className='card-content-box'>
            <p><strong>Data</strong></p>
            <p>{data}</p>
          </div>
          <div className='card-content-box'>
            <p><strong>Speed</strong></p>
            <p>{speed}</p>
          </div>
          <div className='card-content-box'>
            <p><strong>Validity</strong></p>
            <p>{validity}</p>
          </div>
          <div className='card-content-box'>
            <p><strong>Note</strong></p>
            <p>{note}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanCards;

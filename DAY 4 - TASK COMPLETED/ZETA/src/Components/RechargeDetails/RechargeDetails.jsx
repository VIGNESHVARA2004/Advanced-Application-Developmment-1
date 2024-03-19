import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './RechargeDetails.css';

const RechargeDetails = () => {
    const location = useLocation();
    const recharge = location.state?.plan;
    const { paymentId, date, amountPaid, modeOfPayment, status, planTitle } = recharge;
  return (
    <div className="recharge-details">
      <div className="back-button">
        <Link to="/main/recharge-details" className="back-link">
          <FontAwesomeIcon icon={faArrowLeft} className="left-arrow" />
          Back
        </Link>
      </div>
      <div className="detail">
        <span className="label">Payment ID:</span>
        <span className="value-t">{paymentId}</span>
      </div>
      <div className="detail">
        <span className="label">Date:</span>
        <span className="value-t">{date}</span>
      </div>
      <div className="detail">
        <span className="label">Amount Paid:</span>
        <span className="value-t">{amountPaid}</span>
      </div>
      <div className="detail">
        <span className="label">Mode of Payment:</span>
        <span className="value-t">{modeOfPayment}</span>
      </div>
      <div className="detail">
        <span className="label">Status:</span>
        <span className="value-t">{status}</span>
      </div>
      <div className="detail">
        <span className="label">Plan Title:</span>
        <span className="value-t">{planTitle}</span>
      </div>
    </div>
  );
}

export default RechargeDetails;

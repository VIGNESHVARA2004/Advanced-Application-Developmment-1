import React from 'react';
import './RechargeHistory.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const RechargeHistory = () => {
  const rechargeHistoryData = useSelector(state => state.rechargeHistory.rechargeHistory);
  const navigate = useNavigate(); // Import the useNavigate hook

  const handleEditClick = (item) => {
    navigate('/main/rechargedetails', { state: { plan: item } });
  };

  return (
    <div className="recharge-history">
      <div className="table">
        <div className="row header">
          <div className="cell row-title">Payment ID</div>
          <div className="cell row-title">Date</div>
          <div className="cell row-title">Amount Paid</div>
          <div className="cell row-title">Mode of Payment</div>
          <div className="cell row-title">Status</div>
          <div className="cell row-title">Plan Title</div>
        </div>
        <div className="body">
          {rechargeHistoryData.map((item, index) => (
            <div className="row value" key={index} onClick={() => handleEditClick(item)}>
              <div className="cell">{item.paymentId}</div>
              <div className="cell">{item.date}</div>
              <div className="cell">{item.amountPaid}</div>
              <div className="cell">{item.modeOfPayment}</div>
              <div className="cell">{item.status}</div>
              <div className="cell">{item.planTitle}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RechargeHistory;

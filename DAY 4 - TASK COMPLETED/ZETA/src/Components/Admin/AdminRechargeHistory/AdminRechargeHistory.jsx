import React from 'react';
import './AdminRechargeHistory.css';
import { useSelector } from 'react-redux';
import './AdminRechargeHistory.css';

const AdminRechargeHistory = () => {
  const rechargeHistoryData = useSelector(state => state.rechargeHistory.rechargeHistory);

  return (
    <div className="admin-recharge-history">
      <div className="table">
        <div className="row header">
          <div className="cell row-title">User ID</div>
          <div className="cell row-title">Payment ID</div>
          <div className="cell row-title">Date</div>
          <div className="cell row-title">Amount Paid</div>
          <div className="cell row-title">Mode of Payment</div>
          <div className="cell row-title">Status</div>
          <div className="cell row-title">Plan Title</div>
        </div>
        <div className="body">
          {rechargeHistoryData.map((item, index) => (
            <div className="row value" key={index}>
              <div className="cell">{item.userId}</div>
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

export default AdminRechargeHistory;

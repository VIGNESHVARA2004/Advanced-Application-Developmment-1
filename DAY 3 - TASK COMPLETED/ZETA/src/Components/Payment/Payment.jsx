import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPayment } from '../Redux/rechargeHistorySlice';
import { useNavigate } from 'react-router-dom';
import './Payment.css';

const Payment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [paymentData, setPaymentData] = useState({
    userId: 'USR123', 
    customerId: 'PAY456001',
    paymentId: '',
    date: '24-03-01',
    amountToPay: 50,
    modeOfPayment: '',
    status: 'Success',
    planTitle: 'Sample Plan',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const paymentId = Math.random().toString(36).substring(7);
    const { userId, date, modeOfPayment, status, planTitle } = paymentData;
    
    const formattedPaymentData = {
      userId: userId,
      paymentId: "PAY89012",
      date: date,
      amountPaid: "$50",
      modeOfPayment: modeOfPayment,
      status: status,
      planTitle: planTitle
    };
  
    dispatch(addPayment(formattedPaymentData));
    alert('Payment successful!');
    navigate('/main/popular-plans');
  };

  return (
    <div className="payment">
      <h2>Make Payment</h2>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>User ID:</label>
          <input type="text" value={paymentData.userId} readOnly />
        </div>
        <div className="field">
          <label>Customer ID:</label>
          <input type="text" value={paymentData.customerId} readOnly />
        </div>
        <div className="field">
          <label>Date:</label>
          <input type="date" name="date" value={paymentData.date} onChange={handleChange} required />
        </div>
        <div className="field">
          <label>Amount to Pay:</label>
          <input type="number" name="amountToPay" value={paymentData.amountToPay} readOnly />
        </div>
        <div className="field">
          <label>Mode of Payment:</label>
          <select name="modeOfPayment" value={paymentData.modeOfPayment} onChange={handleChange} required>
            <option value="">Select mode of payment</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="Net Banking">Net Banking</option>
            <option value="UPI">UPI</option>
          </select>
        </div>
        <div className="field">
          <label>GST Charges:</label>
          <input type="number" name="gstCharges" value={0} onChange={handleChange} />
        </div>
        <div className="field">
          <label>Last Payment Charges:</label>
          <input type="number" name="lastPaymentCharges" onChange={handleChange} />
        </div>
        <div className="field">
          <label>Total Amount:</label>
          <input type="text" value={50} readOnly />
        </div>
        <div className="field">
          <label>Number:</label>
          <input type="text" name="number" value={1234567890} onChange={handleChange} required />
        </div>
        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
}

export default Payment;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rechargeHistory: [
    {
        userId : 'USER123',
        paymentId: 'PAY123456',
        date: '2024-03-15',
        amountPaid: '$30',
        modeOfPayment: 'Credit Card',
        status: 'Success',
        planTitle: 'Prepaid - 10GB',
      },
      {
        userId : 'USER456',
        paymentId: 'PAY789012',
        date: '2024-03-12',
        amountPaid: '$25',
        modeOfPayment: 'PayPal',
        status: 'Success',
        planTitle: 'Prepaid - 5GB',
      },
      {
        userId : 'USER123',
        paymentId: 'PAY345678',
        date: '2024-03-10',
        amountPaid: '$40',
        modeOfPayment: 'Debit Card',
        status: 'Failed',
        planTitle: 'Prepaid - 15GB',
      },
      {
        userId : 'USER456',
        paymentId: 'PAY567890',
        date: '2024-03-09',
        amountPaid: '$35',
        modeOfPayment: 'Google Pay',
        status: 'Success',
        planTitle: 'Postpaid - Unlimited',
      },
      {
        userId : 'USER789',
        paymentId: 'PAY901234',
        date: '2024-03-07',
        amountPaid: '$45',
        modeOfPayment: 'Credit Card',
        status: 'Success',
        planTitle: 'Prepaid - 20GB',
      },
      {
        userId : 'USER123',
        paymentId: 'PAY234567',
        date: '2024-03-06',
        amountPaid: '$20',
        modeOfPayment: 'PayPal',
        status: 'Success',
        planTitle: 'Prepaid - 5GB',
      },
      {
        userId : 'USER456',
        paymentId: 'PAY678901',
        date: '2024-03-03',
        amountPaid: '$50',
        modeOfPayment: 'Debit Card',
        status: 'Success',
        planTitle: 'Postpaid - Unlimited',
      },
      {
        userId : 'USER789',
        paymentId: 'PAY890123',
        date: '2024-03-01',
        amountPaid: '$60',
        modeOfPayment: 'Google Pay',
        status: 'Success',
        planTitle: 'Prepaid - 25GB',
      },
      {
        userId : 'USER789',
        paymentId: 'PAY345678',
        date: '2024-02-28',
        amountPaid: '$25',
        modeOfPayment: 'Credit Card',
        status: 'Failed',
        planTitle: 'Prepaid - 5GB',
      },
      {
        userId : 'USER123',
        paymentId: 'PAY901234',
        date: '2024-02-26',
        amountPaid: '$40',
        modeOfPayment: 'PayPal',
        status: 'Success',
        planTitle: 'Prepaid - 15GB',
      },
      {
        userId : 'USER123',
        paymentId: 'PAY567890',
        date: '2024-02-25',
        amountPaid: '$30',
        modeOfPayment: 'Debit Card',
        status: 'Success',
        planTitle: 'Postpaid - Unlimited',
      },
      {
        userId : 'USER456',
        paymentId: 'PAY234567',
        date: '2024-02-22',
        amountPaid: '$55',
        modeOfPayment: 'Google Pay',
        status: 'Success',
        planTitle: 'Prepaid - 30GB',
      },
      {
        userId : 'USER789',
        paymentId: 'PAY678901',
        date: '2024-02-20',
        amountPaid: '$70',
        modeOfPayment: 'Credit Card',
        status: 'Failed',
        planTitle: 'Prepaid - 35GB',
      },
      {
        userId : 'USER123',
        paymentId: 'PAY890123',
        date: '2024-02-18',
        amountPaid: '$45',
        modeOfPayment: 'PayPal',
        status: 'Success',
        planTitle: 'Postpaid - Unlimited',
      },
      {
        userId : 'USER789',
        paymentId: 'PAY345678',
        date: '2024-02-15',
        amountPaid: '$35',
        modeOfPayment: 'Debit Card',
        status: 'Success',
        planTitle: 'Prepaid - 20GB',
      },
      {
        userId : 'USER456',
        paymentId: 'PAY901234',
        date: '2024-02-14',
        amountPaid: '$60',
        modeOfPayment: 'Google Pay',
        status: 'Success',
        planTitle: 'Prepaid - 25GB',
      },
      {
        userId : 'USER123',
        paymentId: 'PAY567890',
        date: '2024-02-12',
        amountPaid: '$70',
        modeOfPayment: 'Credit Card',
        status: 'Success',
        planTitle: 'Prepaid - 35GB',
      },
      {
        userId : 'USER789',
        paymentId: 'PAY234567',
        date: '2024-02-10',
        amountPaid: '$40',
        modeOfPayment: 'PayPal',
        status: 'Success',
        planTitle: 'Postpaid - Unlimited',
      },
      {
        userId : 'USER789',
        paymentId: 'PAY678901',
        date: '2024-02-08',
        amountPaid: '$45',
        modeOfPayment: 'Debit Card',
        status: 'Success',
        planTitle: 'Prepaid - 20GB',
      },
      {
        userId : 'USER456',
        paymentId: 'PAY890123',
        date: '2024-02-05',
        amountPaid: '$55',
        modeOfPayment: 'Google Pay',
        status: 'Failed',
        planTitle: 'Prepaid - 30GB',
      }
  ],
};

const rechargeHistorySlice = createSlice({
  name: 'rechargeHistory',
  initialState,
  reducers: {
    setRechargeHistory(state, action) {
      state.rechargeHistory = action.payload;
    },
    addPayment(state, action) {
      const newPayment = action.payload;
      state.rechargeHistory.push(newPayment);
    },
  },
});

export const { setRechargeHistory, addPayment} = rechargeHistorySlice.actions;

export default rechargeHistorySlice.reducer;


import { combineReducers } from '@reduxjs/toolkit';
import plansReducer from './planSlice'
import addonsReducer from './addonsSlice';
import rechargeHistoryReducer from './rechargeHistorySlice';
import userReducer from './userSlice';

const rootReducer = combineReducers({
  plans: plansReducer,
  addons : addonsReducer,
  rechargeHistory: rechargeHistoryReducer,
  user: userReducer,
});

export default rootReducer;

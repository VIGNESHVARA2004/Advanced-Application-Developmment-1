import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  plans : [
    {
      id: 1,
      title: 'Prepaid',
      price: '$30',
      data: '10GB',
      speed: '5G',
      validity: '30 days',
      note: 'Unlimited calls and texts included'
    },
    {
      id: 2,
      title: 'Prepaid',
      price: '$20',
      data: '5GB',
      speed: '4G',
      validity: '30 days',
      note: 'Unlimited calls and texts included'
    },
    {
      id: 3,
      title: 'Prepaid',
      price: '$25',
      data: '10GB',
      speed: '5G',
      validity: '30 days',
      note: 'Unlimited calls and texts included'
    },
    {
      id: 4,
      title: 'Prepaid',
      price: '$30',
      data: '15GB',
      speed: '5G',
      validity: '30 days',
      note: 'Unlimited calls and texts included'
    },
    {
      id: 5,
      title: 'Prepaid',
      price: '$35',
      data: '20GB',
      speed: '5G',
      validity: '30 days',
      note: 'Unlimited calls and texts included'
    },
    {
      id: 6,
      title: 'Prepaid',
      price: '$40',
      data: '25GB',
      speed: '5G',
      validity: '30 days',
      note: 'Unlimited calls and texts included'
    },
    {
      id: 7,
      title: 'Postpaid',
      price: '$50',
      data: 'Unlimited',
      speed: '5G',
      validity: 'Monthly billing cycle',
      note: 'Additional charges may apply for international calls'
    },
    {
      id: 8,
      title: 'Postpaid',
      price: '$50',
      data: 'Unlimited',
      speed: '5G',
      validity: 'Monthly billing cycle',
      note: 'Additional charges may apply for international calls'
    },
    {
      id: 9,
      title: 'Postpaid',
      price: '$60',
      data: 'Unlimited',
      speed: '5G',
      validity: 'Monthly billing cycle',
      note: 'Additional charges may apply for international calls'
    },
    {
      id: 10,
      title: 'Postpaid',
      price: '$70',
      data: 'Unlimited',
      speed: '5G',
      validity: 'Monthly billing cycle',
      note: 'Additional charges may apply for international calls'
    },
    {
      id: 11,
      title: 'Postpaid',
      price: '$80',
      data: 'Unlimited',
      speed: '5G',
      validity: 'Monthly billing cycle',
      note: 'Additional charges may apply for international calls'
    },
    {
      id: 12,
      title: 'Postpaid',
      price: '$90',
      data: 'Unlimited',
      speed: '5G',
      validity: 'Monthly billing cycle',
      note: 'Additional charges may apply for international calls'
    }
    ]
  };
  
const plansSlice = createSlice({
name: 'plans',
initialState,
reducers: {
    setPlans(state, action) {
    state.plans = action.payload;
    },
    addPlan(state, action) {
      const newAddon = action.payload;
      newAddon.id = state.addons.length + 1;
      state.addons.push(newAddon);
    },
    updatePlan(state, action) {
      const { id, updatedPlan } = action.payload;
    
      const existingPlanIndex = state.plans.findIndex(plan => plan.id === id);
      if (existingPlanIndex !== -1) {
        state.plans[existingPlanIndex] = action.payload;
      }
    },
    deletePlan(state, action) {
      const idToDelete = action.payload;
      state.plans = state.plans.filter(plan => plan.id !== idToDelete);
    }
}
});

export const { setPlans, addPlan, updatePlan , deletePlan} = plansSlice.actions;

export default plansSlice.reducer;
  
  
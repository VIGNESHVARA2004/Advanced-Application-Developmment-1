import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  addons: [
    {
        id: 1,
        title: 'Social Media Pack',
        price: '$10',
        data: '5GB',
        speed: '5G',
        validity: '30 days',
        note: 'Additional data package for social media usage'
      },
      {
        id: 2,
        title: 'Video Streaming Bundle',
        price: '$15',
        data: '10GB',
        speed: '5G',
        validity: '30 days',
        note: 'Additional data package for video streaming services'
      },
      {
        id: 3,
        title: 'Gaming Booster Pack',
        price: '$20',
        data: '15GB',
        speed: '5G',
        validity: '30 days',
        note: 'Additional data package optimized for gaming'
      },
      {
        id: 4,
        title: 'Business Essentials Plan',
        price: '$25',
        data: '20GB',
        speed: '5G',
        validity: '30 days',
        note: 'Additional data package with business-focused features'
      },
      {
        id: 5,
        title: "Music Lover's Bundle",
        price: '$30',
        data: '25GB',
        speed: '5G',
        validity: '30 days',
        note: 'Additional data package for music streaming services'
      }
  ]
};

const addonsSlice = createSlice({
  name: 'addons',
  initialState,
  reducers: {
    addAddon(state, action) {
      const newAddon = action.payload;
      newAddon.id = state.addons.length + 1;
      state.addons.push(newAddon);
    },
    updateAddon(state, action) {
      const { id, updatedPlan } = action.payload;
      const existingPlanIndex = state.addons.findIndex(plan => plan.id === id);
      if (existingPlanIndex !== -1) {
        state.addons[existingPlanIndex] = action.payload;
      }
    },
    deleteAddon(state, action) {
      const id = action.payload;
      state.addons = state.addons.filter(addon => addon.id !== id);
    }
  }
});

export const { addAddon, updateAddon, deleteAddon } = addonsSlice.actions;

export default addonsSlice.reducer;

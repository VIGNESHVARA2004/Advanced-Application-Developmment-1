import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [{
    id: 1,
    type: 'Admin',
    email: 'admin@example.com',
    username: 'admin',
    mobileNumber: '1234567890',
    password: 'admin123',
    confirmPassword: 'admin123'
  },{
    id: 2,
    type: 'User',
    email: 'user@example.com',
    username: 'user',
    mobileNumber: '9876543210',
    password: 'user123',
    confirmPassword: 'user123'
  }],
  currentUserType: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      addUser(state, action) {
        const newUser = { ...action.payload, id: state.users.length + 1 }; // Generate unique ID
        state.users.push(newUser);
      },
      login(state, action) {
        const { username, password } = action.payload;
        const user = state.users.find(user => user.username === username && user.password === password);
        if (user) {
          state.currentUserType = user.type;
          localStorage.setItem('userType', user.type);
        }
      }
    }
  });

export const { addUser, login } = userSlice.actions;
export default userSlice.reducer;

import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
export const authAdapter = createEntityAdapter();

export const authSelectors = authAdapter.getSelectors((state) => state.auth)

export const authUserSlice = createSlice({
  name: 'auth',
  initialState: authAdapter.getInitialState(),
  reducers: {
    addauth: authAdapter.addOne,
    deleteauthUser: authAdapter.removeAll
  },
})


export const { addauth, deleteauthUser} = authUserSlice.actions


export default authUserSlice.reducer
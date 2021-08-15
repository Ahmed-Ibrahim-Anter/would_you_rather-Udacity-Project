import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'

export const userAdapter = createEntityAdapter(
  {selectId: (users) => (users.id),});

export const usertSelectors = userAdapter.getSelectors((state) => state.user)

export const userSlice = createSlice({
  name: 'user',
  initialState: userAdapter.getInitialState(),
  reducers: {
    setuser: userAdapter.setAll,
    updateUser(state, action) {
      const { userId, id, selected } = action.payload
      const answer = state.entities[userId].answers;
      Object.assign(answer, { [id]: selected });
    },
    addq(state, action) {
      const { userId, id } = action.payload
      state.entities[userId].questions.push(id);
    }
  },
})


export const { setuser, updateUser, addq } = userSlice.actions

export default userSlice.reducer
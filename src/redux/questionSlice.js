import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'

export const questionAdapter = createEntityAdapter(
  {
    selectId: (questions) => (questions.id),
    sortComparer: (a, b) => b.timestamp.toString().localeCompare(a.timestamp.toString()),
  });
export const questionSelectors = questionAdapter.getSelectors((state) => state.question)



export const questionSlice = createSlice({
  name: 'question',
  initialState: questionAdapter.getInitialState(),
  reducers: {
    add: questionAdapter.addOne,
    setQuestion: questionAdapter.setAll,
    updateQ(state, action) {
      const{id,selected,userId}=action.payload
    state.entities[id][selected].votes.push(userId);
    },
    
  },
})


export const { setQuestion, add, updateQ } = questionSlice.actions

export default questionSlice.reducer
import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
  name: 'taskSlice',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const taskText = action.payload.trim();
      if (taskText !== '') {
        state.push(taskText);
      }
    }
  }
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
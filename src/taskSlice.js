import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: { items: [] },
  reducers: {
    addTask: (state, action) => {
      const text = action.payload.trim();
      
      if (text) {
        state.items.push({
          id: Date.now(),
          text: text
        });
      }
    },
    removeTask: (state, action) => {
      state.items = state.items.filter(task => task.id !== action.payload);
    }
  }
});

export const { addTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;
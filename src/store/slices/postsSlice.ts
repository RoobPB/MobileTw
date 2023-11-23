import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Post {
  id: string;
  text: string;
  createdBy: string;
  createdDate: string;
}

const initialState: Post[] = [];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.push(action.payload);
    },
    
  },
});

export const { addPost } = postsSlice.actions;
export default postsSlice.reducer;

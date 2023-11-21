// postsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Definiera en typ för posten
interface Post {
  id: string;
  text: string;
  createdBy: string;
  createdDate: string;
}

// Initial state för posts
const initialState: Post[] = [];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.push(action.payload);
    },
    // Du kan lägga till fler reducers här för att uppdatera och ta bort posts
  },
});

export const { addPost } = postsSlice.actions;
export default postsSlice.reducer;

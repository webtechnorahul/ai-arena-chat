import { configureStore } from '@reduxjs/toolkit';
import aiReducer from '../features/chat-ai/slice/aiSlice';

export const store = configureStore({
  reducer: {
    ai: aiReducer,
  },
});
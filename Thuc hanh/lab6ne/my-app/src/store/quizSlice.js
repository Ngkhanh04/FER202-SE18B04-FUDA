import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [],
  userAnswers: {},
  score: null,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setQuestions(state, action) {
      state.questions = action.payload;
    },
    selectAnswer(state, action) {
      const { questionId, answer } = action.payload;
      state.userAnswers[questionId] = answer;
    },
    calculateScore(state) {
      let score = 0;
      state.questions.forEach((question) => {
        if (state.userAnswers[question.id] === question.correctAnswer) {
          score += 1;
        }
      });
      state.score = score;
    },
  },
});

export const { setQuestions, selectAnswer, calculateScore } = quizSlice.actions;
export default quizSlice.reducer;

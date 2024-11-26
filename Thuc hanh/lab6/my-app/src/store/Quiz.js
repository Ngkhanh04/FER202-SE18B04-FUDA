import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAnswer, calculateScore } from './quizSlice';
import { useEffect } from 'react';
import { setQuestions } from './quizSlice';

const Quiz = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.quiz.questions);
  const userAnswers = useSelector((state) => state.quiz.userAnswers);
  const score = useSelector((state) => state.quiz.score);

  const handleAnswerClick = (questionId, answer) => {
    dispatch(selectAnswer({ questionId, answer }));
  };

  const handleCheckAnswers = () => {
    dispatch(calculateScore());
  };

  return (
    <div>
      <h2>Quiz</h2>
      {questions.map((question) => (
        <div key={question.id}>
          <h3>{question.text}</h3>
          {question.options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswerClick(question.id, option)}
              style={{
                backgroundColor: userAnswers[question.id] === option ? 'lightblue' : 'white',
              }}
            >
              {option}
            </button>
          ))}
        </div>
      ))}
      <button onClick={handleCheckAnswers}>Check Answers</button>
      {score !== null && <p>Your Score: {score}/{questions.length}</p>}
    </div>
  );
};

useEffect(() => {
  const sampleQuestions = [
    { id: 1, text: 'What is the capital of France?', options: ['Paris', 'London', 'Berlin'], correctAnswer: 'Paris' },
    { id: 2, text: 'What is 2 + 2?', options: ['3', '4', '5'], correctAnswer: '4' },
  ];
  dispatch(setQuestions(sampleQuestions));
}, [dispatch]);

export default Quiz;

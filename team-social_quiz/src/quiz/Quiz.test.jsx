import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Quiz from './Quiz';
import quizData from './quizData';

test('renders questions on multiple pages with pagination', () => {
  render(<Quiz />);

  // Helper function to assert that questions for the current page are displayed.
  const assertCurrentPageQuestions = (page) => {
    const currentQuestions = quizData.slice(page * 5, (page + 1) * 5);

    currentQuestions.forEach((question, index) => {
      expect(screen.getByText(question.question)).toBeInTheDocument();
    });
  };

  // Assert questions on the initial page (page 0).
  assertCurrentPageQuestions(0);

  // Click the "Next" button.
  const nextButton = screen.getByText('Next');
  fireEvent.click(nextButton);

  // Assert questions on the next page (page 1).
  assertCurrentPageQuestions(1);
});

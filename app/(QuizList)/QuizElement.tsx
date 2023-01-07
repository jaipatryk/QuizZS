import React from "react";

interface QuizListProps {
  quiz: QuizList;
}

interface QuizList {
  id: number;
  name: string;
  description: string;
  creator: string;
  questions: {
    id: number;
    question: string;
    answers: {
      id: number;
      answer: string;
      isCorrect: boolean;
    }[];
  }[];
}

function QuizElement({ quiz }: QuizListProps) {
  return (
    <div className='quizCard'>
      <div>
        <p className='font-semibold text-lg'>{quiz.name}</p>
        <p className='text-sm text-gray-500'>{quiz.questions.length} pojęć</p>
      </div>
      <div>
        <p>{quiz.creator}</p>
      </div>
    </div>
  );
}

export default QuizElement;

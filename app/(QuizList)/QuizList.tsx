import React from "react";
import QuizElement from "./QuizElement";

const Quizzes: QuizList[] = [
  {
    id: 1,
    name: "Quiz 1",
    description: "Opis quizu 1",
    creator: "Patryk Ilkiw",
    questions: [
      {
        id: 1,
        question: "Pytanie 1",
        answers: [
          {
            id: 1,
            answer: "Odpowiedź 1",
            isCorrect: true,
          },
          {
            id: 2,
            answer: "Odpowiedź 2",
            isCorrect: false,
          },
          {
            id: 3,
            answer: "Odpowiedź 3",
            isCorrect: false,
          },
        ],
      },
      {
        id: 2,
        question: "Pytanie 2",
        answers: [
          {
            id: 1,
            answer: "Odpowiedź 1",
            isCorrect: false,
          },
          {
            id: 2,
            answer: "Odpowiedź 2",
            isCorrect: true,
          },
          {
            id: 3,
            answer: "Odpowiedź 3",
            isCorrect: false,
          },
        ],
      },
      {
        id: 3,
        question: "Pytanie 2",
        answers: [
          {
            id: 1,
            answer: "Odpowiedź 1",
            isCorrect: false,
          },
          {
            id: 2,
            answer: "Odpowiedź 2",
            isCorrect: true,
          },
          {
            id: 3,
            answer: "Odpowiedź 3",
            isCorrect: false,
          },
        ],
      },
      {
        id: 4,
        question: "Pytanie 2",
        answers: [
          {
            id: 1,
            answer: "Odpowiedź 1",
            isCorrect: false,
          },
          {
            id: 2,
            answer: "Odpowiedź 2",
            isCorrect: true,
          },
          {
            id: 3,
            answer: "Odpowiedź 3",
            isCorrect: false,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Quiz 1",
    description: "Opis quizu 1",
    creator: "Patryk Ilkiw",
    questions: [
      {
        id: 1,
        question: "Pytanie 1",
        answers: [
          {
            id: 1,
            answer: "Odpowiedź 1",
            isCorrect: true,
          },
          {
            id: 2,
            answer: "Odpowiedź 2",
            isCorrect: false,
          },
          {
            id: 3,
            answer: "Odpowiedź 3",
            isCorrect: false,
          },
        ],
      },
      {
        id: 2,
        question: "Pytanie 2",
        answers: [
          {
            id: 1,
            answer: "Odpowiedź 1",
            isCorrect: false,
          },
          {
            id: 2,
            answer: "Odpowiedź 2",
            isCorrect: true,
          },
          {
            id: 3,
            answer: "Odpowiedź 3",
            isCorrect: false,
          },
        ],
      },
      {
        id: 3,
        question: "Pytanie 2",
        answers: [
          {
            id: 1,
            answer: "Odpowiedź 1",
            isCorrect: false,
          },
          {
            id: 2,
            answer: "Odpowiedź 2",
            isCorrect: true,
          },
          {
            id: 3,
            answer: "Odpowiedź 3",
            isCorrect: false,
          },
        ],
      },
      {
        id: 4,
        question: "Pytanie 2",
        answers: [
          {
            id: 1,
            answer: "Odpowiedź 1",
            isCorrect: false,
          },
          {
            id: 2,
            answer: "Odpowiedź 2",
            isCorrect: true,
          },
          {
            id: 3,
            answer: "Odpowiedź 3",
            isCorrect: false,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Quiz 1",
    description: "Opis quizu 1",
    creator: "Patryk Ilkiw",
    questions: [
      {
        id: 1,
        question: "Pytanie 1",
        answers: [
          {
            id: 1,
            answer: "Odpowiedź 1",
            isCorrect: true,
          },
          {
            id: 2,
            answer: "Odpowiedź 2",
            isCorrect: false,
          },
          {
            id: 3,
            answer: "Odpowiedź 3",
            isCorrect: false,
          },
        ],
      },
      {
        id: 2,
        question: "Pytanie 2",
        answers: [
          {
            id: 1,
            answer: "Odpowiedź 1",
            isCorrect: false,
          },
          {
            id: 2,
            answer: "Odpowiedź 2",
            isCorrect: true,
          },
          {
            id: 3,
            answer: "Odpowiedź 3",
            isCorrect: false,
          },
        ],
      },
      {
        id: 3,
        question: "Pytanie 2",
        answers: [
          {
            id: 1,
            answer: "Odpowiedź 1",
            isCorrect: false,
          },
          {
            id: 2,
            answer: "Odpowiedź 2",
            isCorrect: true,
          },
          {
            id: 3,
            answer: "Odpowiedź 3",
            isCorrect: false,
          },
        ],
      },
      {
        id: 4,
        question: "Pytanie 2",
        answers: [
          {
            id: 1,
            answer: "Odpowiedź 1",
            isCorrect: false,
          },
          {
            id: 2,
            answer: "Odpowiedź 2",
            isCorrect: true,
          },
          {
            id: 3,
            answer: "Odpowiedź 3",
            isCorrect: false,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Quiz 1",
    description: "Opis quizu 1",
    creator: "Patryk Ilkiw",
    questions: [
      {
        id: 1,
        question: "Pytanie 1",
        answers: [
          {
            id: 1,
            answer: "Odpowiedź 1",
            isCorrect: true,
          },
          {
            id: 2,
            answer: "Odpowiedź 2",
            isCorrect: false,
          },
          {
            id: 3,
            answer: "Odpowiedź 3",
            isCorrect: false,
          },
        ],
      },
      {
        id: 2,
        question: "Pytanie 2",
        answers: [
          {
            id: 1,
            answer: "Odpowiedź 1",
            isCorrect: false,
          },
          {
            id: 2,
            answer: "Odpowiedź 2",
            isCorrect: true,
          },
          {
            id: 3,
            answer: "Odpowiedź 3",
            isCorrect: false,
          },
        ],
      },
      {
        id: 3,
        question: "Pytanie 2",
        answers: [
          {
            id: 1,
            answer: "Odpowiedź 1",
            isCorrect: false,
          },
          {
            id: 2,
            answer: "Odpowiedź 2",
            isCorrect: true,
          },
          {
            id: 3,
            answer: "Odpowiedź 3",
            isCorrect: false,
          },
        ],
      },
      {
        id: 4,
        question: "Pytanie 2",
        answers: [
          {
            id: 1,
            answer: "Odpowiedź 1",
            isCorrect: false,
          },
          {
            id: 2,
            answer: "Odpowiedź 2",
            isCorrect: true,
          },
          {
            id: 3,
            answer: "Odpowiedź 3",
            isCorrect: false,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Quiz 1",
    description: "Opis quizu 1",
    creator: "Patryk Ilkiw",
    questions: [
      {
        id: 1,
        question: "Pytanie 1",
        answers: [
          {
            id: 1,
            answer: "Odpowiedź 1",
            isCorrect: true,
          },
          {
            id: 2,
            answer: "Odpowiedź 2",
            isCorrect: false,
          },
          {
            id: 3,
            answer: "Odpowiedź 3",
            isCorrect: false,
          },
        ],
      },
      {
        id: 2,
        question: "Pytanie 2",
        answers: [
          {
            id: 1,
            answer: "Odpowiedź 1",
            isCorrect: false,
          },
          {
            id: 2,
            answer: "Odpowiedź 2",
            isCorrect: true,
          },
          {
            id: 3,
            answer: "Odpowiedź 3",
            isCorrect: false,
          },
        ],
      },
      {
        id: 3,
        question: "Pytanie 2",
        answers: [
          {
            id: 1,
            answer: "Odpowiedź 1",
            isCorrect: false,
          },
          {
            id: 2,
            answer: "Odpowiedź 2",
            isCorrect: true,
          },
          {
            id: 3,
            answer: "Odpowiedź 3",
            isCorrect: false,
          },
        ],
      },
      {
        id: 4,
        question: "Pytanie 2",
        answers: [
          {
            id: 1,
            answer: "Odpowiedź 1",
            isCorrect: false,
          },
          {
            id: 2,
            answer: "Odpowiedź 2",
            isCorrect: true,
          },
          {
            id: 3,
            answer: "Odpowiedź 3",
            isCorrect: false,
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Quiz 1",
    description: "Opis quizu 1",
    creator: "Patryk Ilkiw",
    questions: [
      {
        id: 1,
        question: "Pytanie 1",
        answers: [
          {
            id: 1,
            answer: "Odpowiedź 1",
            isCorrect: true,
          },
          {
            id: 2,
            answer: "Odpowiedź 2",
            isCorrect: false,
          },
          {
            id: 3,
            answer: "Odpowiedź 3",
            isCorrect: false,
          },
        ],
      },
      {
        id: 2,
        question: "Pytanie 2",
        answers: [
          {
            id: 1,
            answer: "Odpowiedź 1",
            isCorrect: false,
          },
          {
            id: 2,
            answer: "Odpowiedź 2",
            isCorrect: true,
          },
          {
            id: 3,
            answer: "Odpowiedź 3",
            isCorrect: false,
          },
        ],
      },
      {
        id: 3,
        question: "Pytanie 2",
        answers: [
          {
            id: 1,
            answer: "Odpowiedź 1",
            isCorrect: false,
          },
          {
            id: 2,
            answer: "Odpowiedź 2",
            isCorrect: true,
          },
          {
            id: 3,
            answer: "Odpowiedź 3",
            isCorrect: false,
          },
        ],
      },
      {
        id: 4,
        question: "Pytanie 2",
        answers: [
          {
            id: 1,
            answer: "Odpowiedź 1",
            isCorrect: false,
          },
          {
            id: 2,
            answer: "Odpowiedź 2",
            isCorrect: true,
          },
          {
            id: 3,
            answer: "Odpowiedź 3",
            isCorrect: false,
          },
        ],
      },
    ],
  },
];

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

function QuizList() {
  return (
    <div className='xl:px-60 flex items-center'>
      <div className='w-full space-y-4'>
        <h2 className='font-bold text-2xl'>Lista quizów</h2>
        <div className='grid grid-cols-3 gap-2'>
          {Quizzes.map((quiz) => (
            <QuizElement quiz={quiz} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuizList;

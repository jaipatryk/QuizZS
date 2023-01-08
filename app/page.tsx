import React from "react";
import QuizList from "./(QuizList)/QuizList";

async function HomePage() {
  return (
    <main className={`bg-primary text-white p-10`}>
      <QuizList />
    </main>
  );
}

export default HomePage;

import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {

  const [questions, setQuestions] = useState(data);

  return (
  <main>
    <div className='container'>
    {questions.map((question) => {
      return (
        <SingleQuestion key={question.id} {...question}/>
      )
    })}
    </div>
  </main>
  )
}

export default App;

import { useState, useEffect } from 'react'
import data from './data';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
   let parsedCount = parseInt(count);
   if (count > 9) {
    count = 9;
   } else if (count < 0) {
    count = 1;
   }
   setText(data.slice(0, parsedCount));
  };

  useEffect(() => {
    console.log(text);
  }, [text]);

  return (
    <section className='section-center'>
      <h3>random text generator</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input type='number' name='amount' id='amount' value={count} onChange={(e) => setCount(e.target.value)}></input>
        <button type='submit' className='btn'>generate</button>
      </form>
      <form className='lorem-text'>
        {text.map((item, index) => {
          return (
            <p key={index}>{item}</p>
          )
        })}
      </form>
    </section>
  )
};

export default App

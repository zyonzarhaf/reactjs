
import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {
  const [users, setUsers] = useState(data);
  const [value, setValue] = useState(0);

 const checkNumber = (num) => {
    if (num < 0) {
      return users.length - 1;
    } else if (num > users.length - 1) {
      return 0;
    } else {
      return num
    }
  };
  
  const prevUser = () => {
    setValue(() => {
      return checkNumber(value - 1)
    })
  };
  
  const nextUser = () => {
    setValue(() => {
      return checkNumber(value + 1)
    })
  };
  
  useEffect(() => {
    let slider =  setInterval(() => {
        setValue(() => {
          return checkNumber(value + 1)
        })
      }, 3000)
    return () => clearInterval(slider);
  }, []);
  
  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className='section-center'>
        {users.map((user, index) => {
          const { id, image, name, title, quote } = user;

          let position = 'nextSlide'
          if (index === value) {
            position = 'activeSlide' 
          } else if (index === value - 1 || value === 0 && index === users.length - 1) {
            position = 'lastSlide'
          }

          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon'/>
            </article>
          );
        })}
        <button onClick={prevUser} className='prev'><FiChevronLeft/></button>
        <button onClick={nextUser} className='next'><FiChevronRight/></button>
      </div>
    </section>
  );
};

export default App;

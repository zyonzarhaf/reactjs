import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


const Question = (props) => {
  const {title, info} = props;
  
  const [isInfo, setIsInfo] = useState(false);

  const handleClick = () => {
    setIsInfo(!isInfo);
  }

  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={handleClick}>{isInfo? (<AiOutlineMinus/>):(<AiOutlinePlus/>)}</button>
      </header>
      {isInfo && (<p>{info}</p>)
      }
    </article>
  );
};

export default Question;

import { useState, useEffect } from 'react';
import {FaCopy} from 'react-icons/fa';
import Values from 'values.js';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('lightblue').all(10));
  const [isCopy, setIsCopy] = useState(false);
  const [mousePos, setMousePos] = useState({});
  
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(error);
      console.log(error);
    };
  };

  const copyToClipBoard = (hex, e) => {
    navigator.clipboard.writeText(hex);
    setIsCopy(hex);
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
      const timeout = setTimeout(() => {
        setIsCopy(false);
      }, 500);
      return () => clearTimeout(timeout);
  }, [isCopy]);

  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input type='text' value={color} onChange={(e) => setColor(e.target.value)} className={error? 'error' : undefined}></input>
          <button className='btn' type='submit'>submit</button>
        </form>
        <p className={isCopy? 'show-msg' : 'hide-msg' } style={{top: `${mousePos.y}px`, left: `${mousePos.x+20}px`}}>copied to clipboard</p>
      </section>
      <section className='colors'>
      {list.map((item, index) => {
        const {weight, rgb, hex} = item;
        const bcgColor = rgb.join(',');
        const brightness = item.getBrightness();
        const style = {
          backgroundColor: `rgb(${bcgColor})`, 
          color: brightness > 50 ? 'black' : 'white',
        };
        return (
          <div key={index} className='color' style={style}>
            <p className='percent-value'>{weight}%</p>
            <p className='color-value'>{hex}</p>
            <button className='copy-btn' onClick={(e) => copyToClipBoard(hex, e)}><FaCopy style={style}/></button>
          </div>
        )
      })}
      </section>
    </>
  )
};

export default App;
// https://www.youtube.com/watch?v=ly3m6mv5qvg
// 3 hr 09' 00 ''
import React, { useState } from 'react';

import SingleColor from './SingleColor';
import Values from 'values.js';



function App() {
  const [ color, setColor ] = useState('');
  const [ error, setError ] = useState(false);
  const [ list, setList ] = useState(new Values('#f15025').all(10));


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submiting form...', color);

    try {
      let colors = new Values(color).all(10);
      console.log(colors);

      setList(colors);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };


  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit} >
          <input 
            type="text" 
            placeholder="#f15025"
            value={color} 
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? 'error' : null}`}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {
          list.map((color, index) => {
            //console.log(color);
            return (
              <SingleColor 
                key={index} 
                {...color} 
                index={index} 
                hexColor={color.hex}
              />
            );
          })
        }
      </section>
      
    </>
  );
}


export default App


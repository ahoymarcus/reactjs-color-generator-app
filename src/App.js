// https://www.youtube.com/watch?v=ly3m6mv5qvg
// 3 hr 09' 00 ''
import React, { useState } from 'react';

import SingleColor from './SingleColor';
import Values from 'values.js';



function App() {
  const [ color, setColor ] = useState('');
  const [ error, setError ] = useState(false);
  const [ list, setList ] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submiting form...', color);

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
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        <h4>list goes here</h4>
      </section>
      
    </>
  );
}


export default App


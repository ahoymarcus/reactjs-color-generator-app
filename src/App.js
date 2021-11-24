// https://www.youtube.com/watch?v=ly3m6mv5qvg
// 3 hr 09' 00 ''
import React, { useState } from 'react';

import SingleColor from './SingleColor';
import Values from 'values.js';



function App() {
  const [ color, setColor ] = useState();
  const [ error, setError ] = useState(false);
  const [ list, setList ] = useState([]);


  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        
        <section className="colors">
          <h4>list goes here</h4>
        </section>
      </section>
    </>
  );
}


export default App


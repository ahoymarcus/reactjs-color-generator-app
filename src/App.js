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
    //console.log('submiting form...', color);

    try {
      let colors = new Values(color).all(10);
      //console.log(colors);

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
      <section className="aside">
        <h3>Chose your favorite colors and hues!!!</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisl est, fringilla vel congue ut, ultricies in lacus. Sed porta gravida bibendum. Praesent ac ante maximus neque gravida suscipit sed non neque. Nam sollicitudin dolor quis eros vestibulum, eget porttitor lorem finibus. Maecenas aliquam nisl nisl, vel imperdiet eros tincidunt ac. Cras placerat imperdiet enim et finibus. Fusce tristique ipsum in lacus imperdiet, et posuere magna finibus. Fusce dignissim magna justo, ullamcorper volutpat quam fermentum venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sodales commodo magna, venenatis fermentum odio malesuada in. Aliquam ultrices, nunc sed dictum gravida, est urna ornare tortor, at fringilla magna ligula tincidunt nibh. Etiam purus ipsum, lobortis et justo nec, rutrum aliquet tellus. Praesent nunc ipsum, pharetra ut lacus eget, porttitor dignissim lorem. Integer ut dictum purus.</p>

        <p>Phasellus et ullamcorper risus, efficitur suscipit mauris. Aenean efficitur sapien convallis neque elementum mattis. Fusce vulputate aliquet massa vel blandit. Praesent vel hendrerit magna. Sed in risus diam. Sed vitae orci ac lorem malesuada finibus. Nunc aliquet rhoncus ligula, in cursus tellus bibendum ornare. Aliquam nec convallis turpis, non faucibus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis blandit sem, quis rhoncus est rutrum a. Duis elit ipsum, ultricies sit amet justo non, ullamcorper convallis nisl.</p>

        <p>Quisque tempor sodales urna. Aenean vitae arcu et est aliquet egestas. Quisque tincidunt nec ex nec faucibus. Curabitur vitae sem in tellus aliquet consequat. Vestibulum sed fringilla felis, sit amet feugiat sem. Nullam ligula leo, porttitor bibendum varius ac, egestas ut risus. Aliquam imperdiet erat sed neque vehicula tincidunt. Nunc id justo nec orci aliquam sollicitudin sit amet eget tortor.</p>

      </section>
    </>
  );
}


export default App


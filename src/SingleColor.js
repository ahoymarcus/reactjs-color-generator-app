import React, { useState, useEffect } from 'react';

import rgbToHex from './utils'


const SingleColor = ({ rgb, weight, hexColor, index }) => {
  const [ alert, setAlert ] = useState(false);
  

  // #f15025
  // a variável rgb é um array
  const bcg = rgb.join(',');
  console.log(bcg);

  const hex = rgbToHex(...rgb);


  return (
    <article className={`color`} style={{backgroundColor:`rgb(${bcg})` }}>
      <p className="percent-value">
        {weight}
      </p>
      <p className="color-value">{hex}</p>
    </article>
  );
}


export default SingleColor


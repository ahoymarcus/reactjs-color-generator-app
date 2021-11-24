import React, { useState, useEffect } from 'react';

import rgbToHex from './utils'


const SingleColor = ({ rgb, weight, hexColor, index }) => {
  const [ alert, setAlert ] = useState(false);


  // a variável rgb é um array
  const bcg = rgb.join(',');
  console.log(bcg);
  
  // #f15025
  // 1. Receber proprieddade Hex como props
  console.log(hexColor);
  // 2. Usar uma função utilitária para converter o valor RGB para Hex
  const hex = rgbToHex(...rgb);


  return (
    <article className={`color`} style={{backgroundColor:`rgb(${bcg})` }}>
      <p className="percent-value">
        {weight}
      </p>
      <p className="color-value">{hexColor}</p>
    </article>
  );
}


export default SingleColor


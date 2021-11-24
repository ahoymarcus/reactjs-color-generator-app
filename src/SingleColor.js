import React, { useState, useEffect } from 'react';

import rgbToHex from './utils'


const SingleColor = ({ rgb, weight, type, hexColor, index }) => {
  const [ alert, setAlert ] = useState(false);


  // a variável rgb é um array
  const bcg = rgb.join(',');
  console.log(bcg);
  
  // #f15025
  // 1. Receber proprieddade Hex como props
  console.log(hexColor);
  // 2. Usar uma função utilitária para converter o valor RGB para Hex
  const hex = rgbToHex(...rgb);

  
  //console.log(weight);
  // Outra forma de mudar a classe CSS
  // ${index > 10 && 'color-light'}

  const hexValue = `#${hexColor}`;

  return (
    <article className={`color ${type === 'shade' ? 'color-light' : 'color-value' }`} style={{backgroundColor:`rgb(${bcg})` }}>
      <p className="percent-value">
        {weight}
      </p>
      <p className="color-value">{hexValue}</p>
    </article>
  );
}


export default SingleColor


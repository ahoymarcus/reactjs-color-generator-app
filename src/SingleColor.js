import React, { useState, useEffect } from 'react';

import rgbToHex from './utils'


const SingleColor = ({ rgb, weight, type, hexColor, index }) => {
  const [ alert, setAlert ] = useState(false);


  // a variável rgb é um array
  const bcg = rgb.join(',');
  console.log(bcg);
  
  // #f15025
  // 1. Receber proprieddade Hex como props
  //console.log(hexColor);
  // 2. Usar uma função utilitária para converter o valor RGB para Hex
  const hex = rgbToHex(...rgb);

  
  //console.log(weight);
  // Outra forma de mudar a classe CSS
  // ${index > 10 && 'color-light'}

  const hexValue = `#${hexColor}`;

  const handleClick = (e) => {
    console.log(hexValue);

    setAlert(true);
    navigator.clipboard.writeText(hexValue);
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [alert]);


  return (
    <article 
      className={`color ${type === 'shade' ? 'color-light' : 'color-value' }`} 
      style={{backgroundColor:`rgb(${bcg})` }}
      onClick={handleClick}
    >
      <p className="percent-value">
        {weight}
      </p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
}


export default SingleColor


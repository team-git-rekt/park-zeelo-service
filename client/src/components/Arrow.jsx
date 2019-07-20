import React from 'react';
import style from '../style.css'

const Arrow = ({ direction, clickFunction, glyph, className }) => {
  return (
    <div className={`${style[direction]} ${style[className]}`} onClick={clickFunction}>
      {glyph}
    </div>
  )
}

export default Arrow
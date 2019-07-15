import React from 'react';

const Arrow = ({ direction, clickFunction, glyph, className}) => {
  return (
    <div className={`slide-arrow ${direction} ${className}`} onClick={clickFunction}>
      {glyph}
    </div>
  )
}

export default Arrow
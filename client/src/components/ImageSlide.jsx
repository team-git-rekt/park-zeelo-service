import React from 'react'
import style from '../style.css'

const ImageSlide = ({ url }) => {
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
  };

  return (
    <div className={style["image-slide"]} style={styles}>
      
    </div>
  );
}

export default ImageSlide
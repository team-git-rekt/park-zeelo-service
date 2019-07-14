import React from 'react';
import Arrow from './Arrow.jsx'
import ImageSlide from './ImageSlide.jsx'

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      currentImageIndex: 0,
      imgUrls: [
        "https://previews.123rf.com/images/dixi_/dixi_1512/dixi_151200130/50274571-gray-puppy-cane-corso-on-the-grass.jpg",
        "https://previews.123rf.com/images/dixi_/dixi_1512/dixi_151200072/50274407-portrait-of-a-gray-puppy-cane-corso-on-the-grass.jpg",
        "https://previews.123rf.com/images/dixi_/dixi_1512/dixi_151200023/50274263-black-cane-corso-puppy-in-the-grass.jpg",
        "https://www.mobafire.com/images/champion/skins/landscape/talon-crimson-elite.jpg",
        "https://lolstatic-a.akamaihd.net/site/mount-targon/079694fdf251b5e7de788d9ab439d401d31ae160/img/champions/diana/diana-hero-mobile.jpg",
        "https://cdna.artstation.com/p/assets/images/images/009/623/064/large/adrien-cams-twitch-illus-final.jpg",
        "https://lolstatic-a.akamaihd.net/site/ekko-comic/c16250df6f22e04fcec07cd023bd6ddcf5b5c8f1/img/cover/en_US/cover.jpg"
    ]
    };

    this.previousSlide = this.previousSlide.bind(this)
    this.nextSlide = this.nextSlide.bind(this)
  }

  previousSlide () {
    const lastIndex = this.state.imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide () {
    const lastIndex = this.state.imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  }

  render () {
    return (
      <div className="carousel">

        <Arrow direction='left' clickFunction={ this.previousSlide } glyph="&#9664;" />
        
        <ImageSlide url={ this.state.imgUrls[this.state.currentImageIndex] } clickFunction={ this.nextSlide } />

        <Arrow direction='right' clickFunction={ this.nextSlide } glyph='&#9654;' />

      </div>
    );
  }
}

export default Carousel

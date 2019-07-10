import React from 'react'

class Main extends React.Component {
  constructor() {
    super()

    this.state = {
      imageUrls: [
        "https://www.autocar.co.uk/sites/autocar.co.uk/files/porsche-gt3-rs-rt-026.jpg",
        "https://www.nationalgeographic.com/content/dam/photography/photos/000/013/1399.ngsversion.1538507346716.adapt.1900.1.jpg",
        "https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/vdat/submodels/porsche_911-gt2-rs_porsche-911-gt2-rs_2019-1557432654191.jpg",
        "https://i.kinja-img.com/gawker-media/image/upload/s--vaC0BSO_--/c_scale,f_auto,fl_progressive,q_80,w_800/l8bricwb5lg4fcisxvjh.jpg",
        "https://www.labrottie.com/wp-content/uploads/2019/02/Pitweiler-Labrottie.com_.jpg",
        "https://cdn2-www.dogtime.com/assets/uploads/2016/09/rottweiler-puppy-1-e1553630142158.jpg",
        "https://previews.123rf.com/images/dixi_/dixi_1512/dixi_151200130/50274571-gray-puppy-cane-corso-on-the-grass.jpg",
        "http://www.everyonelovesdogs.com/wp-content/uploads/2016/07/Blue-pitbull.jpg",
        "https://previews.123rf.com/images/dixi_/dixi_1512/dixi_151200023/50274263-black-cane-corso-puppy-in-the-grass.jpg",
        "https://previews.123rf.com/images/dixi_/dixi_1512/dixi_151200023/50274263-black-cane-corso-puppy-in-the-grass.jpg",
        "https://lolstatic-a.akamaihd.net/site/ekko-comic/c16250df6f22e04fcec07cd023bd6ddcf5b5c8f1/img/cover/en_US/cover.jpg"
      ]
    }
  }
  
  render () {
    const subImages = this.state.imageUrls.slice(1).map((subImage) => {
      return (
       <img className="sub-img" src={ subImage } />
      )
    });
  
    return (
      <div className="main" >
          <img className="main-img" src={ this.state.imageUrls[0] } />
        <div className="sub-cont">
          {subImages}
        </div>
      </div>
    )
  }
}

export default Main
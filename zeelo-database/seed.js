const db = require("./index.js");
const houseSchema = require("./houseSchema.js");
const faker = require("faker");
const houseGen = () => {
  let houseArr = [];

  for (let i = 1; i <= 100; i++) {
    const House = {
      id: i,
      images: [ "https://zeelo-images.s3-us-west-2.amazonaws.com/1.jpg",
              "https://zeelo-images.s3-us-west-2.amazonaws.com/2.jpg",
              "https://zeelo-images.s3-us-west-2.amazonaws.com/3.jpg",
              "https://zeelo-images.s3-us-west-2.amazonaws.com/4.jpg",
              "https://zeelo-images.s3-us-west-2.amazonaws.com/5.jpg",
              "https://zeelo-images.s3-us-west-2.amazonaws.com/6.jpg",
              "https://zeelo-images.s3-us-west-2.amazonaws.com/7.jpg",
              "https://zeelo-images.s3-us-west-2.amazonaws.com/8.jpg",
              "https://zeelo-images.s3-us-west-2.amazonaws.com/9.jpg",
              "https://zeelo-images.s3-us-west-2.amazonaws.com/10.jpg"
             ]
    };
    houseArr.push(House);
  }
  // console.log(houseArr);
  console.log(houseArr);
  return houseArr;
};

const inserthomeData = function () {
  const houses1 = houseGen();
  const promises = [];
  for (const house of houses1) {
    promises.push(houseSchema.create(house));
  }
  Promise.all(promises).then(() => db.disconnect());
};


inserthomeData();
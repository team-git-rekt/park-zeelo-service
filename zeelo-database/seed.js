const db = require("./index.js");
const houseSchema = require("./houseSchema.js");
const faker = require("faker");
const houseGen = () => {
  let houseArr = [];

  for (let i = 1; i <= 100; i++) {
    const House = {
      id: i,
      images: [ `https://zeelo-images.s3-us-west-2.amazonaws.com/${(i * 10) - 9}.jpg`,
                `https://zeelo-images.s3-us-west-2.amazonaws.com/${(i * 10) - 8}.jpg`,
                `https://zeelo-images.s3-us-west-2.amazonaws.com/${(i * 10) - 7}.jpg`,
                `https://zeelo-images.s3-us-west-2.amazonaws.com/${(i * 10) - 6}.jpg`,
                `https://zeelo-images.s3-us-west-2.amazonaws.com/${(i * 10) - 5}.jpg`,
                `https://zeelo-images.s3-us-west-2.amazonaws.com/${(i * 10) - 4}.jpg`,
                `https://zeelo-images.s3-us-west-2.amazonaws.com/${(i * 10) - 3}.jpg`,
                `https://zeelo-images.s3-us-west-2.amazonaws.com/${(i * 10) - 2}.jpg`,
                `https://zeelo-images.s3-us-west-2.amazonaws.com/${(i * 10) - 1}.jpg`,
                `https://zeelo-images.s3-us-west-2.amazonaws.com/${i * 10}.jpg`
             ]
    };
    houseArr.push(House);
  }
  return houseArr;
};

const inserthomeData = function () {
  const houses1 = houseGen();
  const promises = [];
  for (const house of houses1) {
    promises.push(houseSchema.create(house));
  }
  Promise.all(promises)
    // .then(console.log)
    .then(() => houseSchema.find({}, console.log))
    .catch(console.error)

};


inserthomeData();
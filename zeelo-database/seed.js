// import db from './index.js'
const db = require("./index.js");
// import houseSchema from './houseSchema'
const houseSchema = require("./houseSchema.js");
const faker = require('faker')

// not seeding correctly to database

const houseGen = () => {
  let houseArr = [];

  for (let i = 1; i < 100; i++) {
    const House = {
      id: i,
      price: faker.finance.amount(550000, 5000000, 0),
      bedrooms: faker.random.number({ min: 3, max: 8 }),
      bathroom: faker.random.number({ min: 2, max: 5 }),
      sqft: faker.random.number({ min: 1500, max: 5500 }),
      address: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.state()}, ${faker.address.zipCode()}`
    };
    houseArr.push(House);
    console.log(houseArr);
  }
  return houseArr;
};

houseGen();

const inserthomeData = () => {

    const houses = houseGen()
    for (let house of houses) {
        houseSchema.create(house)

    }

};

inserthomeData();

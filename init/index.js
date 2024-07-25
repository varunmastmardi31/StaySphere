const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_ULR = "mongodb://127.0.0.1:27017/staysphere";

async function main() {
  await mongoose.connect(MONGO_ULR);
}

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "66960e3293f67321e7e461a0",
  }));
  await Listing.insertMany(initData.data);
  console.log("Data Initialized Successfully");
};

initDB();

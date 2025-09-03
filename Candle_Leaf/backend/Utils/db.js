const mongoose = require("mongoose")

const Mongo_Url = process.env.MONGO_URL
// console.log(Mongo_Url, "...mongo");

mongoose.connect(Mongo_Url)
    .then(() => {
        console.log("MongoDB Database Connected !!");
    })
    .catch((err) => {
        console.log(err, "...Dabase Not Connected !");
    })
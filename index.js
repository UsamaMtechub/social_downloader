const express = require("express")
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const app= express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
require('dotenv').config()

const cors = require('cors')
app.use(cors())

//connect to db
mongoose.connect(
    process.env.DB_CONNECTION, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
    () => console.log("Connected to DB")
);



//middleware
app.use(express.json());


//Routes

app.use("/api/socialDownload" , require("./routes/socialDownloadRoute"))
app.use("/api/user" , require("./routes/userRoute"))


const server=app.listen(3000, () => console.log(`Running server on port: ${PORT}`));
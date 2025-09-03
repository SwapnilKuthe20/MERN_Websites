const express = require("express")
require('dotenv').config()
require("./Utils/db")

const cors = require('cors')
const authRoutes = require("./Routes/authRoutes")

const app = express()

app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use('/api/auth', authRoutes)

// Testing Route :

// app.get('/test', (req, res) => {
//     res.send("Hello Swap ! testing SucceessFull !!")
// })

const Port = process.env.Port
// console.log(Port, "...Port");

app.listen(Port, () => {
    console.log(`Server starts on Port : ${Port}`);
})

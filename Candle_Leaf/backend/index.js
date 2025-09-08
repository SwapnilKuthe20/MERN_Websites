const express = require("express")
require('dotenv').config()
require("./Utils/db")

const cors = require('cors')
const authRoutes = require("./Routes/authRoutes")
const cookieParser = require('cookie-parser')
const { productRoute } = require("./Routes/productRoutes")

const app = express()

app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use(cookieParser())

app.use('/api/auth', authRoutes)

app.use("/products", productRoute)

// Testing Route :

// app.get('/test', (req, res) => {
//     res.send("Hello Swap ! testing SucceessFull !!")
// })

const Port = process.env.Port
// console.log(Port, "...Port");

app.listen(Port, () => {
    console.log(`Server starts on Port : ${Port}`);
})

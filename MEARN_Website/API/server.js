import express from 'express';
import mongoose from 'mongoose';
import userRouter from './Routers/user.js';
import bodyParser from 'express';
import productRouter from './Routers/product.js';
import cartRouter from './Routers/cart.js'
import addressRouter from './Routers/address.js'
import cors from 'cors'

const app = express();

app.use(bodyParser.json());

app.use(cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))

// home route to test :
app.get('/', (req, res) => res.json({ message: "This is home route" }))

// user router
app.use('/api/user', userRouter);

// product router
app.use('/api/product', productRouter);

// cart router
app.use('/api/cart', cartRouter);

// address router
app.use('/api/address', addressRouter);


mongoose.connect('mongodb+srv://swapnilkuthe20:UJ8u0BDIoJ46rwG5@e-commerse-cluster.dm5zk.mongodb.net/',
    {
        dbName: "E-Commerse_MERN"
    })
    .then(() => console.log("mongoDB connected Successfully !"))
    .catch((err) => console.log(err, "Error Occured"))

const port = 1000;
app.listen(port, () => console.log(`Express server is running on port : ${port}`))



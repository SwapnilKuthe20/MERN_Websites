import express from 'express';
import mongoose from 'mongoose';
import userRouter from './Routers/user.js';
import bodyParser from 'express';

const app = express();

app.use(bodyParser.json());

// home route to test :

app.get('/', (req, res) => res.json({ message: "This is home route" }))

app.use('/api/user', userRouter);

mongoose.connect('mongodb+srv://swapnilkuthe20:UJ8u0BDIoJ46rwG5@e-commerse-cluster.dm5zk.mongodb.net/',
    {
        dbName: "E-Commerse_MERN"
    })
    .then(() => console.log("mongoDB connected Successfully !"))
    .catch((err) => console.log(err, "Error Occured"))

const port = 1000;
app.listen(port, () => console.log(`Express server is running on port : ${port}`))



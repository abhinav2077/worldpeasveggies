const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');
const corsConfig = {
  origin: "https://worldpeasveggies-ltxw.vercel.app", // Frontend origin
  credentials: true, // Allow cookies and credentials
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
};

require('dotenv').config();
require('./Models/db')
app.use(cors(corsConfig));

app.options("*", cors(corsConfig)); // Handle preflight requests globally

app.post("/auth/login", (req, res) => {
  // Ensure no redirect occurs here
  res.json({ success: true, message: "Login successful" });
});


const PORT = process.env.PORT || 8080;

app.get('/ping',(req,res)=>{
    res.send('PONG')
})

app.use(bodyParser.json());
app.use(cors(corsConfig));
app.use('/auth',AuthRouter);
app.use('/products',ProductRouter);

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})

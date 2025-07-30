require('dotenv').config();
const connectToDB = require("./database");
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;
const cloudinary = require('./cloudinary/cloudconfig')
const ListingModel = require('./schema/listing.model')
const data = require('./data')
// console.log(data)


connectToDB();
console.log(cloudinary.config());


app.use(cors());
app.use(express.json());
app.use(express.static('public'))//where to serve file- from public folder

app.get("/", (req, res) => {
  res.send("Hello user from Express");
});

app.get('/api/self/addListing', async(req,res)=>{
  await ListingModel.deleteMany({})
  const response = await ListingModel.insertMany(data)
  res.send("add list")
})

app.use('/api/v3.2/auth', require('./router/auth.routes'));
app.use('/api/v3.2/contact', require('./router/contact.routes'));
app.use('/api/v3.2/post', require('./router/listing.routes'));
app.use('/api/v3.2/comment', require('./router/comment.routes'));
app.use('/api/v3.2/rating', require('./router/rating.routes'));

 
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});



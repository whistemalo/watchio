const express = require("express");
const routerAPI = require("./routes/index.routes");
const cors = require("cors");

const { config } = require('./config/config');

const URI = `mongodb://admin:admin123@localhost:27017/watchio?authSource=admin`;
console.log(URI);
const mongoose = require("mongoose");

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

routerAPI(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

mongoose
.connect(URI)
.then(() => {console.log("Connected to Mongo");})
.catch((err) => {console.log(err);});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});




 app.listen(port, () => {
   console.log(`Listening on port ${port}!`);
 });


// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`);
// });



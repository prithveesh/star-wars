// MEAN - MongoDB (Database), ExpressJs (Server), Angular (Front), NodeJs (Tool)
// MERN - R - ReactJs

const express = require("express");
const cors = require("cors");
const path = require("path");

const filmsData = require("./data/films");

const app = express();
//middleware
app.use(cors());


app.get('/films', (req, res) => {
  setTimeout(() => {
    res.send(filmsData);
  }, 3000);
});

app.use('/people', express.static(path.resolve(__dirname, './data/people.json')));

app.get('/planets', (req, res) => {
  res.sendFile(path.resolve(__dirname, './data/planets.json'))
});

app.listen(8183, () => {
  console.log('Server running on 8183');
});

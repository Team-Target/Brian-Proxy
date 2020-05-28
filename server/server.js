const express = require('express');
const path = require("path");
const cors = require('cors')
const port = 4005;
const { getItems, getItemId } = require('../database/query');
const app = express();

app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());
app.use(cors());
//app.use(express.urlencoded({extended: true})); //Parse URL-encoded bodies

app.get('/api/items', (req, res) => {
  getItems((err, data) => {
    if (err) {
      console.log('problem getting all items from server');
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.get('/api/item/:name', (req, res) => {
  getItemId(req.params, (err, data) => {
    if (err) {
      console.log('problem getting all items from server');
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});


app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

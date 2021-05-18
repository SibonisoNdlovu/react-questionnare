// server/index.js
const express = require("express");
const axios =  require("axios");
const stringify = require('json-stringify-safe');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.raw());;

const PORT = 3001;

app.get("/getQuestionnare", (req, res) => {
  axios.get('https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple').then( response => {
    var circularObj = {};
    circularObj.circularRef = response;
    circularObj.list = [ circularObj, circularObj ];
    res.send({data: JSON.parse(stringify(circularObj.circularRef.data, null, 2))});
  }).catch(e=> {
      console.log("error",e)
      this.onError(e.toString());
  })
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

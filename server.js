const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;
const app = express();
const corsOption = {
  origin: 'http://localhost:3000'
}
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('Public'));

const myfunc = function(data) {
  console.log('Posted Data', data)
}

app.post('/postStuff', (req,res)=>{
  const myStuff = req
  //console.log( 'data', myStuff)
  // function to insert to db myfunc(mystuff)
  myfunc(myStuff)
  res.status(200).send('ok')
});
app.listen(port, console.log(`Server is listening on port ${port}`));


var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const PORT = process.env.PORT || 8081
// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.post('/process_post', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   response = {
      param1:req.body.param1.split("").reverse().join(""),
      param2:req.body.param2.slice(1,4),
      param3:req.body.param3.toUpperCase(),
      param4:req.body.param4.charAt(3),
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(PORT, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)

})
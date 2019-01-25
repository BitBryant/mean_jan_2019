var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('./server/config/mongoose'),
    path = require('path'),
    flash = require('express-flash');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/angularapp/dist/angularapp'));
require('./server/config/routes.js')(app);
app.listen(8000, function() {
    console.log("listening on port 8000");
})
mongoose.Promise = global.Promise;


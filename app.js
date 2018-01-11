var express = require('express');
var http = require('http');
var https = require('https');
var bodyParser = require('body-parser');
var logger = require('morgan');
var session = require('express-session');

//require route
var customerRouter = require('./app/customer/customer-route');
var userRouter = require('./app/user/user-route');

var app = express();
var port = process.env.PORT|| 3000;
var server =app.listen(port, function () {
    console.log("Express server is running in port "+ port);
});

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//use sessions for tracking logins
app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false
  }));

//set view engine
app.set('views', __dirname);
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//authenticate
app.get('/', function (req, res) {
    res.send('The API is at http://localhost:' + port + '/');
});

var auth = require('./middlewares/authenticate');
app.post('/authenticate', auth.authenticate(app));
// customer route
app.use('/customers', customerRouter);

//user route
app.use('/users', userRouter);
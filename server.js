var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var api = require('./server/routes/api');
var UserModel = require('./server/model/user');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
var api = require('./server/routes/api');
var api = require('./server/routes/api');
var cors = require('cors');

var app = express();
var port = process.env.PORT || 3000;

app.use(cors());

app.use('/api', api);

const dbURI = "mongodb+srv://Diams2:koukouta586.@cluster0-jo5ke.mongodb.net/videoApp?retryWrites=true";
let mongoDB = process.env.MONGODB_URI || dbURI;
mongoose.connect(mongoDB).then(
  () => {
    console.log("Database connection established!");
    app.listen(port, function (err) {
      if (err) {
        throw err;
      }
      console.log(`server is listening on ${port}...`)
    })
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


app.use(expressJwt({secret: 'video-app-super-shared-secret'}).unless({path: ['/api/auth']}));
app.post('/api/auth', function (req, res) {
  const body = req.body;

  UserModel.findOne( {"pseudo": body.username },
  function (err, user) {
    if(!user || body.password != user.mdp) {
      return res.sendStatus(401);
    }else{
      var token = jwt.sign({ userID: user._id }, 'video-app-super-shared-secret', { expiresIn: '2h' });
      res.send({ token });
    }
  });
});

app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
// require('./server/config/passport')(passport);
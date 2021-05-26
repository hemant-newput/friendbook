require('dotenv').config()
const express = require('express');
const app = express()
const cors = require('cors')
const dbUtil = require('./src/utils/dbUtil')
const PORT = process.env.PORT;
const authRoutes = require('./src/routes/authRoutes');
const homeRoutes = require('./src/routes/homeRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken')
const token = require('./src/utils/token')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, () => { console.log(`server running on Port ${PORT}`) })  // server ready to listen
app.get('/version', (req, res) => {
  res.json({
    version: 'v1',
    application: 'FriendBook',
    'Created By': 'Hemant Shrivastava',
  });
});

app.use(cors())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization, Accept-Version, device-id, env, User-IP, x-api-key',
  );
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.get('/db', (req, res) => {
  dbUtil.seeder();
  res.send("TABLES ARE CREATED")
})

app.get('/token', (req, res) => {
  user = {
    data: "This is a test token hemant shrivastava",
  }
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET_KEY)

  res.json({token,key: process.env.ACCESS_TOKEN_SECRET_KEY})
})

app.use((req, res, next) => {
  console.log("request arrived");
  console.log("host: " + req.hostname);
  console.log("method: " + req.method);
  console.log("httpVersion: " + req.httpVersion);
  console.log("url: " + req.url);
  next();
});

app.use('/auth', authRoutes);
app.use('/home', token.verifyToken, homeRoutes);
app.use('/admin', adminRoutes);

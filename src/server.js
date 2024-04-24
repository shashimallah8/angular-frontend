
const express = require('express');
const app = express();
const cors = require('cors')

app.use(express.static('./dist/angular-frontend'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/angular-frontend/'})
);
app.use(cors());
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
  next();
  });

app.listen(process.env.PORT || 4200);

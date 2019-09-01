var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer({
  dest: './public/uploads/',
  limits:{
    fileSize: 1000000
  },
})
require('dotenv').config();

var app = express();

app.use(cors({ optionSuccessStatus: 200 }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.post('/', upload.single('upfile'), (req, res) => {
  res.json({ "name": req.file.originalname, "type": req.file.mimetype, "size": req.file.size });
});

app.listen(process.env.PORT || 3000);
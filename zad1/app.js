const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const errRouter = require('./routes/error');

const PORT = 3000;

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret:"secret", resave:false, saveUninitialized:true }));
app.use('/static', express.static('public'));

app.use(errRouter);

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
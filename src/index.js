const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require("express-handlebars");
const res = require('express/lib/response');
const app = express();
const port = 3000;
const route = require('./routes');
app.use(express.urlencoded());
app.use(express.json());
//template engine
app.engine("hbs", handlebars({
  extname: ".hbs"
}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, '\\resources\\views'));

app.use(express.static(path.join(__dirname, 'public')))

app.use(morgan('combined'));


//route init
route(app);

app.listen(port, () => {
  console.log(`Blog listening on port ${port}`);
})
const express = require("express");
const cookieParser = require('cookie-parser'); 
const chalk = require('chalk');
const app = express();
const port = 8000;

//setting up the cookie
app.use(cookieParser());


// reading the body form data through body-parser
// app.use(express.urlencoded());
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))


// calling my css files and images
app.use(express.static("./assets"));


// express layout using here 
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);

app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// calling Database
const db = require("./config/mongoose");

//setting up the ejs views 
app.set('view engine', "ejs");
app.set('views', './views');


//setting up the router
app.use("/", require("./routes/index"));



// listen the port here

app.listen(port, function (err) {
    if (err) {
        console.log(`Error in running server ${err} `);
        return;
    }
    console.log(chalk.bgWhite.red.underline(` Server is up-to-date on port ${port} | :) =>-----------------------------------------------------------------------`));
    console.log(chalk.bgBlueBright.yellow.underline(` Sever is on http://localhost:8000 | :) =>-----------------------------------------------------------------------`));

})
const express = require("express");
const app = express();
const path = require("path");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
mongoose.Promise=global.Promise;
const port = process.env.port||3000;



// app.set('views',path.join(__dirname,'views'));
// app.set('view engine','ejs');

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", 'ejs');

app.use(require("./routes/route"));



mongoose.connect("mongodb://localhost/nameloc")
    .then(()=>{
        console.log("succesfully connected with db");
    }).catch((err) =>{
        console.log("error in connecting db",err);
    });

app.listen(port,()=>{
    console.log(`server is connected at ${port}`);
});

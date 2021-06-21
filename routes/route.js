const express =require("express");
const app = express();
 
const Categorycontroller= require("../controller/formcontroller");

app.get('/', (req, res) => {
    res.render('home');
});


app.post('/dev_save',Categorycontroller.Save);
app.get('/dev_show',Categorycontroller.Show);
app.post('/dev_delete/:id',Categorycontroller.Delete);


module.exports=app;
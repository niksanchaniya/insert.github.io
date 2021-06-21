const Category = require("../models/model");



exports.Save = async(req,res)=>{
   
    console.log(req.body.name);
    const category = new Category(req.body);
    try{
        await category.save();
        // res.status(200).send("inserted");
        res.redirect("/");
    }
    catch(err){
        res.status(500).send(err);
    }
};



exports.Show = async (req, res) => {
    let category = await Category.find();
    res.render('show', { category: category });
};

exports.Delete = async (req, res) => {
    await Category.findByIdAndDelete(req.params.id);
    res.redirect('/dev_show');
};

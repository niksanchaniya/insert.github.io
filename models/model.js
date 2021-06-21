const mongoose =require('mongoose');

const ModelSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }, 
    address2:{
        type:String,
        required:true
    }, 
    country:{
        type:String,
        required:true
    }, 
    state:{
        type:String,
        required:true
    }, 
    zip:{
        type:Number,
        required:true
    }    

});

module.exports = mongoose.model('nameloc',ModelSchema);
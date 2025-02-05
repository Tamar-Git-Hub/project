const mongoose= require('mongoose')

const RecipeSchema=new mongoose.Schema({
    name:String,
    catagoty:String,
    instruction:Array
})

module.exports=mongoose.model('Recipe',RecipeSchema)
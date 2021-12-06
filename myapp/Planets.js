const mongoose = require('mongoose')

const PlanetSchema = new mongoose.Schema({
    PlanetName:{
        type: String,
        required: [true, "Plant name should be provided"]
    }, 
    NumberOfMoon:{
        type: Number,
        required: [true, "Plant name should be provided"]
    }, 
    LengthOfDay:{type:Number}
})
   
module.exports = mongoose.models.Planets || mongoose.model('Planets',PlanetSchema)

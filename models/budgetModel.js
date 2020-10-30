const mongoose = require('mongoose');


const budgetSchema = mongoose.Schema({
    _id:{
        type: String,
        required : false,
        trim : true
    },
    title :{
        type: String,
        required : true,
        trim: true
    },
    budget :{
        type : Number,
        required : true,        
    },
    color:{
        type: String,
        required: true,
        match: [/^#(?:[0-9a-fA-F]{3}){1,2}$/, 'Invalid Color']
    }
},{collection : 'budget'})

const budgetModel = mongoose.model('task',budgetSchema);

module.exports = budgetModel;
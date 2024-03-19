const mongoose = require('mongoose')
const Schema = mongoose.Schema

const formSchema = new Schema({
    username: {
        type:String, 
        required:true 
    },
    codeLanguage: {
        type:String, 
        required:true 
    },
    stdin: {
        type:String, 
        required:true 
    },
    sourceCode: {
        type:String, 
        required:true 
    },
    timestamp: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Snippet', formSchema)
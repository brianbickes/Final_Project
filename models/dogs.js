const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dogSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        default: "Unknown",
        required: true
    },
    color: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    dateAvailable: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    isDogFixed: {
        type: Boolean,
        required: true
    },
    image: {
        type: String
    }
}, {
    timestamps: true
});

const Dogs = mongoose.model('Dogs', dogSchema);

//EXPORT ROUTER
module.exports = Dogs; 
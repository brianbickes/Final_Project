const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const catSchema = new Schema({
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
    isCatDeclawed: {
        type: Boolean,
        default: false,
        required: false
    },
    isCatFixed: {
        type: Boolean,
        required: false
    },
    image: {
        type: String
    }
}, {
    timestamps: true
});

const Cats = mongoose.model('Cats', catSchema);

//EXPORT ROUTER
module.exports = Cats; 
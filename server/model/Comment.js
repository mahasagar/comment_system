var mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;
// Schema
var schema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId},
    comment : {type: String},
    parentCommentId : {type: mongoose.Schema.Types.ObjectId},
    updatedAt: {type: Date},
    createdDate: {type: Date, require: true, default: Date.now}
});

// Model
var model = mongoose.model('Comment', schema);

// Public API
module.exports = model;

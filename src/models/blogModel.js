const mongoose = require('mongoose');
const objId = mongoose.Schema.Types.ObjectId

const blogModel = new mongoose.Schema({
    title: {
        type: String,
        required: "Title is required",
        trim : true 
    },
    body: {
        type: mongoose.Schema.Types.Mixed,
        required: "Body id required",
    },
    authorId: {
        type: objId,
        required: "Blog author is required",
        ref: "blogProject_author"
    },
    tags: { type: [String] },
    category: {
        type: [String],
        required: "Category is required",
        trim : true
    },
    subcategory: { type: [String] ,trim : true },
    deletedAt: { type: Date },
    isDeleted: { type: Boolean, default: false },
    publishedAt: { type: Date },
    isPublished: { type: Boolean, default: false }
}, { timestamps: true });


module.exports = mongoose.model('blogProject_blog', blogModel)



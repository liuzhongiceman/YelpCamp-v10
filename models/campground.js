var mongoose = require("mongoose");
//schema setup
Schema = mongoose.Schema,
campgroundSchema = new Schema({
    name:String,
    image:String,
    description:String,
    author:{
        id:{
            type: mongoose.Schema.ObjectId,
            ref: "User"
        },
        username: String
    },
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment"
    }]
});

var Campground = mongoose.model("Campground",campgroundSchema);
module.exports = Campground;
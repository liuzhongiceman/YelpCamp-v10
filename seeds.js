var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name:"Cloud's Best",
        image:"https://images.unsplash.com/photo-1534880606858-29b0e8a24e8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        description:"blah blah blah"
    },  
    {
        name:"1914 translation by H. Rackha",
        image:"https://images.unsplash.com/photo-1455496231601-e6195da1f841?ixlib=rb-1.2.1&auto=format&fit=crop&w=1095&q=80",
        description:"blah blah blah"
    },
    {
        name:"Nam libero tempore",
        image:"https://images.unsplash.com/photo-1496080174650-637e3f22fa03?ixlib=rb-1.2.1&auto=format&fit=crop&w=1006&q=80",
        description:"blah blah blah"
    }
]
function seedDB(){
    Campground.remove({},function(err){
        // if(err){
        //     console.log(err);
        // }else{
        //     console.log("removed campgrounds");
        //        //add a few campgrounds
        //     data.forEach(function(seed){
        //         Campground.create(seed,function(err,campground){
        //             if(err){
        //                 console.log(err);
        //             }else{
        //                 console.log("added a campground");
        //                 // create a comment
        //                 Comment.create(
        //                     {
        //                     text:"This place is great, but i wish there was internet",
        //                     author:"Homer"
        //                 },function(err,comment){
        //                     if(err){
        //                         console.log(err);
        //                     }else{
        //                         campground.comments.push(comment);
        //                         campground.save();
        //                         console.log("Created new comment")
        //                     }
        //                 }
        //                 )
        //             }
        //         }
        //         )
        //     })
        // }
    });
}

module.exports = seedDB;



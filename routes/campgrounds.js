var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");

// INDEX - SHOW all campgrounds
router.get("/",function(req,res){
    //Get all campgrounds from DB
    Campground.find({},function(err,campgrounds){
        if(err){
            console.log(err);
        }else{
            res.render("campgrounds/index",{campgrounds:campgrounds});
        }
    });
    // res.render("campgrounds",{campgrounds:campgrounds});
});


//CREATE - add new campground to DB
router.post("/",isLoggedIn,function(req,res){
        //get data from form
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var author = {
        id:req.user._id,
        username: req.user.username
    }
    var newCampground = {name: name, image:image, description:desc, author: author};
    console.log(req.user);


    // create a new campground and save to DB
    Campground.create(newCampground,function(err,newlyCreated){
        if(err){
            console.log(err);
        }else{
            console.log(newlyCreated);
            //redirect to campground pages;
            res.redirect("/campgrounds");
        }
    })
});


//NEW - shor form to create new campground
router.get("/new",isLoggedIn,function(req,res){
    res.render("campgrounds/new");
});

//SHOW -shows more info about one campground
router.get("/:id",function(req,res){
    // find the campground that has the provided id
    Campground.findById(req.params.id).populate("comments").exec(function(err, campground){
        if(err){
            console.log(err);
        }else{
            res.render("campgrounds/show",{campground:campground});
        }
    })
    //
})


//EDIT Campground ROute
router.get("/:id/edit",function(req,res){
    Campground.findById(req.params.id,function(err,campground){
        if(err){
            // console.log(err);
            res.redirect("/campgrounds");
        }else{
            res.render("campgrounds/edit",{campground:campground});
        }
    })
})
//Update campground route
router.put("/:id",function(req,res){
    // find and update the correct campground
    Campground.findByIdAndUpdate(req.params.id,req.body.campground,function(err,foundCampground){
        if(err){
            res.redirect("/campgrounds");
        }else{
            res.redirect("/campgrounds/"+ req.params.id);
        }
    })
    //redirect somewhere
})

//Destory Campground route
router.delete("/:id",function(req,res){
    // res.send("yoU WANT TO DELET")
    Campground.findByIdAndRemove(req.params.id,function(err){
        if(err){
            res.redirect("/campgrounds");
        }else{
            res.redirect("/campgrounds");
        }
    })
})

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;
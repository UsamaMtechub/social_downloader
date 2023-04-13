const User = require("../models/User");
const mongoose = require("mongoose");
const updateCountFn = require("../utils/updateCountFn")
exports.createUser=(req,res)=>{
  try {
   
    const user= new User({
        _id:mongoose.Types.ObjectId(),
        token: req.body.token,
    })
    
    user.save();

    res.json({
      data: { user },
      message: "User Created successfully",
      success: true,
      statusCode:200
    });
  } catch (e) {
    res.status(400).json({ message: e.message, success: false,statusCode:400 });
  }
};

exports.getUser=(req,res)=>{
    const userId = req.params.userId;
    User.find({_id:userId}, function(err,result){
        try{
          res.send(result)
        }
        catch (err) {
          res.status(400).json({ message: err.message, success: false  ,statusCode:400});
        }
    })
 
};

exports.getAllUsers=(req,res)=>{
  User.find({}, function(err,result){
      try{
        res.send(result)
      }
      catch (err) {
        res.status(400).json({ message: err.message, success: false });
      }
  })

};

exports.deleteUser=(req,res)=>{
  const userId = req.params.userId;
  User.deleteOne({_id:userId}, function(err,result){
      try{
        if(result.deletedCount > 0){
          res.json({
            message: "document deleted",
            result: result,
            statusCode:200
          })
        }
        else{
          res.json({
            message: "document not found",
            result:result,
            statusCode:404
          }
          )
        }
        
        
      }
      catch (err) {
        res.status(400).json({ message: err.message, success: false , statusCode:400 });
      }
  })

};
exports.updateUser=(req,res)=>{
  const userId = req.body.userId;
  const token = req.body.token;
  User.findOneAndUpdate({_id:userId},{token:token},{new:true}, function(err,result){
      try{
          if(result !==null && typeof result !== 'undefined'){
            res.json({
              message: "document updated",
              result:result
            })
          }
          else{
            res.json({
              message: "No changes updated"
            })
          }
        }
      catch (err) {
        res.status(400).json({ message: err.message, success: false });
      }
  })

};

exports.updateCount =async (req, res) => {

  const social_type= req.query.social_type
  const userId = req.body.userId

  if(social_type=="facebook"){
    User.findOneAndUpdate({_id:userId},{$inc : {'fb_count' : 1}} , {new:true}, function(err,result){
      try{
          if(result !==null && typeof result !== 'undefined'){
            res.json({
              message: "document updated",
              result:result
            })
          }
          else{
            res.json({
              message: "No changes updated"
            })
          }
        }
      catch (err) {
        res.status(400).json({ message: err.message, success: false });
      }
  })

  }
  else if(social_type =="instagram") {
    User.findOneAndUpdate({_id:userId},{$inc : {'instaCount' : 1}} , {new:true}, function(err,result){
      try{
          if(result !==null && typeof result !== 'undefined'){
            res.json({
              message: "document updated",
              result:result
            })
          }
          else{
            res.json({
              message: "No changes updated"
            })
          }
        }
      catch (err) {
        res.status(400).json({ message: err.message, success: false });
      }
  })
    
  }
  else if (social_type =="tikTok"){
    User.findOneAndUpdate({_id:userId},{$inc : {'tikTok_count' : 1}} , {new:true}, function(err,result){
      try{
          if(result !==null && typeof result !== 'undefined'){
            res.json({
              message: "document updated",
              result:result
            })
          }
          else{
            res.json({
              message: "No changes updated"
            })
          }
        }
      catch (err) {
        res.status(400).json({ message: err.message, success: false });
      }
  })
  }
  else if(social_type == 'twitter'){
    User.findOneAndUpdate({_id:userId},{$inc : {'twitter_count' : 1}} , {new:true}, function(err,result){
      try{
          if(result !==null && typeof result !== 'undefined'){
            res.json({
              message: "document updated",
              result:result
            })
          }
          else{
            res.json({
              message: "No changes updated"
            })
          }
        }
      catch (err) {
        res.status(400).json({ message: err.message, success: false });
      }
  })
  }
  else if(social_type == "youtube"){
    User.findOneAndUpdate({_id:userId},{$inc : {'yt_count' : 1}} , {new:true}, function(err,result){
      try{
          if(result !==null && typeof result !== 'undefined'){
            res.json({
              message: "document updated",
              result:result
            })
          }
          else{
            res.json({
              message: "No changes updated"
            })
          }
        }
      catch (err) {
        res.status(400).json({ message: err.message, success: false });
      }
  })
  }
  else{
    res.json({
      message:"social_type must be one of These [facebook, twitter, instagram , youtube , tikTok]"
    })
  }
 
}

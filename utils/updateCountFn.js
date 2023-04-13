
const User= require("../models/User");

function updateCount(social_type , userId){
    if(social_type =="facebook"){
            User.findOneAndUpdate({_id:userId},{fb_count:1}, function(err,result){
                console.log(result)
                try{
                    if(result !==null && typeof result !== 'undefined'){
                        return true
                    //   res.json({
                    //     message: "document updated",
                    //     result:result
                    //   })
                    }
                    else{
                    return false
                    //   res.json({
                    //     message: "No changes updated"
                    //   })
                    }
                  }
                catch (err) {
                    return err
                //   res.status(400).json({ message: err.message, success: false });
                }
            })

        
    }
    else{
        console.log("parameters are wrong")
    }
}

module.exports =updateCount;
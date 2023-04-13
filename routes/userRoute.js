const express = require("express"),
router=express.Router();

const controller= require("../controllers/userController");


router.post("/createUser",controller.createUser)
router.get("/getUser/:userId",controller.getUser)
router.get("/getAllUsers/",controller.getAllUsers)
router.delete("/deleteUser/:userId",controller.deleteUser)
router.put("/updateUser",controller.updateUser)
router.post("/updateSocialCount" , controller.updateCount)


module.exports=router ;
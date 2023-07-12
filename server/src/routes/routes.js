const express =require("express");
const { createUser,userLogIn } = require("../controller/controller");
const router = express.Router()


router.get("/test-me",(req,res)=>{
    return res.send({message:"my first api"})
})

router.post("/signUp",  createUser);
router.post("/logIn",userLogIn);




module.exports = router
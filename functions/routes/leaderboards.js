const express=require("express")
  
// Creating express Router
const router=express.Router()


  
// Handling login request
router.get("/",(req,res,next)=>{
    res.render("leaderboards")
})
module.exports=router
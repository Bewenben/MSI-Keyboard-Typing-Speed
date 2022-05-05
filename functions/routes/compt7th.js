const express=require("express")
  
// Creating express Router
const router=express.Router()
  
// Handling login request
router.get("/",(req,res,next)=>{
    res.render("competition7")
})
module.exports=router
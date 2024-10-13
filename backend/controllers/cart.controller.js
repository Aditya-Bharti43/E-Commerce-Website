// addtocart,remove from cart,getcart
import { Users } from "../models/user.model.js";

export const addtocart =async(req,res)=>{
    //   console.log(req.body,req.user);
console.log("Added",req.body.itemId);
let userData=await Users.findOne({_id:req.user.id});
userData.cartData[req.body.itemId]+=1;
await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});

res.send("Added");
}

export const removefromcart =async(req,res)=>{
    console.log("removed",req.body.itemId);
    let userData=await Users.findOne({_id:req.user.id});
    if(userData.cartData[req.body.itemId]>0)
    userData.cartData[req.body.itemId]-=1;
await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});

res.send("Removed");
}

export const getcart =async(req,res)=>{
    console.log('GetCart');
      let userData=await Users.findOne({_id:req.user.id});
      res.json(userData.cartData); 
}


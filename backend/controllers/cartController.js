import userModel from "../models/userModel.js"
import jwt from 'jsonwebtoken'
const addToCart = async (req,res) =>
{
    try {
        const {userId , itemId , size} = req.body;
        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;
        
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size]+=1
            }
            else
            {
                cartData[itemId][size] = 1
            }
        } else
        {
            cartData[itemId] = {}
            cartData[itemId][size] = 1
        }
        await userModel.findByIdAndUpdate(userId,{cartData})
        res.json({succues:true,message:"Added to cart"})
    } catch (error) {
        console.log(error);
        res.json({succues:false,message:error.message})
    }
}
const updateCart = async (req,res) =>
{
    try {
        const {userId,itemId,size,quantity} = req.body
        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;
        cartData[itemId][size] = quantity
        await userModel.findByIdAndUpdate(userId,{cartData})
        res.json({succues:true,message:"Update cart"})
    } catch (error) {
        console.log(error);
        res.json({succues:false,message:error.message})
    }
}
const getUserCart = async (req,res) => {
  try {
    const {userId} = req.body
    const userData = await userModel.findById(userId)
    let cartData = await userData.cartData;
    res.json({succues:true,cartData})
  } catch (error) {
    console.log(error);
    res.json({succues:false,message:error.message})
  }
};

  
  
export {addToCart,updateCart,getUserCart}
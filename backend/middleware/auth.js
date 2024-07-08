const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("./catchAsyncError");
const jwt=require("jsonwebtoken");
const User = require("../models/userModel");

exports.isAuthenticatedUser= catchAsyncError(async(req,res,next)=>{
    const headers =req.headers;
    console.log("TOKE",headers['authorization']);
    const bearerHeader = headers['authorization'];
    let token;
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(' ');
        token = bearer?.[1];
        if(!token){
            return next(new ErrorHandler("please Login to access this resource",401));
        }
    }

    const decodeedData= jwt.verify(token,process.env.JWT_SECRET);

    
    req.user=await User.findById(decodeedData.id);

    next();


});


exports.authorizeRoles=(...roles)=>{


    return(req,res,next)=>{

        if(!roles.includes(req.user.role)){
            return next(
                new ErrorHandler(`Role : ${req.user.role} is not allow access this resource `,403)
            );
           

        }

        next();

    }
}

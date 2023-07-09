import Users from "../models/users.js";
import encrypt from "encryptjs";

export const checkRegister = (req,res,next) =>{
    try{
        const {username, email, password, confirmPassword} = req.body;
        if(!username) return res.send("Username is required middlewares.");
        if(!email) return res.send("email is required middlewares.");
        if(!password) return res.send("password is required middlewares.");
        if(!confirmPassword) return res.send("confirmPassword is required middlewares.");

        if(password.length < 8 || confirmPassword.length < 8){
            return res.send("Password should be 8 or more characters.");
        }
        if(password !== confirmPassword){
            return res.send("Credentials do not match.");
        }
        next();
    }catch(err){
        return res.send(err);
    }
}




export const checkLogin = async (req,res,next) =>{
    try{
        const {email, password} = req.body;
        if(!email) return res.send("Email is required.");
        if(!password) return res.send("Password is required.");

        const response = await Users.find({email}).exec();
        if(!response.length) return res.send("User not found.");

        let secretKey = "secretKey";
        console.log(response[0].password);
        const decryptPass = encrypt.decrypt(response[0].password, secretKey, 256);
        console.log(decryptPass);

        let flag = false;
        if(password === decryptPass){
            flag = true;
        }

        if(flag){
            next();
        }else{
            return res.json({"message" : "Incorrect Credentials", "success" : false});
        }


    }catch(err){
        return res.send(err);
    }
}
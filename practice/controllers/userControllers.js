import Users from "../models/users.js";
import encrypt from "encryptjs";

export const Register = async (req,res) =>{
    try {
        const {username, email, password} = req.body;
  
        const response = await Users.find({email}).exec();
        console.log(response);
        if(response.length) return res.send("user is already registered.");

        //encryption code
        let secretKey = "secretKey";
        const encryptPass = encrypt.encrypt(password, secretKey, 256);

        const newUser = new Users({
            username,
            email,
            password : encryptPass
        });

        await newUser.save();
        return res.send("Registration successful.");
    } catch (error) {
        return res.send(error);
    }
}

export const login = (req,res) =>{
    try {
        return res.json({"message" : "Login Successful.", "Success" : true});
    } catch (error) {
        return res.send(error);
    }
}
const express    = require('express');
const mongoose   = require('mongoose');
const bodyParser = require("body-parser");
const app        = express();
const PORT       = 3001;

const url = "mongodb+srv://Filmdados:TimeFlow@timeflow.bba95oe.mongodb.net/?retryWrites=true&w=majority"; 


mongoose.connection.on('connected', () => console.log('Connected'));
mongoose.connection.on('error',     () => console.log('Database connection error'));

const userSchema = new mongoose.Schema({
	Email: String,
	Name: String,
	Password: String,
	UserId: Number 
});

const User = mongoose.model("User", userSchema);

app.use(bodyParser.json());

app.post("/api/user/CreateUser", async(req, res) => {
    try{
        const {Email, Name, Password} = req.body;
        const emailFound = await User.findOne({Email: Email});
        const userFound  = await User.findOne({Name: Name});
        if(userFound){
            return res.status(400).json({error: "Username already exists"});
        }
        else if(emailFound){
            return res.status(400).json({error: "Email already exists"});
        }
        else{
            let id = await User.countDocuments() + 1;
            const u = new User({
                Name: Name,
                Email: Email,
                Password: Password,
                UserId: id
            });
            await u.save();
            return res.status(201).json({message: 'User created'});
        }

    } catch(error){
        console.log('something broke');
        return res.status(500).json({error: 'Something broke'});
    }
});

app.listen(PORT, () => {
    console.log(`user microservice on ${PORT}`);
}); 

async function createUserExample(){
    const name = 'linusson';
    const email = 'linusson@gmail.com';
    const password = 'hamburg321';
    await mongoose.connect(url);
    try{
        const response = await fetch("http://localhost:3001/api/user/CreateUser", {method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({ Email: email,
                Name: name,
                Password: password})});
        if(response.ok)
        {
            console.log(response);
            const successData = await response.json();
            console.error("User created successfully:", response.status, successData.message);
        }
        else if(!response.ok)
        {
            console.log(response);
            const errorData = await response.json();
            console.error("Failed to create user:", response.status, errorData.error);
        }
    }
    catch(error){
        console.error(error);
    }
}
createUserExample();
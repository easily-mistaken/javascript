const mongoose = require("mongoose");
const express = require("express")
const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://admin:music@cluster0.ea4sc.mongodb.net/userappnew")

const Users = mongoose.model('Users', { name: String, email: String, password: String });

app.post("/signup", async function(req, res) {
    // const username = req.body.username;
    // const password = req.body.password;
    // const name = req.body.name;
    const { username, password, name } = req.body;

    try{
        const existingUser = await Users.findOne({email: username});
        if(existingUser){
            return res.status(400).send("Username already exists");
    }

    const user = new Users({ 
        name: name,
        email: username,
        password: password
      });
    
    await user.save();
    res.json({
        msg: "User created successfully"
    });

} catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
}
});


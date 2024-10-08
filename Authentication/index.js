const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose")
const jwtPassword = "123456";

// mongoose.connect(
//     //mongoURL
// )

const app = express();
app.use(express.json());


function userExists(username, password) {
    // should check in the database
    
}

app.post("/signin", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username, password)) {
        return res.status(403).json({
            msg: "User doesn't exist in our memory db"
        });
    }

    let token = jwt.sign({username: username}, jwtPassword);
    return res.json({
        token,
    });
});

app.get("/users", function(req, res) {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        //return a list of users other than this username
        res.json({
            users: ALL_USERS.filter(function(value) {
                if(value.username == username) {
                    return false
                } else {
                    return true
                }
            })
        })
    } catch (err)  {
        return res.status(403).json({
            msg: "Invalid token"
        })
    }
});

app.listen(3000)
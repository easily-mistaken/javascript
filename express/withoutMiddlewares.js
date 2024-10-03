const express = require("express")

const app = express();

app.get('/health-checkup', function(req, res){
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if(username !== "prajjwal" || password !== "pass") {
        res.status(400).json({msg: "Something's up with your inputs"});
        return
    }

    if(kidneyId != 1 && kidneyId != 2){
        res.status(400).json({msg: "Something's up with your inputs"});
        console.log(kidneyId);
        return
    }

    // do something with kidney here
    res.json({
        msg: "Your kidney is fine!"
       })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
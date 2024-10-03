const express = require("express");

const app = express();

let totalResponseTime = 0;
let requestCount = 0;

function calculateRequests(req, res, next) {
    console.log(++requestCount);
    next();
}
app.use(calculateRequests);

function responseTimeMiddleware(req, res, next) {
    const start = process.hrtime(); 

    res.on("finish", () => {
        const elapsedTime = process.hrtime(start); // Calculate elapsed time
        const timeInMs = (elapsedTime[0] * 1e3 + elapsedTime[1] / 1e6); // Convert to milliseconds

        totalResponseTime += timeInMs;

        // Calculate average response time
        const averageResponseTime = totalResponseTime / requestCount;
        console.log(`Average Response Time: ${averageResponseTime.toFixed(2)} ms`);
    });

    next();
}

app.use(responseTimeMiddleware);

function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    if(username != "prajjwal" || password != "pass") {
        return res.status(403).json({msg: "Invalid user!"});
    }
    next();
}

function kidneyMiddleware(req, res, next) {
    const kidneyId = req.query.kidneyId;

    if(kidneyId !== "1" && kidneyId !== "2") {
        return res.status(403).json({msg: "Incorrect inputs"});
    }
    next();
}

app.get("/health-checkup", userMiddleware, kidneyMiddleware, function(req, res){
    setTimeout(() => {
        res.send("Your heart is healthy");
    }, Math.random() * 1000); // Random delay to simulate processing time
})

app.use(express.json())

app.post("/health-checkup", userMiddleware, kidneyMiddleware, function(req, res){
    res.send(req.body)
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")});
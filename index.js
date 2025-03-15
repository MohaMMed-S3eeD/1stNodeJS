const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/userSchema");
const Link_DB = require("./pass");
const app = express(); // تعريف الـ app قبل الاستخدام
const port = 3000; // تعريف الـ port قبل الاستخدام



mongoose
    .connect(Link_DB)
    .then(() => {
        console.clear();
        console.log("\n\n✅ Connected to the database successfully! 🚀\n\n");
        app.listen(port, () => {
            console.log(`🚀 Server is running on: 🌍 http://localhost:${port} (Listening on port ${port})`);
        });
    })
    .catch((err) => {
        console.log("Error in DB 💥💥💥💥  ", err);
    });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.sendFile("/views/index.html", { root: __dirname });
});
app.post("/", (req, res) => {
    console.log("log 1 :", req.body.userNameis); // يعرض البيانات المستلمة في الطلب
    // res.json({ message: "Data received successfully!", data: req.body });
    const userName = User(req.body);

    userName.save().then(() => {
        console.log("Data saved successfully!");
        console.log(userName);
        res.sendFile("/views/sec.html", { root: __dirname });
    }).catch((err) => {
        console.log("Error in saving data 💥💥💥💥  ", err);
        res.sendFile("/views/error.html", { root: __dirname });

    });
});

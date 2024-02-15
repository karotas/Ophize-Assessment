import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import dotenv from "dotenv"
import cors from "cors"
import model from "./db/schema.js";

import mongoose from "mongoose";
dotenv.config();


let app = express();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
mongoose.connect('mongodb://127.0.0.1:27017/myapp');


app.post("/login", async (req, res) => {

    try {
        if (!req.body.username || !req.body.password) {
            throw new Error("fields are required")
        }
        let user = await model.findOne({ username: req.body.username })

        if (!user) {
            throw new Error("no user found!")
        }
        let compare = await bcrypt.compare(req.body.password, user.password)
        if (!compare) {
            throw new Error("invalid password!")
        }
        let jwtHash = jwt.sign({username:user.username}, process.env.jwtKey, { expiresIn: "1h" })

        res.json({
            error: false,
            message: "successfully logined",
            jwt: jwtHash
        }).status(200)
    } catch (error) {
        res.json({
            error: true,
            message: error.message
        }).status(400)

    }
})

app.post("/register", async (req, res) => {

    try {
        let { username, password, email } = req.body
        if (!req.body.username || !req.body.password || !req.body.email) {
            throw new Error("fields are required")
        }

        password = await bcrypt.hash(password, 10)
        let insertData = await model.create({ password, email, username })

        res.json({
            error: false,
            message: "successfully created"
        }).status(200)



    } catch (error) {

        res.json({
            error: true,
            message: error.code == 11000 ? "user already exists" : error.message
        }).status(400)

    }


})

app.listen(4000, () => console.log(`port running at ${process.env.port}`))
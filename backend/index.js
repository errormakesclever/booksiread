// const express = require("express");
// const cors = require('cors')
// const mongoose = require("mongoose");

import express from "express"
import cors from "cors"
import mongoose from "mongoose"


mongoose.connect("mongodb+srv://yosuva:yosuva123@cluster0.9xeijrk.mongodb.net/?retryWrites=true&w=majority").then(() => {
    console.log('start');
})


const bookSchema = new mongoose.Schema({
    _id: String,
    title: String,
});

const Books = mongoose.model('books', bookSchema);
const app = express();
app.use(express.json());
app.use(cors())

app.get("/", async function (request, response) {
    const books = await Books.find({})
    console.log("get method : ", books)
    response.send(books);
})

app.post('/save', async function (request, response) {
    const newBook = new Books({
        _id: request.body._id,
        title: request.body.title,
    });
    await newBook.save()
    response.send("data is Saved...!")

})

app.get("/delete", async function (request, response) {
    console.log(request.query._id)
    const deletedDocument = await Books.findByIdAndDelete(request.query._id);
    response.send('Deleted...!');
})

app.get("/update", async function (request, response) {
    console.log(request.query._id)
    console.log(request.query.title)
    const deletedDocument = await Books.updateOne( { _id: request.query._id },
    { $set: { title:request.query.title } });
    response.send('Updated');
})

app.listen(3001, () => {
    console.log("The server is active on port 3001");
});

const express = require('express')
const app = express()
let cors = require('cors');
app.use(cors());
const fs = require("fs");

app.get('/', (req, res) => res.send('Hello World!'))

app.get("/data/:id", (req, res) => {
    const id = parseInt(req.params.id);
    fs.readFile(`./json files/${id}.json`, "utf8", (err, jsonString) => {
    if (err) {
        res.send("Error reading file from disk");
    }
    try {
        const data = JSON.parse(jsonString);
        res.send(data)
    } catch (err) {
        console.log("Error parsing JSON string");
    }
    });
})

app.get("/comments/:id", (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id)
    fs.readFile(`./json files/comments/${id}.json`, "utf8", (err, jsonString) => {
    if (err) {
        res.send("Error reading file from disk");
    }
    try {
        const data = JSON.parse(jsonString);
        res.send(data)
    } catch (err) {
        console.log("Error parsing JSON string");
    }
    });
})

app.post("/newpost", (req, res) => {
    const customer = {
        name: "Newbie Co.",
        order_count: 0,
        address: "Po Box City",
    }
    const jsonString = JSON.stringify(customer)
    const fileName = fs.readdirSync("./json files").length
    console.log(fileName)
    fs.writeFile(`./json files/${fileName}.json`, jsonString, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    })
    res.status(201).send()
})

module.exports = app;

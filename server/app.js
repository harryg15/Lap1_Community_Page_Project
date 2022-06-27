const express = require('express')
const app = express()
let cors = require('cors');
app.use(cors());
const fs = require("fs");
const path = require('path')
const bodyParser = require("body-parser")
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.get("/data", (req, res) => {
    let jsonArray = []
    const jsonsInDir = fs.readdirSync('./json files').filter(file => path.extname(file) === '.json');
    jsonsInDir.forEach(file => {
        const fileData = fs.readFileSync(path.join('./json files', file));
        json = JSON.parse(fileData.toString());
        jsonArray.push(json)
    });
    res.send(jsonArray)
})

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

app.post("/newpost", async (req, res) => {
    const data = await req.body;
    console.log(req.body)
    const jsonString = JSON.stringify(data)
    const fileName = fs.readdirSync("./json files").length

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

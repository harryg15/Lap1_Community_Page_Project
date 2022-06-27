const express = require('express')
const app = express()
const cors = require('cors');
const port = 3000;
const fs = require("fs");

app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'))

// To do: Create a route for retrieving all quotes
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

// const customer = {
//     name: "Newbie Co.",
//     order_count: 0,
//     address: "Po Box City",
// }
// const jsonString = JSON.stringify(customer)
// fs.writeFile('./newdata.json', jsonString, err => {
//     if (err) {
//         console.log('Error writing file', err)
//     } else {
//         console.log('Successfully wrote file')
//     }
// })

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

const {fetchFunction} = require("./api")
const { reverseChanges} = require('./helpers')
global.fetch


let APIKEY = "y64uvNhCUvczuf2GxjoZnEJW5C3IxlV1";

document.addEventListener("DOMContentLoaded", init);
async function init(giphy) {
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;
        let str = giphy
        url = url.concat(str);
        fetchData(url)
        
}

async function fetchData(url){
    try {
        await fetch(url)
            .then(response => response.json())
            .then(content => {
                //  data, pagination, meta
                createImage(content)
            })
        }
    catch{
        console.error("Couldn't find search term");
    };
}

function createImage(content) {
    let fig = document.createElement("figure");
    let img = document.createElement("img");
    img.src = content.data[0].images.downsized.url;
    img.alt = content.data[0].title;
    img.id = "gifFetched"
    fig.appendChild(img);


    let out = document.querySelector(".out");
    out.insertAdjacentElement("afterbegin", fig);
    document.querySelector("#giphy").value = "";

    // creating the generated 'Change Gif' button
    document.getElementById("gap").style.display = 'none';
    document.getElementById("giphy").style.display = 'none';
    document.getElementById("gif-search-btn").style.display = "none";
    let btn = document.createElement("button")
    btn.textContent = "Change Gif";
    btn.id = "gif-change-btn"
    let createChange = document.getElementById("div-change-btn")
    createChange.appendChild(btn)
    document.getElementById("giphy-title").style.display = "none";
    return "done"                
}

function buttonListen () {
        let title = document.getElementById("title-message").value
        let text = document.getElementById("blog-message").value
        let giphy = document.getElementById("gifFetched").src
        let array ={title: "", text: "", giphy: "", emoji1: "0", emoji2: "0", emoji3: "0"}
        array.title = title
        array.text = text
        array.giphy = giphy
        if (/^\s*$/.test(title) != true && /^\s*$/.test(text) != true){
            fetchFunction(array)
        }
}
document.addEventListener("DOMContentLoaded", buttonListen)

module.exports = {buttonListen, init, fetchData, createImage}

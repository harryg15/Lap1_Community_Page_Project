(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

let APIKEY = "y64uvNhCUvczuf2GxjoZnEJW5C3IxlV1";
// you will need to get your own API KEY
// https://developers.giphy.com/dashboard/
  
document.addEventListener("DOMContentLoaded", init);
function init() {
    document.getElementById("gif-search-btn").addEventListener("click", ev => {
        ev.preventDefault(); //to stop the page reload
        gifSearch()
    });
}

function gifSearch () {
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;
    let str = document.getElementById("giphy").value.trim();
    url = url.concat(str);
    fetch(url)
        .then(response => response.json())
        .then(content => {gifLoad(content)})
        .catch(err => {
            return ("Couldn't find search term");
        });
}

function gifLoad (content) {
    //  data, pagination, meta
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

    
    document.getElementById("gif-change-btn").addEventListener("click", ev => {
        ev.preventDefault();
        reverseChanges()
    })
}
    
function reverseChanges() {
    document.getElementById("gif-change-btn").remove()
    document.getElementById("gap").style.display = 'block';
    document.getElementById("giphy").style.display = 'inline-block';
    document.getElementById("gif-search-btn").style.display = 'unset';
    document.getElementById("giphy-title").style.display = "block";
    document.querySelector(".out").remove()
    let outer = document.getElementById("outer-div-out");
    let createOut = document.createElement("div");
    createOut.classList = "out";
    outer.appendChild(createOut)
}
    
function buttonListen () {
    const button = document.getElementById("mainButton")
    button.addEventListener("click", (e) =>{
        e.preventDefault()
        postReady()
    });
}

function postReady() {
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

document.addEventListener("DOMContentLoaded", buttonListen);

async function fetchFunction (array) {
    options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(array)
    }
    await fetch("https://murmuring-crag-50704.herokuapp.com/newpost", options)
    window.location.href="index.html"
}

module.exports = {init, gifSearch, gifLoad, reverseChanges, buttonListen, postReady, fetchFunction}

},{}]},{},[1]);

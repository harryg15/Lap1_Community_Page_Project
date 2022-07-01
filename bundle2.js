(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let section = document.querySelector("div")

var emoji1Update = function (){}
var emoji2Update = function (){}
var emoji3Update = function (){}


document.addEventListener("DOMContentLoaded", init);
function init () {
    fetch("https://murmuring-crag-50704.herokuapp.com/data")
        .then((resp) => resp.json())
        .then((result) => {
            mainLoop(result, section)
        })
        .catch(err => {
            return ("Couldn't find search term");
        });
}

function mainLoop (result, section) {
    section = document.querySelector("div")
    for (let i = result.length-1; i>=0; i--){
        const newDiv = document.createElement("div")
        let id = i + 1
        newDiv.id = id
        newDiv.classList = "mainDiv"
        const newTitle = document.createElement("h1")
        newTitle.textContent = result[i].title
        newTitle.classList = "post-title"
        const newText = document.createElement("p")
        newText.classList = "description"
        newText.textContent = result[i].text
        const newGif = document.createElement("img")
        newGif.src = result[i].giphy
        
        const emojiButton1 = document.createElement("button")
        emojiButton1.id = `1emoji${id}`
        let emoji1Value = result[i].emoji1
        emojiButton1.textContent = emoji1Value + "👍"

        const emojiButton2 = document.createElement("button")
        emojiButton2.id = `2emoji${id}`
        let emoji2Value = result[i].emoji2
        emojiButton2.textContent = emoji2Value + "👎"

        const emojiButton3 = document.createElement("button")
        emojiButton3.id = `3emoji${id}`
        let emoji3Value = result[i].emoji3
        emojiButton3.textContent = emoji3Value + "⭐"
        

        newDiv.append(newTitle, newText, newGif, emojiButton1, emojiButton2, emojiButton3)
        section.append(newDiv)

        const emojiButton1Select = document.getElementById(`1emoji${id}`)
        let counter = 0
        counter = sessionStorage.getItem(`counter${id}`);
        
        async function postEmoji() {
            const emojiArray = {title: "", text: "", giphy: "", emoji1: "0", emoji2: "0", emoji3: "0", id: "" }
            emojiArray.title = result[i].title
            emojiArray.text = result[i].text
            emojiArray.giphy = result[i].giphy
            emojiArray.emoji1 = emoji1Value
            emojiArray.emoji2 = emoji2Value
            emojiArray.emoji3 = emoji3Value
            emojiArray.id = id
            options = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(emojiArray)
            }
        await fetch("https://murmuring-crag-50704.herokuapp.com/newemoji", options)
        }

        emoji1Update = function (){
            if(counter%2 == 0){
                emoji1Value++
                counter++
                sessionStorage.setItem(`counter${id}`, counter);
            } else{
                emoji1Value--
                counter++
                sessionStorage.setItem(`counter${id}`, counter);
            }
            emojiButton1.textContent = emoji1Value + "👍"
            postEmoji()
        }
        emojiButton1Select.addEventListener("click", emoji1Update)

        const emojiButton2Select = document.getElementById(`2emoji${id}`)
        let twocounter = 0
        twocounter = sessionStorage.getItem(`twocounter${id}`);
        emoji2Update = function (){
            if(twocounter%2 == 0){
                emoji2Value++
                twocounter++
                sessionStorage.setItem(`twocounter${id}`, twocounter);

            } else{
                emoji2Value--
                twocounter++
                sessionStorage.setItem(`twocounter${id}`, twocounter);
            }
            emojiButton2.textContent = emoji2Value + "👎"
            postEmoji()
        }
        emojiButton2Select.addEventListener("click", emoji2Update)
        const emojiButton3Select = document.getElementById(`3emoji${id}`)
        let threecounter = 0
        threecounter = sessionStorage.getItem(`threecounter${id}`);
        
        emoji3Update = function (){
            if(threecounter%2 == 0){
                emoji3Value++
                threecounter++
                sessionStorage.setItem(`threecounter${id}`, threecounter);

            } else{
                emoji3Value--
                threecounter++
                sessionStorage.setItem(`threecounter${id}`, threecounter);
            }
            emojiButton3.textContent = emoji3Value + "⭐"
            postEmoji()
        }
        emojiButton3Select.addEventListener("click", emoji3Update)

        fetchComments(id)
    }
}

async function postFunction (array) {
    options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(array)
    }
await fetch("https://murmuring-crag-50704.herokuapp.com/newcomment", options)
}

function fetchComments(id){
    fetch(`https://murmuring-crag-50704.herokuapp.com/data/${id}`)
            .then((resp) => resp.json())
            .then((result) => {
                createComments(result, id)
            }).catch(err => {
                return ("Couldn't find search term");
            });

}

function createComments (result, id){
    const post = document.getElementById(`${id}`)
    const newDiv = document.createElement("div")
    newDiv.classList = "commentClass"
    for (let i = 0; i<result.length; i++){
        const newComment = document.createElement("p")
        newComment.textContent = result[i].comment
        newDiv.append(newComment)
    }
    const newBox = document.createElement("textArea")
    newBox.id = `a${id}`
    newBox.classList = "commentInput"
    newBox.placeholder = "Any thoughts? Post a comment here..."
    const newSubmit = document.createElement("button")
    const spanSubmit = document.createElement("span")
    newSubmit.id = `b${id}`
    newSubmit.textContent = "Comment"
    newSubmit.classList = "newSubmit"
    newSubmit.appendChild(spanSubmit)
    newDiv.append(newBox, newSubmit)
    post.append(newDiv)
    const button = document.getElementById(`b${id}`)
    button.addEventListener("click", (e) =>{
        e.preventDefault()
        sendArray(button, newBox, id)
    }); 
}

function sendArray(button, newBox, id){
    let commentID = document.getElementById(`a${id}`)
    let array ={comment: "", id: ""}
    array.comment = commentID.value
    array.id = id

    const commentDiv = button.parentNode
    const newComment = document.createElement("p")
    newComment.textContent = array.comment
    commentDiv.insertBefore(newComment, newBox)
    newBox.value = ""
    postFunction(array)
}

module.exports = {init, mainLoop, postFunction, fetchComments, createComments, sendArray, emoji1Update, emoji2Update, emoji3Update}

},{}]},{},[1]);

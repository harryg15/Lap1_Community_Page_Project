const button = document.querySelector("button")

button.addEventListener("click", () =>{
    let title = "post3"
    let text = "writing test"
    let giphy = "https://media1.giphy.com/media/9QWwgHzvuC7As/giphy.gif"
    let array ={title: "", text: "", giphy: "", emoji1: "", emoji2: "", emoji3: ""}
    array.title = title
    array.text = text
    array.giphy = giphy
    array.emojis = emojis
    fetchFunction(array)
           
});

async function fetchFunction (array) {
    options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(array)
    }
    await fetch("http://localhost:3000/newpost", options)
}

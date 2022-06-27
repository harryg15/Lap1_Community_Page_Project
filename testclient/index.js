const button = document.querySelector("button")

button.addEventListener("click", () =>{
    let title = "post3"
    let text = "writing test"
    let giphy = "xT4uQulxzV39haRFjG"
    let emojis = "👍👍👍👍"
    let array ={title: "", text: "", giphy: "", emojis: ""}
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

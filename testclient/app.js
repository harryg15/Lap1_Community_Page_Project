const section = document.querySelector("section")

fetch("http://localhost:3000/data/")
    .then((resp) => resp.json())
    .then((result) => {
        for (let i = result.length-1; i>=0; i--){
            const newDiv = document.createElement("div")
            const newTitle = document.createElement("h1")
            newTitle.textContent = result[i].title
            const newText = document.createElement("p")
            newText.textContent = result[i].text
            
            newDiv.append(newTitle)
            newDiv.append(newText)
            section.append(newDiv)
        }
    })

const section = document.querySelector("section")

fetch("http://localhost:3000/data/")
    .then((resp) => resp.json())
    .then((result) => {
        for (let i = result.length-1; i>=0; i--){
            const newDiv = document.createElement("div")
            let id = i + 1
            newDiv.id = id
            const newTitle = document.createElement("h1")
            newTitle.textContent = result[i].title
            const newText = document.createElement("p")
            newText.textContent = result[i].text
            
            newDiv.append(newTitle, newText)
            section.append(newDiv)
            fetch(`http://localhost:3000/data/${id}`)
                .then((resp) => resp.json())
                .then((result) => {
                    const post = document.getElementById(`${id}`)
                    const newDiv = document.createElement("div")
                    for (let i = 0; i<result.length; i++){
                        const newComment = document.createElement("p")
                        newComment.textContent = result[i].comment
                        newDiv.append(newComment)
                    }
                    const newBox = document.createElement("input")
                    newBox.id = `a${id}`
                    const newSubmit = document.createElement("button")
                    newSubmit.id = `b${id}`
                    newDiv.append(newBox, newSubmit)
                    post.append(newDiv)
                    const button = document.getElementById(`b${id}`)
                    button.addEventListener("click", (e) =>{
                        e.preventDefault()
                        let commentID = document.getElementById(`a${id}`)
                        let array ={comment: "", id: ""}
                        array.comment = commentID.value
                        array.id = id
                        console.log(array)
                        fetchFunction(array)
                    }); 
            
                    async function fetchFunction (array) {
                        options = {
                            method: 'POST',
                            headers: {'Content-Type': 'application/json'},
                            body: JSON.stringify(array)
                        }
                    await fetch("http://localhost:3000/newcomment", options)
                    }
            })
            
            
        }
    })


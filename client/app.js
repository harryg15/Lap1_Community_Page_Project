const section = document.querySelector("section")

let counter = 0
counter = sessionStorage.getItem("counter");

fetch("http://localhost:3000/data/")
    .then((resp) => resp.json())
    .then((result) => {
        for (let i = result.length-1; i>=0; i--){
            const newDiv = document.createElement("div")
            let id = i + 1
            newDiv.id = id
            newDiv.classList = "mainDiv"
            const newTitle = document.createElement("h1")
            newTitle.textContent = result[i].title
            const newText = document.createElement("p")
            newText.textContent = result[i].text
            const newGif = document.createElement("img")
            newGif.src = result[i].giphy
            
            const emojiButton1 = document.createElement("button")
            emojiButton1.id = `emoji${id}`
            let emoji1Value = result[i].emoji1
            emojiButton1.textContent = emoji1Value + "👍"

            newDiv.append(newTitle, newText, newGif, emojiButton1)
            section.append(newDiv)

            const emojiButton1Select = document.getElementById(`emoji${id}`)
            emojiButton1Select.addEventListener("click", () =>{
                if(counter%2 == 0){
                    emoji1Value--
                    counter++
                    sessionStorage.setItem("counter", counter);

                } else{
                    emoji1Value++
                    counter++
                    sessionStorage.setItem("counter", counter);

                }
                
                const emojiArray = {title: "", text: "", giphy: "", emoji1: "0", emoji2: "0", emoji3: "0", id: "" }
                emojiArray.title = result[i].title
                emojiArray.text = result[i].text
                emojiArray.giphy = result[i].giphy
                emojiArray.emoji1 = emoji1Value
                emojiArray.id = id
                postEmoji(emojiArray)
            })

            async function postEmoji (emojiArray) {
                options = {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(emojiArray)
                }
            await fetch("http://localhost:3000/newemoji", options)
            }

            fetch(`http://localhost:3000/data/${id}`)
                .then((resp) => resp.json())
                .then((result) => {
                    const post = document.getElementById(`${id}`)
                    const newDiv = document.createElement("div")
                    newDiv.classList = "commentClass"
                    for (let i = 0; i<result.length; i++){
                        const newComment = document.createElement("p")
                        newComment.textContent = result[i].comment
                        newDiv.append(newComment)
                    }
                    const newBox = document.createElement("input")
                    newBox.id = `a${id}`
                    newBox.classList = "commentInput"
                    const newSubmit = document.createElement("button")
                    newSubmit.id = `b${id}`
                    newSubmit.textContent = "submit"
                    newDiv.append(newBox, newSubmit)
                    post.append(newDiv)
                    const button = document.getElementById(`b${id}`)
                    button.addEventListener("click", (e) =>{
                        e.preventDefault()
                        let commentID = document.getElementById(`a${id}`)
                        let array ={comment: "", id: ""}
                        array.comment = commentID.value
                        array.id = id
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


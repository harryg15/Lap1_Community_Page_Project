const section = document.querySelector("div")


fetch("https://murmuring-crag-50704.herokuapp.com/data")
    .then((resp) => resp.json())
    .then((result) => {
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
            emojiButton1Select.addEventListener("click", () =>{
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
            })
            const emojiButton2Select = document.getElementById(`2emoji${id}`)
            let twocounter = 0
            twocounter = sessionStorage.getItem(`twocounter${id}`);
            emojiButton2Select.addEventListener("click", () =>{
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
            })
            const emojiButton3Select = document.getElementById(`3emoji${id}`)
            let threecounter = 0
            threecounter = sessionStorage.getItem(`threecounter${id}`);
            emojiButton3Select.addEventListener("click", () =>{
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
            })
            async function postEmoji () {
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
            fetch(`https://murmuring-crag-50704.herokuapp.com/data/${id}`)
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
                    const newBox = document.createElement("textArea")
                    newBox.id = `a${id}`
                    newBox.classList = "commentInput"
                    newBox.placeholder = "Any thoughts? Post a comment here..."
                    const newSubmit = document.createElement("button")
                    const spanSubmit = document.createElement("span")
                    newSubmit.id = `b${id}`
                    spanSubmit.textContent = "Comment"
                    newSubmit.classList = "newSubmit"
                    newSubmit.appendChild(spanSubmit)
                    newDiv.append(newBox, newSubmit)
                    post.append(newDiv)
                    const button = document.getElementById(`b${id}`)
                    button.addEventListener("click", (e) =>{
                        e.preventDefault()
                        let commentID = document.getElementById(`a${id}`)
                        let array ={comment: "", id: ""}
                        array.comment = commentID.value
                        array.id = id
                        const commentDiv = button.parentNode
                        const newComment = document.createElement("p")
                        newComment.textContent = array.comment
                        commentDiv.insertBefore(newComment, newBox)
                        newBox.value = ""
                        fetchFunction(array)
                    }); 
            
                    async function fetchFunction (array) {
                        options = {
                            method: 'POST',
                            headers: {'Content-Type': 'application/json'},
                            body: JSON.stringify(array)
                        }
                    await fetch("https://murmuring-crag-50704.herokuapp.com/newcomment", options)
                    }
            })
        }
    })

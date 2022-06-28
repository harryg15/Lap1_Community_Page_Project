const section = document.querySelector("section")


// let counter2 = 0
// let counter3 = 0

// counter2 = sessionStorage.getItem("counter2");
// counter3 = sessionStorage.getItem("counter3");

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


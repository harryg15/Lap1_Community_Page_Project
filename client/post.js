
    let APIKEY = "y64uvNhCUvczuf2GxjoZnEJW5C3IxlV1";
    // you will need to get your own API KEY
    // https://developers.giphy.com/dashboard/
    document.addEventListener("DOMContentLoaded", init);
    function init() {
        document.getElementById("gif-search-btn").addEventListener("click", ev => {
            ev.preventDefault(); //to stop the page reload
            let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;
            let str = document.getElementById("giphy").value.trim();
            url = url.concat(str);
            console.log(url);
            fetch(url)
                .then(response => response.json())
                .then(content => {
                    //  data, pagination, meta
                    console.log(content.data);
                    console.log("META", content.meta);
                    let fig = document.createElement("figure");
                    let img = document.createElement("img");
                    img.src = content.data[0].images.downsized.url;
                    img.alt = content.data[0].title;
                    fig.appendChild(img);
                    let out = document.querySelector(".out");
                    out.insertAdjacentElement("afterbegin", fig);
                    document.querySelector("#giphy").value = "";

                    // creating the generated 'Change Gif' button
                    document.getElementById("gap").style.display = 'none';
                    document.getElementById("giphy").style.display = 'none';
                    document.getElementById("gif-search-btn").style.display = "none";
                    let btn = document.createElement("button")
                    btn.textContent = "Change gif";
                    btn.id = "gif-change-btn"
                    let createChange = document.getElementById("div-change-btn")
                    createChange.appendChild(btn)
                    document.getElementById("giphy-title").style.display = "none";


                    document.getElementById("gif-search-btn").addEventListener("click", ev => {
                        ev.preventDefault();
                        reverseChanges()
                    })
                })
                .catch(err => {
                    console.error(err);
                });
        });
    }


    function reverseChanges() {
        document.getElementById("gap").style.display = 'unset';
        document.getElementById("giphy").style.display = 'unset';
        document.getElementById("gif-search-btn").style.display = 'unset';
        document.getElementById("giphy-title").style.display = "unset";
        document.querySelector(".out").remove()
        init()
    }

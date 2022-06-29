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


module.exports = {reverseChanges}

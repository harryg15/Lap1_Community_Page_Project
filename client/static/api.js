// const { reverseChanges} = require('./helpers')

async function fetchFunction (array) {
    options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(array)
    }
    await fetch("https://murmuring-crag-50704.herokuapp.com/newpost", options)
    window.location.href="index.html"
}

module.exports = {fetchFunction}

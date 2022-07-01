const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

let index = require('../app');

global.fetch = require('jest-fetch-mock')

describe('helpers', () => {

    describe('mode helpers', () => {
        beforeEach(() => {
            document.documentElement.innerHTML = html.toString()
        })
        
        describe('Page loads', () => {
            test('Correct page loads', () => {
                body = document.querySelector('body')
                expect(body.className).toBe("feedBody")
                
            })
        })
        describe('fetching', () => {
            test('fetching the posts info', async () => {
                index.init()
                expect(fetch).toHaveBeenCalledWith("https://murmuring-crag-50704.herokuapp.com/data")
            })
            test('fetching the comments info with id 2', async () => {
                index.fetchComments(2)
                expect(fetch).toHaveBeenCalledWith(`https://murmuring-crag-50704.herokuapp.com/data/2`)
            })
        })
        describe('testing main loop', () => {
            test('Posts should be loaded and comments too', () => {
                let result = [
                    {
                        "title": "Mega",
                        "text": "First post",
                        "giphy": "https://media1.giphy.com/media/9QWwgHzvuC7As/giphy.gif",
                        "emoji1": 6,
                        "emoji2": 2,
                        "emoji3": 0
                    },
                    {
                        "title": "Post2",
                        "text": "Second post",
                        "giphy": "https://media1.giphy.com/media/9QWwgHzvuC7As/giphy.gif",
                        "emoji1": 15,
                        "emoji2": 7,
                        "emoji3": 0
                    },
                    {
                        "title": "Sorry I had to restart the server",
                        "text": "test",
                        "giphy": "https://media3.giphy.com/media/8EmeieJAGjvUI/giphy-downsized.gif?cid=ef4bd7ebk4nwquqgo1rjyz1ktx15okwmh3yycv8a4n0oiytl&rid=giphy-downsized.gif&ct=g",
                        "emoji1": 0,
                        "emoji2": 0,
                        "emoji3": "0"
                    },
                    {
                        "title": "hello",
                        "text": "hello",
                        "giphy": "https://media3.giphy.com/media/3pZipqyo1sqHDfJGtz/giphy.gif?cid=ef4bd7ebl0t10iu1t3nqqqc91v4li7pk6xwrfjq8qhwhrejs&rid=giphy.gif&ct=g",
                        "emoji1": 0,
                        "emoji2": 1,
                        "emoji3": 1
                    }
                ]
                const section = document.querySelector("section")
                index.mainLoop(result, section)
                const post = document.getElementsByClassName("mainDiv")
                expect(post).not.toBe(null)
                let result2 = [
                    {
                        "comment": "hello"
                    },
                    {
                        "comment": "new comment"
                    }
                ]
                let id = 2
                index.createComments(result2, id)
                let button = document.getElementById(`b${id}`)
                expect(button).not.toBe(null)
                let newBox = document.getElementById(`a${id}`)
                index.sendArray(button, newBox, id)
            })

        })
        describe('Testing emoji functions', () => {
            test('Emoji 1', () => {
                index.emoji1Update()
                expect().toBe()
                // expect(index.postEmoji()).toHaveBeenCalledWith(index.emoji1Update())
            })
            test('Emoji 2', () => {
                index.emoji2Update()
                expect().toBe()
                // expect(index.postEmoji()).toHaveBeenCalledWith(index.emoji1Update())
            })
            test('Emoji 3', () => {
                index.emoji3Update()
                expect().toBe()
                // expect(index.postEmoji()).toHaveBeenCalledWith(index.emoji1Update())
            })
        })
        
    })
})

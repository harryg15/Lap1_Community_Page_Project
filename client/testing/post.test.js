const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../post.html'), 'utf8');

describe('index.html', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    })
    describe("head", () => {
        test("it has a title", () =>{
            const title = document.querySelector("title")
            expect(title).toBeTruthy();
            expect(title.innerHTML).toContain("Create A Post")
        })
    })
})




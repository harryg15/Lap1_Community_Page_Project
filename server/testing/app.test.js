const request = require("supertest");
const app = require("../app")

describe ("Api server", () => {
    let api;

    beforeAll(() => {
        api = app.listen(5005, () => {
            console.log("Test server running on port 5005")
        })
    })
    afterAll((done) => {
        console.log("Gracefully stopping test server");
        api.close(done)
    })

    describe("Checking if pages load", () =>{
        test("responds with status of 200 at /data/1", (done) => {
            request(api).get("/data/1").expect(200, done)
        })
        test("responds with status of 200 at /comments/1001", (done) => {
            request(api).get("/comments/1001").expect(200, done)
        })
    })

    describe("Checking values of pages", () =>{
        test("gets correct data at /data/1", (done) => {
            request(api).get("/data/1").expect({
                "text": "Mega Corp",
                "giphy" : "xT4uQulxzV39haRFjG",
                "emojis": "👍👍👍👍"
            }, done)
        })
        test("gets correct data at /comments/1001", (done) => {
            request(api).get("/comments/1001").expect({"comment": "hello"}, done)
        })
    })

    // describe("Checking new page", () =>{
    //     test("new json file should be made", (done) => {
    //         request(api).post("/newpost").expect(201, done)
    //     })
    // })
})

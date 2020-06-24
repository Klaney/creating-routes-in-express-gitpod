const request = require("supertest")
const app = require("./index");
test("Should have a hellow world route", async () => {
    const response = await request(app).get("/").expect(200);
    expect(response.body).toEqual("hello world")
})
const request = require("supertest");

describe("Characters API Route", () => {
  const url = "http://localhost:3000";

  test("GET /characters", async () => {});
  request(url)
    .get("/characters")
    .set("Accept", "application/json")
    .set("Content-Type", "application/json")
    .end(function (err, res) {
      expect(res.statusCode).toEqual(200);
      if (err) {
        throw err;
      }
    });
});

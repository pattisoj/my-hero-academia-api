const request = require("supertest");
const data = require("../data/characters.json");

describe("Characters API Route", () => {
  const url = "http://localhost:3000";
  const dataLength = data.students.length;
  // console.log(dataLength);
  const i = Math.floor(Math.random() * dataLength);
  // console.log(i);

  test("GET /characters", async () => {
    request(url)
      .get("/characters")
      .set("Accept", "application/json")
      .set("Content-Type", "application/json")
      .end(function (err, res) {
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toBeGreaterThan(0);
        expect(res.body[i]).toHaveProperty("id");
        expect(res.body[i]).toHaveProperty("name");
        expect(res.body[i]).toHaveProperty("name_japanese");
        expect(res.body[i]).toHaveProperty("other_names");
        expect(res.body[i]).toHaveProperty("quirk_japanese");
        expect(res.body[i]).toHaveProperty("quirk_description");
        expect(res.body[i]).toHaveProperty("class");
        if (err) {
          throw err;
        }
      });
  });
});

const request = require("supertest");
const data = require("../data/characters.json");
const app = require("../app");

describe("Characters API Route", () => {
  const dataLength = data.students.length;
  // console.log(dataLength);
  const i = Math.floor(Math.random() * dataLength);
  // console.log(i);

  it("responds with json", function (done) {
    request(app)
      .get("/characters")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });

  it("has correct structure for students", function (done) {
    request(app)
      .get("/characters")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(hasCorrectStructure)
      .expect(200, done);

    function hasCorrectStructure(res) {
      if (!("id" in res.body[i])) throw new Error("missing id property");
      if (!("name" in res.body[i])) throw new Error("missing name property");
      if (!("name_japanese" in res.body[i]))
        throw new Error("missing name_japanese property");
      if (!("other_names" in res.body[i]))
        throw new Error("missing other_names property");
      if (!("quirk_japanese" in res.body[i]))
        throw new Error("missing quirk_japanese property");
      if (!("quirk_description" in res.body[i]))
        throw new Error("missing quirk_description property");
      if (!("class" in res.body[i])) throw new Error("missing class property");
    }
  });
});

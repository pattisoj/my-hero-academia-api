const request = require("supertest");
const data = require("../data/characters.json");
const app = require("../app");

describe("Characters API Route", () => {
  it("/ responds with json", function (done) {
    request(app)
      .get("/characters")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(hasContent)
      .expect(200, done);

    function hasContent(res) {
      if (!(Object.keys(res.body).length > 0))
        throw new Error("/ has no content");
    }
  });

  it("/students responds with json", function (done) {
    request(app)
      .get("/characters/students")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(hasContent)
      .expect(200, done);

    function hasContent(res) {
      if (!(res.body.length > 0)) throw new Error("/students has no content");
    }
  });

  it("/villains responds with json", function (done) {
    request(app)
      .get("/characters/villains")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(hasContent)
      .expect(200, done);

    function hasContent(res) {
      if (!(res.body.length > 0)) throw new Error("/villains has no content");
    }
  });

  it("/heroes responds with json", function (done) {
    request(app)
      .get("/characters/heroes")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(hasContent)
      .expect(200, done);

    function hasContent(res) {
      if (!(res.body.length > 0)) throw new Error("/heroes has no content");
    }
  });

  it("/{id} responds with json", function (done) {
    request(app)
      .get("/characters/1")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(hasContent)
      .expect(200, done);

    function hasContent(res) {
      if (!(Object.keys(res.body).length > 0))
        throw new Error("/{id} has no content");
    }
  });

  it("has correct structure for students", function (done) {
    request(app)
      .get("/characters")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(hasCorrectStructure)
      .expect(200, done);

    function hasCorrectStructure(res) {
      for (i = 0; res.body.students.length > i; i++) {
        if (!("id" in res.body.students[i]))
          throw new Error("missing id property");
        if (!("name" in res.body.students[i]))
          throw new Error("missing name property");
        if (!("name_japanese" in res.body.students[i]))
          throw new Error("missing name_japanese property");
        if (!("other_names" in res.body.students[i]))
          throw new Error("missing other_names property");
        if (!("quirk" in res.body.students[i]))
          throw new Error("missing quirk property");
        if (!("quirk_japanese" in res.body.students[i]))
          throw new Error("missing quirk_japanese property");
        if (!("quirk_description" in res.body.students[i]))
          throw new Error("missing quirk_description property");
        if (!("hero_school" in res.body.students[i]))
          throw new Error("missing hero_school property");
        if (!("class" in res.body.students[i]))
          throw new Error("missing class property");
      }
    }
  });

  it("has correct structure for villains", function (done) {
    request(app)
      .get("/characters")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(hasCorrectStructure)
      .expect(200, done);

    function hasCorrectStructure(res) {
      for (i = 0; res.body.villains.length > i; i++) {
        if (!("id" in res.body.villains[i]))
          throw new Error("missing id property");
        if (!("name" in res.body.villains[i]))
          throw new Error("missing name property");
        if (!("name_japanese" in res.body.villains[i]))
          throw new Error("missing name_japanese property");
        if (!("other_names" in res.body.villains[i]))
          throw new Error("missing other_names property");
        if (!("quirk" in res.body.villains[i]))
          throw new Error("missing quirk property");
        if (!("quirk_japanese" in res.body.villains[i]))
          throw new Error("missing quirk_japanese property");
        if (!("quirk_description" in res.body.villains[i]))
          throw new Error("missing quirk_description property");
        if (!("affiliation" in res.body.villains[i]))
          throw new Error("missing affiliation property");
      }
    }
  });

  it("has correct structure for heroes", function (done) {
    request(app)
      .get("/characters")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(hasCorrectStructure)
      .expect(200, done);

    function hasCorrectStructure(res) {
      for (i = 0; res.body.heroes.length > i; i++) {
        if (!("id" in res.body.heroes[i]))
          throw new Error("missing id property");
        if (!("name" in res.body.heroes[i]))
          throw new Error("missing name property");
        if (!("name_japanese" in res.body.heroes[i]))
          throw new Error("missing name_japanese property");
        if (!("hero_name" in res.body.heroes[i]))
          throw new Error("missing hero_name property");
        if (!("hero_name_japanese" in res.body.heroes[i]))
          throw new Error("missing hero_name_japanese property");
        if (!("quirk" in res.body.heroes[i]))
          throw new Error("missing quirk property");
        if (!("quirk_japanese" in res.body.heroes[i]))
          throw new Error("missing quirk_japanese property");
        if (!("quirk_description" in res.body.heroes[i]))
          throw new Error("missing quirk_description property");
        if (!("affiliation" in res.body.heroes[i]))
          throw new Error("missing affiliation property");
      }
    }
  });

  it("has correct structure for other", function (done) {
    request(app)
      .get("/characters")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(hasCorrectStructure)
      .expect(200, done);

    function hasCorrectStructure(res) {
      for (i = 0; res.body.other.length > i; i++) {
        if (!("id" in res.body.other[i]))
          throw new Error("missing id property");
        if (!("name" in res.body.other[i]))
          throw new Error("missing name property");
        if (!("name_japanese" in res.body.other[i]))
          throw new Error("missing name_japanese property");
        if (!("type" in res.body.other[i]))
          throw new Error("missing type property");

        if (res.body.other[i].type == "Civilian") {
          if (!("civilian_description" in res.body.other[i]))
            throw new Error("missing civilian_description property");
        }
      }
    }
  });

  it("has correct structure for one {id}", function (done) {
    request(app)
      .get("/characters/1")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(hasCorrectStructure)
      .expect(200, done);

    function hasCorrectStructure(res) {
      if (!("id" in res.body)) throw new Error("missing id property");
      if (!("name" in res.body)) throw new Error("missing name property");
      if (!("name_japanese" in res.body))
        throw new Error("missing name_japanese property");
      if (!("other_names" in res.body))
        throw new Error("missing other_names property");
      if (!("quirk" in res.body)) throw new Error("missing quirk property");
      if (!("quirk_japanese" in res.body))
        throw new Error("missing quirk_japanese property");
      if (!("quirk_description" in res.body))
        throw new Error("missing quirk_description property");
      if (!("class" in res.body)) throw new Error("missing class property");
    }
  });
});

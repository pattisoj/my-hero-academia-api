const data = require("../data/characters.json");

// GET A CHARACTER BY ID
function getCharacterByID(id) {
  let searchedCharacter = {};
  let numID = Number(id);

  for (let i = 0; i < data.students.length; i++) {
    if (numID == data.students[i].id) {
      searchedCharacter = data.students[i];
    }
  }

  for (let i = 0; i < data.villains.length; i++) {
    if (numID == data.villains[i].id) {
      searchedCharacter = data.villains[i];
    }
  }

  for (let i = 0; i < data.heroes.length; i++) {
    if (numID == data.heroes[i].id) {
      searchedCharacter = data.heroes[i];
    }
  }

  for (let i = 0; i < data.other.length; i++) {
    if (numID == data.other[i].id) {
      searchedCharacter = data.other[i];
    }
  }

  return searchedCharacter;
}

module.exports = { characterByID: getCharacterByID };

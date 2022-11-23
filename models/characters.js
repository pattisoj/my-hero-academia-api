const data = require("../data/characters.json");

// GET A CHARACTER BY ID
function getCharacterByID(id) {
  let searchedCharacter = {};
  let numID = Number(id);

  if (numID > 45) {
    if (numID > 91) {
      for (let i = 0; i < data.heroes.length; i++) {
        if (numID == data.heroes[i].id) {
          searchedCharacter = data.heroes[i];
        }
      }
    } else {
      for (let i = 0; i < data.villains.length; i++) {
        if (numID == data.villains[i].id) {
          searchedCharacter = data.villains[i];
        }
      }
    }
  } else {
    for (let i = 0; i < data.students.length; i++) {
      if (numID == data.students[i].id) {
        searchedCharacter = data.students[i];
      }
    }
  }

  return searchedCharacter;
}

module.exports = { characterByID: getCharacterByID };

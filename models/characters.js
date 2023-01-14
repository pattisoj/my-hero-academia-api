const data = require("../data/characters.json");

// GET A CHARACTER BY ID
function getCharacterByID(id) {
  let searchedCharacter = {};
  let numID = Number(id);

  for (const key in data) {
    for (let i = 0; i < data[key].length; i++) {
      if (numID == data[key][i].id) {
        searchedCharacter = data[key][i];
      }
    }
  }

  return searchedCharacter;
}

module.exports = { characterByID: getCharacterByID };

const entireCatalog = require("./songs.js");

/* 
    Welcome to Funkify, the music streaming service that always
    brings you the funkiest music ever made!!

    We have acquired a large catalog of songs from several 
    distributors. The songs are from all kinds of genres, but here
    at Funkify, we only bring the funk. We need this team to 
    solve this problem for us.

    We need to see a collection of songs that are only funk.

    Once you have that new collection, display the name of each
    song followed by its duration in seconds. For example:

    "The song 'conglomeration' is 303 seconds long"
    "The song 'context-sensitive' is 406 seconds long"

    And so on...

*/

/* 1. we need a empty variable array named onlySongsThatAreFunk
    2. we need a for of loop to loop through the cattalog 
    3. we need a conditional if that finds only funk
    4. we need to push the enitre object to the new array onlySongsThatAreFunk
    5. we need to loop through the new array funkSongs.
    6. we need to print the name of the song and the durration.
    console.lot(`The song ${funksongs.songName} is ${funkSongs.duration} seconds long`)
*/
const funkSongs = []; //Empty variable array

const findFunk = () => {
  for (const songList of entireCatalog) {
    if (songList.genre === "Funk") {
      funkSongs.push(songList);
    }
  }
  return funkSongs;
};

const foundFunk = findFunk();

console.log(foundFunk);

for (const song of funkSongs) {
  console.log(`The song ${song.songName} is ${song.duration} seconds long`);
}
//songs.genre.includes(criteria)

console.log(`There are ${entireCatalog.length} songs available in the catalog`);
console.log(entireCatalog.splice(0, 5));
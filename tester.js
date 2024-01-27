import GAMES_DATA from './games.js';

// create a list of objects to store the data about the games using JSON.parse
const GAMES_JSON = JSON.parse(GAMES_DATA);

// remove all child elements from a parent element in the DOM
function deleteChildElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// show only games that do not yet have enough funding
function filterUnfundedOnly(games) {
    // use filter() to get a list of games that have not yet met their goal
    const unFundedGames = games.filter(game => game.pledged < game.goal);

    // return the filtered games
    return unFundedGames;
}

// show only games that are fully funded
function filterFundedOnly(games) {
    // use filter() to get a list of games that have met or exceeded their goal
    const fundedGames = games.filter(game => game.pledged >= game.goal);

    // return the filtered games
    return fundedGames;
}

// show all games
function showAllGames(games) {
    // return all games from the JSON data
    return games;
}

// Example usage
const allGames = GAMES_JSON; // Assuming you have an array of games

// Test filterUnfundedOnly
const unfundedGames = filterUnfundedOnly(allGames);
console.log("Unfunded Games:", unfundedGames);

// Test filterFundedOnly
const fundedGames = filterFundedOnly(allGames);
console.log("Funded Games:", fundedGames);

// Test showAllGames
const allGamesResult = showAllGames(allGames);
console.log("All Games:", allGamesResult);


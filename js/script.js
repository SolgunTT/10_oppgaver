const movieButton = document.getElementById("movieBtn");

const movieList = document.getElementById("movieLst");

const favoriteMovies = ["Inside Out", "Shawshank Redemption", "Forrest Gump"];



/* Show alerts on click, one per each array item */

function movieAlert() {

    for (let i = 0; i < favoriteMovies.length; i++) {
alert(favoriteMovies[i]);
}
}

movieButton.addEventListener("click", movieAlert);
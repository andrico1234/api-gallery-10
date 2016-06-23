/**
 * Created by Home on 16/06/2016.
 */
// Ajax Requests


var pokemonArrayOverlay = [];
// put the ids into an array
// this array will then be cycled through using a for loop to create our initial pokemon database.

// PokemonAPI

var pokemonIdArray = [1, 4, 7, 50, 74, 112, 141, 149];
$.each(pokemonIdArray, function (i, id) {
    var pokemonURL = "http://pokeapi.co/api/v2/pokemon/" + id + "/";
    var pokemonGalleryItem = "<ul>";
    $.getJSON(pokemonURL, function (pokemonData) {
        var pokemonDataOverlay = [pokemonData.name, pokemonData.id];
        pokemonArrayOverlay.push(pokemonDataOverlay);
        pokemonGalleryItem = "<li><div class='gallery-image'>";
        pokemonGalleryItem += "<img src='" + pokemonData.sprites.front_default + "' alt=''>";
        pokemonGalleryItem += "</div></li>";
        // console.log(pokemonArrayOverlay[i][0], pokemonArrayOverlay[i][1]);
        if (pokemonData["types"][1]) {
            console.log(pokemonData["types"][1]["type"]["name"]);
        }
        console.log(pokemonData["types"][0]["type"]["name"]);
        pokemonGalleryItem += "</ul>";
        $(".ajax-gallery").append(pokemonGalleryItem);
    });
});

// look in to tiny sort. Gallery items may need to be placed in to a list.
// create a lightbox. In this lightbox, we'll need a picture of the pokemon, it's name, ID and type(s).

// Create an overlay
var $overlay = $("<div id='overlay'></div>");
// Inside the overlay will be a container
var $overlayContainer = $("<div id='overlayContainer'></div>");
// Inside the container will be the image, which the pokemon's name, ID and type(s)
var $overlayImage = $("<img id='overlayImage' src='' alt=''/>");
var $overlayDescriptionDiv = $("<div id='descriptionDiv'></div>");
var $pokemonName = $("<p id='pokemonName'></p>");
var $pokemonId = $("<p id='pokemonId'></p>");
var $pokemonTypes = $("<p id='pokemonTypes'></p>");

$overlayDescriptionDiv.append($pokemonName).append($pokemonId).append($pokemonTypes);
$overlayContainer.append($overlayImage).append($overlayDescriptionDiv);
$overlay.append($overlayContainer);
$("body").append($overlay);

$overlayImage.attr("src", "../img/1.png");
// CSS for div boxes will be centered,
// Some pokemon only have one type, form a conditional statement that appropriately displays this.
// Clicking the overlay will close the overlay.

// store each pokemon's data into an array or object?
// Define an empty array, and push that pokemon's data to the array when during the $.each() function.

// do the exact same for the star wars API.


// API provide more than 6 items (Done)
// Pop-ups contain item details. (Working On)
// Navigate between popups
// Items can be sorted
// More than 1 api
// Validate.
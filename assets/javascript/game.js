
// An array that lists out all of the options 
var computerChoices = "abcdefghijklmnopqrstuvwxyz".split('');

// Variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var GL = 9;

// Variables that hold references to the places in the HTML where we want to display things.
var winsText = $("#wins-text");
var lossesText = $("#losses-text");
var guessesLeft = $("#GL-text");
var userChoiceText = $("#YGSF-text");



document.onkeyup = function (event) {


    // Determines which key was pressed.
    var userGuess = event.key;

    console.log(userGuess)

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    console.log(computerGuess)

    console.log("-")

    if (userGuess === computerGuess) {
        wins++;
        GL = 9;
        $("#GL-text").text(GL)
        $("#wins-text").text(wins)
        console.log(wins)
        userGuess = '';
        $("#YGSF-text").text(userGuess)
    }
    else if (userGuess !== computerGuess) {
        GL--;
        $("#GL-text").text(GL);
        if (GL === 8) {
            $("#YGSF-text").prepend(userGuess);
        }
        else {
            $("#YGSF-text").prepend(userGuess + ", ");
        }
        if (userGuess !== computerGuess && GL === 0) {
            losses++;
            GL = 9;
            $("#GL-text").text(GL)
            $("#losses-text").text(losses)
            console.log(losses)
            userGuess = '';
            $("#YGSF-text").text(userGuess)

        }
    }




}
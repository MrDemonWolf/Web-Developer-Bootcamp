/**
 * Setup Lib
 */
const express = require("express");
var app = express();

/**
 * Setup routes
 */

app.get("/", function (req, res) {
    res.send("Hi there! Welcome to my exercise.")
})
app.get("/speak/:animal", function (req, res) {
    var animal = req.params.animal.toUpperCase();
    if (animal === "PIG") {
        res.send("The pig says 'Oink`")
    }
    if (animal === "COW") {
        res.send("The cow says 'Moo'")
    }
    else if (animal === "DOG") {
        res.send("The dog says 'Woof Woof'")
    }
    else {
        res.send("Sorry that's not a vaild animal.  Please use either pig,cow, and or dog.")

    }
})
app.get("/repeat/:message/:times" , function(req, res) {
    var message = req.params.message;
    var times = req.params.times;
    var result = "";
    for(var i = 0; i < times; i++) {
        result += message + " ";
    }
    res.send(result)
})
app.get("*", function(req, res) {
    res.send("Sorry page not found...  What are you doing with you life.")
})
/**
 * Start server
 */
app.listen("8080", function () {
    console.log("Server has started!")
});
console.log("Go to http://localhost:8080 to see running app.")
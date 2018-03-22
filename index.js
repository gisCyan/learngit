const SYNCHRO_WATERLEVEL = "waterlevel";
const SYNCHRO_RAINFALL = "rainfall";

// es6

let pse = new Promise().then(function(success) {
    console.log("successful");
}).catch(function(failure) {
    console.log("failure");
    throw new Error("promise do not work");
});

let [a, b, c] = [123, "cyan", "haha"];

let ([a]) = ['sa'];
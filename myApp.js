let express = require('express');
let app = express();
console.log("Hello World");
require('dotenv').config();







//


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/views/index.html");
});



// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));


// app.get("/json", (req, res) => {
//   res.json({
//     "message": "Hello json"
//   });
// });




//console.log(response);
console.log(process.env.MESSAGE_STYLE);

//var response = "Hello World".toUpperCase(); // now becomes "HELLO WORLD"
//let message = { "message": "Hello json" };
app.get("/json", (req, res) => {
    var jsonReponse = {"message": "Hello json"};
    if (process.env.MESSAGE_STYLE === "uppercase") {
        jsonReponse.message = jsonReponse.message.toUpperCase();
        
    }
    res.json(jsonReponse);//Dua du lieu vao json
});
































 module.exports = app;

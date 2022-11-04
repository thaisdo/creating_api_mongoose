const app = require("../app");
const mongoose = require("mongoose");

const url = "mongodb+srv://iesb:3ABj1Q0Fe6RTWRA0@cluster0.ux0hiy5.mongodb.net/contatosdb?retryWrites=true&w=majority"

mongoose.connect(url)
.then(
    app.listen(3000, () => {
        console.log("API is on");
    })
)
.catch(error => console.log("Door 3000 is off", error));
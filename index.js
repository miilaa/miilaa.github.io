const express = require("express");
const app = express();

//Mettings

app.set("port", 60);
app.set("view engine", "ejs");

//Middlewares

//Routes
app.use(require("./routes/index"));

//Static files
/*
//Listen
app.listen(app.get("port"), () => {
 console.log(`Server Está Escuchando Al Puerto ${app.get("port")}`);
});
*/
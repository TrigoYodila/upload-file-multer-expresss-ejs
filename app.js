//importer les modules
const express = require('express')
const ejs = require('ejs')
const path = require('path')

//crée une instance d'express
const app = express()

//autoriser l'utilisation de l'extension html à la place de ejs aux fichiers de rendus
app.engine("html", ejs.__express)

//definir la configuration du moteur de template
app.set("view engine", "html")
app.set("views", path.join(__dirname, "views"))

app.get('/', (req,res) => {
    res.render("index")
})


app.listen(3000);
console.log("app is running in port 3000")
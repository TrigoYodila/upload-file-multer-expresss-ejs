//importer les modules
const express = require('express')
const ejs = require('ejs')
const path = require('path')
const multer = require('multer')

//crée une instance d'express
const app = express()

//definir le moteur de stockage multer
const stockage = multer.diskStorage({
    destination:(req,file,cb) => {
        //definir le chemin de stockage
        cb(null, "./public/data/uploads")
    },
    filename:(req,file,cb) => {
        //renommer le nom du fichier
        cb(null, Date.now() + "_" + file.originalname)
    }
})

//definir le middeleware multer
const upload = multer({storage:stockage})


//autoriser l'utilisation de l'extension html à la place de ejs aux fichiers de rendus
app.engine("html", ejs.__express)

//definir la configuration du moteur de template
app.set("view engine", "html")
//app.set("view engine", "ejs") utililser les extensions .ejs

//localisation du dossier contenant les views
app.set("views", path.join(__dirname, "views"))

app.get('/', (req,res) => {
    res.render("index")
})

//route d'upload image
app.post("/", upload.single("upload_file"), (req, res) => {
    
})


app.listen(3000);
console.log("app is running in port 3000")
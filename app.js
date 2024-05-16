const express = require("express");
const userRoutes = require("./routes/user");  // Importar las rutas de usuario
const postRoutes = require("./routes/post");
const app = express();

app.use(express.json());  
app.use('/user', userRoutes);  // Usar rutas de usuario
app.use("/", postRoutes);

app.get("/hola",(req, res, next) =>{
    res.status(200).json({
        data: "Hola Mundo"
    })
})

app.listen(8080)

app.use(express.static(__dirname + "/public"))
app.get("/registro",(req,res)=> res.sendFile(__dirname + "/pages/SesionRegistro.html"))
app.get("/login",(req,res)=> res.sendFile(__dirname + "/pages/SesionInicio.html"))
app.get("/index",(req,res)=> res.sendFile(__dirname + "/pages/Index.html"))
// app.get('/post/:id', (req, res) => {
//     // Your logic to fetch a post by ID
// });


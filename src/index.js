import express from "express";
import Alumno from "./models/alumno.js"
import {sumar, restar, multiplicar, dividir} from "./modules/matematica.js"
import {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID} from
"./modules/omdb-wrapper.js"
import cors from "cors"; // hacer npm i cors
const alumnosArray = [];
alumnosArray.push(new Alumno("Esteban Dido" , "22888444", 20));
alumnosArray.push(new Alumno("Matias Queroso", "28946255", 51));
alumnosArray.push(new Alumno("Elba Calao" , "32623391", 18));
const app = express();
const port = 3000;
// Agrego los Middlewares
app.use(cors()); // Middleware de CORS
app.use(express.json()); // Middleware para parsear y comprender JSON
//
// Aca pongo todos los EndPoints
//
app.get('/', (req, res) => { // EndPoint "/"
res.send('Ya estoy respondiendo!');
})
app.get('/saludar', (req, res) => { // EndPoint "/saludar"
res.send('Hello World!');
})
//
// Inicio el Server y lo pongo a escuchar.
//
app.get('/saludar/:nombre', (req, res) => { // EndPoint "/saludar"
    res.status(200).send(`Hola maquinon con nombre: ${req.params.nombre}`);
})
app.get('/validarFecha/:ano/:mes/:dia', (req, res) => { 
    const { ano, mes, dia } = req.params;
    
    const fechaString = `${ano}/${mes}/${dia}`;

    const parsedDate = Date.parse(fechaString);
    if (parsedDate) {        
        res.status(200).send(`Ok`);

    } else {        
        res.status(400).send(`Bad request`);

    }
})
app.get('/matematica/sumar', (req, res) => { // EndPoint "/saludar"
    const num1 = parseFloat(req.query.n1)
    const num2 = parseFloat(req.query.n2)
    const resultado = sumar(num1, num2)
    res.status(200).send(`OK. ${resultado}`);
})
app.get('/matematica/restar', (req, res) => { // EndPoint "/saludar"
    const num1 = parseFloat(req.query.n1)
    const num2 = parseFloat(req.query.n2)
    const resultado = restar(num1, num2)
    res.status(200).send(`OK. ${resultado}`);
})
app.get('/matematica/multiplicar', (req, res) => { // EndPoint "/saludar"
    const num1 = parseFloat(req.query.n1)
    const num2 = parseFloat(req.query.n2)
    const resultado = multiplicar(num1, num2)
    res.status(200).send(`OK. ${resultado}`);
})
app.get('/matematica/dividir', (req, res) => { // EndPoint "/saludar"
    const num1 = parseFloat(req.query.n1)
    const num2 = parseFloat(req.query.n2)
    const resultado = dividir(num1, num2)
    res.status(200).send(`OK. ${resultado}`);
})


app.get('/omdb/searchbypage', async(req, res) => { // EndPoint "/saludar"
    const search = req.query.search
    const p = req.query.p
    const resultado = await OMDBSearchByPage(search, p)
    res.status(200).send(resultado);
})
app.get('/omdb/searchcomplete', async(req, res) => { // EndPoint "/saludar"
    const search = req.query.search
    const resultado = await OMDBSearchComplete(search)
    res.status(200).send(resultado);
})
app.get('/omdb/getbyomdbid', async(req, res) => { // EndPoint "/saludar"
    const imdb = req.query.imdbID
    const resultado = await OMDBGetByImdbID(imdb)
    res.status(200).send(resultado);
})

app.get('/alumnos', (req, res) => { // EndPoint "/saludar"
    res.status(200).send(alumnosArray);
})
app.get('/alumnos/:dni', (req, res) => { // EndPoint "/saludar"
    const dni = req.params.dni;    
    const alumno = alumnosArray.find(alumno => alumno.dni === dni);
    if (alumno) {
        res.status(200).json(alumno);
    } else {
        res.status(404).send("Alumno no encontrado");
    }
})
app.post('/alumnos', (req, res) => {
    let nombre = req.body.username
    let dni = req.body.dni
    let edad = req.body.edad
    let nuevoAlumno = new Alumno(nombre, dni, edad)
    if (!nombre || !dni || !edad) {
        res.status(404).send("Faltan datos")
    } else {
        alumnosArray.push(nuevoAlumno);
        res.status(201).json({ message: 'Se agrego correctamente.', alumno: nuevoAlumno });
    }
})
app.delete('/alumnos', (req, res) =>{
    let dni = req.body.dni
    
}

)

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})
const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const cookies = require('cookie-parser')
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware')
const db = require('../config/db.js')
const appRoutes = require('../src/routes/appRoutes')
const cors = require('cors')
try {
    db.authenticate();
    db.sync();
    console.log('Conexion correcta a la base datos');
} catch (error) {
    console.log(error);
};

//cookie-parser
app.use(cookies())

app.use(session({
    secret: 'Texto indiferente?',
    resave: false,
    saveUninitialized: false
}))

app.use(userLoggedMiddleware)


app.use(cors());

const mainRouter = require('./routes/main');
const productRouter = require('./routes/product');
const productRouterApi = require('./routes/productApi');
const cartRouter = require('./routes/cart');
const userRouter = require('./routes/user');
const categoryRouter = require('./routes/category')
const userApi = require('./routes/userApi')
const featureRouter = require('./routes/features')
const manufacturerRouter = require('./routes/manufacturer')
const methodOverride =  require('method-override'); // Para poder usar los métodos PUT y DELETE

// const http = require('http');
// const server = http.createServer((req, res) => {res.end("response ended")})

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // siempre se debe hacer cuando views no esté en raíz

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(methodOverride('_method')); // Pasar poder pasar el method="POST" en el formulario por PUT y DELETE
/* app.use(session({
    secret: 'Texto indiferente?',
    resave: false,
    saveUninitialized: false
})) */

app.use('/', appRoutes);
app.use('/', mainRouter)
app.use('/products/', productRouter);
app.use('/cart/', cartRouter);
app.use('/users/', userRouter);

app.use('/category', categoryRouter);
app.use('/api', productRouterApi);
app.use('/userApi', userApi)
app.use('/features', featureRouter)
app.use('/manufacturer', manufacturerRouter)

app.get('/slide.js', (req,res) => res.sendFile(__dirname + '/controllers/sliderController.js')); // Ruta del slider funcionando ! 
app.use((req, res, next) => {
    res.status(404).render('error')
    next()
});

app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));
// Conexion a la base de datos
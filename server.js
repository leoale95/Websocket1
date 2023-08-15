const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const hbs = require('hbs'); // Importa hbs

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Configuración de hbs como motor de plantillas
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Configuración de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configuración de rutas
const routes = require('./routes/routes'); 
app.use('/', routes);

// Configuración de Socket.io
io.on('connection', (socket) => {
    console.log('A user connected');

    // Escucha eventos específicos y realiza acciones
    socket.on('newProduct', (product) => {
        // Aquí puedes emitir el nuevo producto a la vista en tiempo real
        io.emit('productAdded', product);
    });

    // Otras escuchas de eventos y emisiones según lo necesario
});

// Inicia el servidor
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});

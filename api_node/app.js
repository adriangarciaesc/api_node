const http = require('http');
const os = require('os');

const servidor = http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Bienvenido a mi API Node.js. Soy Adrian.');

    } else if (req.url === '/estado') {
        const estado = {
            servicio: 'API Node.js',
            hostname: os.hostname(),
            uptime_segundos: process.uptime(),
            fecha: new Date().toISOString()
        };

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(estado, null, 2));

    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Ruta no encontrada');
    }
});

servidor.listen(3000, '0.0.0.0', () => {
    console.log('Servidor escuchando en el puerto 3000');
});

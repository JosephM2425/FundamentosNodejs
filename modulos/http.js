const http = require('http');

const port = 3000;

function router(req, res){
    console.log('Nueva peticion!');
    console.log(req.url);

    switch(req.url){
        case '/hola':
            res.write('Hola, que tal soy el servidor');
            res.end();
            break;
        default: 
            res.write('Error 404');
            res.end();
    }

    //res al usuario
    // res.writeHead(201, { 'Content-Type': 'text/plain'})
    // res.write('Hola, ya se usar http de nodejs')

    // res.end();
}

http.createServer(router).listen(port);

console.log('Escuchando http en el puerto 3000');
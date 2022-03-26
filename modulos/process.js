// const process = require('process');



process.on('beforeExit', () => {
    console.log('El proceso va a terminar');
});

process.on('exit', () => {
    console.log('El proceso ha terminado');
    setTimeout(()=> {
        console.log('Esto no se ve');
    }, 0)
});

process.on('uncaughtException', (err, or)=>{
    console.error('Se nos olvido capturar el error');
    console.log(err);
});

setTimeout(()=> {
    console.log('Esto si se ve');
}, 0)
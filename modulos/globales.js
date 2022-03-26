console.log(global);
let i = 0;
let intervalo = setInterval(()=> {
    console.log('Hola');
    if (i === 3){
        clearInterval(intervalo);
    }
    i++;
}, 1000);

console.log(__dirname);
console.log(__filename);
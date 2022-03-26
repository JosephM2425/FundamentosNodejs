function hi(name){
    return new Promise(function(resolve, reject){
        setTimeout(function (){
            console.log('Hi', name);
            //resolve(name);
            reject('Hay un error')
        }, 1500)
    });
    
}

function speak(name){
    return new Promise((resolve, reject)=> {
        setTimeout(function (){
            console.log('bla bla bla');
            resolve(name);
        }, 1000)
    })
    
}

function bye(name){
    return new Promise((resolve, reject)=> {
        setTimeout(function (){
            console.log('Bye', name);
            resolve();
        }, 1000)
    });
    
}

// --- 

console.log('Iniciado el proceso...');
hi('Joseph')
    .then(speak)
    .then(speak)
    .then(speak)
    .then(speak)
    .then((name)=> {
        return bye(name);
    })
    .then((name) => {
        console.log('Terminado el proceso');
    })
    .catch(error => {
        console.error('Hay un error');
        console.error(error)
    })
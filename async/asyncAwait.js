async function hi(name){
    return new Promise(function(resolve, reject){
        setTimeout(function (){
            console.log('Hi', name);
            resolve(name);
            //reject('Hay un error')
        }, 1500)
    });
    
}

async function speak(name){
    return new Promise((resolve, reject)=> {
        setTimeout(function (){
            console.log('bla bla bla');
            resolve(name);
        }, 1000)
    })
    
}

async function bye(name){
    return new Promise((resolve, reject)=> {
        setTimeout(function (){
            console.log('Bye', name);
            resolve();
        }, 1000)
    });
    
}

async function main(){
    let nombre = await hi('Joseph');
    await speak();
    await speak();
    await speak();
    await bye(nombre);
    console.log('Termina el procesos'); 
}


console.log('Empezamos el procesos');
main()

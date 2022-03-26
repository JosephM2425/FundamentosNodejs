const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');
readableStream.setEncoding('UTF8');

// readableStream.on('data', (chunk)=>{
//     data += chunk;

// })

// readableStream.on('end', ()=>{
//     console.log(data);
// });

// process.stdout.write('hola');
// process.stdout.write('que');
// process.stdout.write('tal');

const transform = stream.Transform;

function mayus(){
    transform.call(this)
}
util.inherits(mayus, transform);

mayus.prototype._transform = function(chunk, codif, cb){
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
}

var a = new mayus();

readableStream.pipe(a).pipe(process.stdout);

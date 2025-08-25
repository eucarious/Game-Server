// Pipes

var fs = require('fs');
var zlib = require('zlib'); // compress module

// create readable stream
var readable = fs.createReadStream(__dirname + '/somedata.txt', {
    encoding: 'utf8', highWaterMark: 16*1024
})

// create writable stream
var writable = fs.createWriteStream(__dirname + '/copiedSomeData.txt');

// create transform stream
var compressed = fs.createWriteStream(__dirname+'/zippedFile.gz');

// take from readable. pipe to writeable
readable.pipe(writable);

var gzip = zlib.createGzip();

// method chaining. used when working with pipes
readable.pipe(gzip).pipe(compressed);
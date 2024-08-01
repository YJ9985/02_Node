const fs = require('fs');

const readStream = fs.createReadStream('./readme.txt', 'utf-8');
const writeStream = fs.createWriteStream('./writePipe.txt');

readStream.pipe(writeStream);

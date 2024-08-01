const fs = require('fs');

if (fs.existsSync('./test')) {
  fs.rmdir('./test', (err) => {
    if (err) {
      console.errror(err);
    } else {
      console.log('folder deleted');
    }
  });
} else {
  console.log('folder does not exist');
}

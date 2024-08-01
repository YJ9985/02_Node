const path = require('path');

console.log(`파일 절대 경로: ${__filename}`);

const dir = path.dirname(__filename);
console.log(`경로만: ${dir}`);

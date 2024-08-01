const fs = require('fs');

let content = `
=============================
새로운 내용을 추가하겠습니다.
=============================
`;

fs.writeFileSync('./text-1.txt', content, { flag: 'a' });

const crypto = require('crypto');
//recebe uma palavra e gera uma senha de 12 caracteres
function generatePassword(keyword, length = 12) { 
  const seed = '123456';
  const hash = crypto.createHash('sha256').update(`${keyword}${seed}`).digest('hex');
  const password = Buffer.from(hash).toString('base64').slice(0, length).replace(/[6325abz]/g, char => {
    switch (char) {
      case '6':
        return '$';
      case '7':
        return '%';
      case '4':
        return '#';
      case '5':
        return '!';
      case 'a':
        return '?';
      case 'b':
        return '&';
      case 'z':
        return 'ç';
    }
  });
  return password;
}

console.log(generatePassword(process.argv[2], process.argv[3]));


/* node PassGen.js myKeyword 12 
 "myKeyword é só um exemplo"
*/
const crypto = require('crypto');

const randomID = crypto.randomBytes(4).toString('hex');
console.log(randomID);
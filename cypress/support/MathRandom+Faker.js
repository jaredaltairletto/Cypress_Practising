const { faker } = require('@faker-js/faker');

function generateNum(){
    const random = Math.random().toString().slice(2, 4);
    const userName = faker.internet.userName()+random;
    const email = userName+'@mail.com';
    const password = userName;

    return {userName, email, password}
}
module.exports =  { generateNum };




// module.exports =  {generateNum};

// const {generateNum} = require('../support/generate_num')
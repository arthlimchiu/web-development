const url = require('url');
const querystring = require('querystring');

const myUrl = url.parse('https://example.com/listing?id=1000&premium=true');
console.log(myUrl);

const myUrl2 = url.format({
    protocol: 'https',
    host: 'www.example.com',
    pathname: 'listing',
    query: {
        id: 1000,
        premium: true
    }
});
console.log(myUrl2);

const query = 'year=2023&month=january&day=20';
const q = querystring.parse(query);
console.log(q);

const q2 = querystring.stringify({
    year: 2023,
    month: 'january',
    day: 20
});
console.log(q2);
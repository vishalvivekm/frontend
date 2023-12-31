
const url = require('url');
console.log(url.parse('https://jsonplaceholder.typicode.com/posts/1'));
/*
*Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'jsonplaceholder.typicode.com',
  port: null,
  hostname: 'jsonplaceholder.typicode.com',
  hash: null,
  search: null,
  query: null,
  pathname: '/posts/1',
  path: '/posts/1',
  href: 'https://jsonplaceholder.typicode.com/posts/1'
}

* */
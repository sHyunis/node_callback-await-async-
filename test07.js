// WHATWG : 주소체계 따름
// https : 프로토콜
// www.123456.com : host
// localhost:(portNum) : hostName
// /하위루트(/search) : route
// ?뒤의 전부 : queryString, search
// queryString : key=value
// ?는 search
// query는 ?뒤에 있는 것

// https://hostname1:8000/search <= hostname은 생략되어있다.

console.clear();
const qs = require('querystring');
const parseUrl = qs.parse('url 넣기')

const url = new URL('url 넣기')

const {search, searchParams} = url; //디스트럭쳐링
console.log(search);
console.log(searchParams);


const str = 'url 넣기';

const strAry = str.split('?'); //?로 분리해서 배열로 저장
console.log(strAry);

const ampAry = strAry[1].split('&');
console.log(ampAry);

// ampAry.forEach(a=>a.split('='))
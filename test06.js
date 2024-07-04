// WHATWG : 주소체계 따름
// https : 프로토콜
// www.123456.com : host
// localhost:(portNum) : hostName
// /하위루트(/search) : route
// ?뒤의 전부 : queryString, search
// queryString : key=value
// ?는 search
// query는 ?뒤에 있는 것



const url = require('url');

// const myurl = url.parse('url을 넣기'); //url 객체로 만듬

// url.parse() => 내장객체로 들어옴
// const myurl = new URL(`url을 넣기`);


console.log(myurl);
console.log(url.format(myurl)); //다시 문자열 형태로 수정
const { log } = require('console');
const fs = require('fs');
const fsPromise = fs.promises;
// const fsPromise2 = require('fs').promises;

// js는 한번에 하나의 작업만 처리함 => (싱글스레드)
// 동기식 처리 : 순서대로 처리한다.

// callback : 때문에 비동기처리 => 빠른속도(멀티스레드인 것처럼 작동) => 순서대로 처리하지 않을 수 있다.
// 때문에 순서대로 처리할 수 있도록 만들어 줘야 한다.
// 즉 비동기처리가 동기처리되도록 만들어 줘야함
// promise, (await, async)

console.log('1. 시작');

// 순차처리하라
async function onAsync(){

    try{
        const data = await fs.readFileSync('./data/lorem.txt', 'utf-8');
        console.log('2.',data);
    
        await fsPromise.appendFile('./data/lorem.txt', '\nhello javascript!!!');
        console.log('3.',data);

        await fsPromise.appendFile('./data/lorem.txt', ' append javascript');
        console.log('4.',data);

        await fsPromise.rename('./data/lorem.txt', './data/newLorem.txt');
        console.log('5.',data);
    }catch(err){
        if(err) console.log(err);
    }finally{
        console.log('무조건 처리');
        // error여부에 관계없이 무조건 실행
    }
    
}

onAsync();



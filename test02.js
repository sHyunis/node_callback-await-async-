const fs = require('fs');

// js는 한번에 하나의 작업만 처리함 => (싱글스레드)
// 동기식 처리 : 순서대로 처리한다.

// callback : 때문에 비동기처리 => 빠른속도(멀티스레드인 것처럼 작동) => 순서대로 처리하지 않을 수 있다.
// 때문에 순서대로 처리할 수 있도록 만들어 줘야 한다.
// 즉 비동기처리가 동기처리되도록 만들어 줘야함
// callback 이용해서 순차처리 함, 가독성이 나쁨. Callback Hell

// 가독성 좋기 만들기 위해
// promise, (await, async)

console.log('1. 시작');

fs.readFile('./data/lorem.txt', 'utf-8', (error, data)=>{
    if(error) console.log(error); //
    console.log('2. ',data);

    console.log('3. ');

    fs.writeFile('./data/lorem.txt', '\nhello javascript', (error)=>{
        if(error) console.log(error); //
    });

    console.log('4. writeFile');

    fs.appendFile('./data/lorem.txt', '\nhello lorem', (error)=>{
        if(error) console.log(error); //
    });
    
    console.log('5. appendFile');
    
    fs.rename('./data/lorem.txt', './data/newLorem.txt', (error)=>{
        if(error) console.log(error); //
    });
    
    console.log('6. rename'); 

    fs.readFile('./data/newLorem.txt', 'utf-8', (err, data)=>{
        console.log('7. ', data);
    })

});



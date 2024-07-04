// promise 는 await, async 이전
// 순차처리 되게는 만들어주나
// 가독성이 나쁘다.

const fs = require('fs');

const pr = new Promise((resolve, reject)=>{  // 프로미스 객체 생성
    fs.readFile('./data/lorem.txt', 'utf-8', (err, data)=>{
        if(err){reject(err)} // pending?
        else{resolve(data)}  // fulFilled
    });
});

console.log(pr);
pr.then(data=>{
    console.log(data)
    console.log(pr);
})
  .catch(err => console.log(err))


function writeFile(){
    return new Promise((resolve, reject)=>{
        fs.writeFile('./data/lorem.txt', 'hello javascript', (err)=>{
            if(err){reject(err)} 
            else{resolve()}  
        });
    })
}

writeFile()
.then(()=>console.log('쓰기완료'))
.then(()=>{
    new Promise((resolve, reject)=>{
        fs.appendFile('./data/lorem.txt', ' append javascript', (err, data)=>{
            if(err){reject(err)} 
            else{resolve(data)}  
        });
    })
})
.then(()=>{
    new Promise((resolve, reject)=>{
        fs.rename('./data/lorem.txt', './data/newLorem.txt', (err, data)=>{
            if(err){reject(err)} 
            else{resolve(data)}  
        });
    });
}).catch((err)=>{console.log(err)})
.finally(()=>{
    console.log('무조건 처리');
})
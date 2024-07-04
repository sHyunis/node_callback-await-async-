const {format} = require('date-fns');
const {v4:uuid} = require('uuid');
// Math.random() : 난수발생
// uuid : 16진수 난수 발생, 5개 영역으로 나누어 발생
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

// 일치하는 경로는 변수로 저장
const logPath = path.join(__dirname, "..", 'logs');
// path.join이 있기에 가능

const logEvents =async (message)=>{
    const today = new Date(); //오늘 날짜 생성
    const strToday = format(today, 'yyMMdd \t HH:mm:ss');
    // const logItem = `${strToday}\t${uuid()}`;
    const logItem = `\n${strToday}\t${uuid()}\t${message}`;
    console.log(logItem);

    try{
        if(!fs.existsSync(logPath)){
            await fsPromises.mkdir(logPath); //폴더가 없으면 현재폴더보다 상위에 만들어라
        }
        
        await fsPromises.appendFile(
            // path.join(__dirname, "../logs", "logText.txt")
            path.join(logPath, "logText.txt"),
            logItem
        )
    }catch(err){
        console.log(err);
    }
}

// let count = 0;
// setInterval(()=>{
//     logEvents(++count);
// }, 2000)

module.exports = logEvents;
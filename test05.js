const logEvents = require('./day12_logger/logEvent')

let count = 0;
setInterval(()=>{
    logEvents(++count);
}, 2000)
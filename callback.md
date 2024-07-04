# callback

1. 함수 function, arrow function
2. 함수 파라미터로 모든 js 데이터타입을 넘길 수 있다.
3. 특히 함수를 파라미터로 넘기면 callback이라고 한다.

```javascript
function highOrderFunction(a, function(){}){}
function highOrderFunction(a, callback){
    console.log(a); 
    callback()      
}
```

# 즉시 실행되는 callback
배열의 method : .Array.filter(function(item, index){}) 
배열의 method : .Array.map((item, index)=>{})

# 실행을 지연시키는 callback
이벤트 처리하는 핸들러는 대부분 callback

function clickHandle(){
    console.log('click')

}

$('button').on('click', function(){})
$('button').on('click', clickHandle)
process.on('exit', ()=>{console.log('bye')})
process.on('exit', clickHandle) //종료 후에서야 발생되어 버린다.


# node 단에서 v8
Cluster : core를 이용해서 분산 시스템 만들어주는 모듈
WorkerThread : cpu가 여러개인 것처럼 돌려주는 모듈


# Promise 객체
실행 중(미완료 상태) : Pending
실행 완료(정상)      : fulFilled
실행 완료(error)     : reject


# 비동기 처리 = 멀티쓰레드를 처리하는 것이 아니다.
비동기 처리로 순차처리 되어야 할 것들이 순차처리 되지 않을 수 있으므로
순차처리를 보증, 처리속도는 다소 느려질 수 있다.
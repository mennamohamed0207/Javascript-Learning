//Javascript is blocking ,syncronous,and single threaded language to make it asyncronous we use following functions
//==============================================setTimeout(function,time,any paramter needed for function)======================//
//this function is used to execute a function after a specified time once
function greet(name)
{
    console.log(`Hello ${name}`);
}
setTimeout(greet,1000,"Menna") //after 3 seconds it will print hello world,name
//we can clear the time out by using clearTimeout
//==============================================clearTimeout(return value of setTimeout)========================================//
const id=setTimeout(greet,3000,"Menna clear timeout") 
clearTimeout(id) //it will make the setTimeout to stop
//==============================================setInterval(function,time,any paramter needed for function)======================//
//this function is used to execute a function repeatedly after a specified time

const id2=setInterval(greet,1000,"Menna") //it will print hello every 3 seconds forever
//we can clear the time out by using clearTimeout
//==============================================clearInterval(return value of setInterval)========================================//
clearInterval(id2)
//some important points 
//Timers and intervals are not part of javascript.They are part of the browser.
//duration specified are not exact but they are the min duration that the browser will wait before executing the function

//any function that passed as an argument to another function is called callback function
//and the function which accept the function as an argument is called a higher order function


//Promises
//---->Pending
//---->Fulfilled
//---->Rejected
//how to create a promise
const promise=new Promise((resolve,reject)=>{
    //code
    //we can use either resolve or reject
    resolve()
});
const promise2=new Promise((resolve,reject)=>{
    //code
    //we can use either resolve or reject
    reject()
});
const onFullfilled=(result)=>{
    console.log(result)
    console.log("fulfilled")
}
const onRejected=(error)=>{
    console.log(error)
    console.log("rejected")
}
promise.then(onFullfilled)
promise2.catch(onRejected)
//can be 
// promise.then(onFullfilled,onRejected);

//can be 
// promise.then(onFullfilled);
// promise.catch(onRejected);

//can be 
// promise.then(onFullfilled).catch(onRejected)
//promises can be chained

//promise.all([promise1,promise2,promise3])
//will be rejected if one of them is rejected

//promise.allSettled([promise1,promise2,promise3])
//will be fulfilled if all of them are fulfilled
//will wait until all of them are rejected or fulfilled

//promise.race([promise1,promise2,promise3])
//will be fulfilled if one of them is fulfilled
//------------------------------------------------async and await-----------------------------------------
async function greet()
{
    console.log("hello");
}
greet()   //it will print promise<fulfilled>hello
async  function greet()
{
    return Promise.resolve("hello");
}
greet().then((val)=>{
    console.log(val) //it will print hello
})


//Await:can not be used without async keyword
//it will wait until the promise is fulfilled

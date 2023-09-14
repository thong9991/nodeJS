const b = 3;
let p = new Promise ((resolve, reject)=>{
    const a = 1;
    if ( a > 0)
    resolve(a);
    else
    reject('Error');
});
p
.then((value)=>{
    console.log(value);
    return new Promise((resolve, reject)=> {
        setTimeout(()=> resolve(2), 1000);
    });
})
.then((value)=> {
    console.log(value);
    return new Promise((resolve, reject)=>{
        setTimeout(()=> resolve(b),1000)
    })
})
.then((value)=>{
    console.log(value);
});

// //vd2
// const a = 1;
// const b = 3;

// const promise1 = new Promise((resolve, reject) => {
    
//     setTimeout(() => {
//         console.log(2);
//         resolve();
//     }, 1000);
// });
// console.log(a);
// promise1.then(() => {
//     console.log(b);
// });
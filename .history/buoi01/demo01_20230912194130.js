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
        setTimeout(()=> resolve(value + 1), 1000);
    });
})
.then((value)=> {
    console.log(value);
    return new Promise((resolve, reject)=>{
        setTimeout(()=> resolve(value + 1),1000)
    })
})
.then((value)=>{
    console.log(value);
});
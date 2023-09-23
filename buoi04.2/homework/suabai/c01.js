const express = require('express');
const app = express();

app.get('/:pheptinh/:a/:b', (req, res)=>{
    const {a, b, pheptinh} = req.params;
    let ketqua = null;
    switch (pheptinh) {
        case 'cong':
            ketqua = parseInt(a) + parseInt(b);
            break;
        case 'tru':
            ketqua = parseInt(a) - parseInt(b);
            break;
        case 'nhan':
            ketqua = parseInt(a)*parseInt(b);
            break;
        case 'chia':
            ketqua = parseInt(a)/parseInt(b);    
        default:
            break;
    }
    res.json({a,b, pheptinh, ketqua})
})
app.listen(3000, ()=>{
    console.log('start with port 3000');
}).on('error', (err)=> {
    console.log(err.message);
    console.log('Server error')
})
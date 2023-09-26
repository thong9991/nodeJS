// /**
// Dựng 1 server, tạo 3 routers với response:
// - Đọc ds 3 users trong file users.json, http://localhost:3000/users

// - Lấy 1 user theo id mà url gửi vào,vd: http://localhost:3000/user/1  -> GET

// - Lấy thông tin của 1 user với input là json: { usermame, password }   -> POST
//   (YC: Kiểm tra thông tin user ở function middleware)

//  */


const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const path = 'users.json';
const fs = require('fs');

app.use(bodyParser.json())

const userList = JSON.parse(fs.readFileSync(path, 'utf8', (err, data)=>{
    if(err){
                    console.error('Error', err);
                    return;
                }
                try {
                    const data = (data);
                    return data;
                } catch (error) {
                    console.error('Error....!!!')
                }
            }))

app.get('/users', (req, res)=>{
    res.json(userList);
})

app.get('/user/:id', (req, res)=>{
    const userId = parseInt(req.params.id);
    const user = userList.filter(u => u.id === userId);
    if(user)
    res.json(user);
    else{
        res.status(404).json('Error not found')
    }
});

function authenticateUser(req, res, next) {
    const { username, password } = req.body;
    const user = userList.find((u) => u.username === username && u.password === password);
    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    req.user = user;
    next();
}

app.post('/user',authenticateUser, (req, res) => {
    const { username, password } = req.body;
    const user = userList.filter(u => u.username === username && u.password === password);
  
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  });

app.listen(3000, ()=> console.log('start with port 300'))
.on('error',(err)=> console.log(err.message));

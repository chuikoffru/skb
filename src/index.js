import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors()); 

//Задание 2А + Б

app.get('/', (req, res) => {

    const a = parseInt(req.query.a) || 0;
    const b = parseInt(req.query.b) || 0;

    res.send(`${a+b}`);
});

//Задание 2В

app.all('/task2', (req, res) => {
    let fullname = req.query.fullname || '';
    fullname = fullname.replace(/[0-9]/g, '');
    const preresult = fullname.split(' ');
    let result = '';

    if(fullname.length > 0) {
        if(preresult.length == 3) {
            result = `${preresult[2]} ${preresult[0].charAt(0)}. ${preresult[1].charAt(0)}.`;
        } else if(preresult.length == 2) {
            result = `${preresult[1]} ${preresult[0].charAt(0)}.`;
        } else if(preresult.length == 1) {
            result = `${preresult[0]}`;
        } else if(preresult.length == 0 || preresult.length > 3) {
            result = 'Invalid fullname';
        }
    } else {
        result = 'Invalid fullname';
    }

    res.send(result);
    
});

// Задание 2С

app.get('/task2c', (req, res) => {
    let result = '';
    let url = req.query.username || '';

    if(url.length > 0) {
        result = url.replace(/(((http(s|)\:\/\/)|(\/\/)|(www\.)|\@)|(.*)\/)|(\?.+)/gi, '');
        result = `@${result}`;
    } else {
        result = 'Invalid username'
    }
    res.send(`${result}`);
});

app.listen(3000, () => {
    console.log('Listen 3000 port');
});
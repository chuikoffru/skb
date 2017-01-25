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

app.get('/task2', (req, res) => {
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

app.listen(3000, () => {
    console.log('Listen 3000 port');
});
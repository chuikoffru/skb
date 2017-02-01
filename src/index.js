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
        //https://regex101.com/r/MQAzW2/1
        result = url.replace(/(((http(s|)\:\/\/)|(\/\/)|(www\.)|\@)|(.*)\/)|(\?.+)/gi, '');
        result = `@${result}`;
    } else {
        result = 'Invalid username'
    }
    res.send(`${result}`);
});

// Задание 2D

app.get('/task2d', (req, res) => {
    let result = '';
    console.log('Зашло ' ,req.query.color);
    if(req.query.color) {
        let color = req.query.color.toLowerCase().replace(/(#|%23| )/, '') || '';
        const revalid = color.match(/[a-fA-F0-9]/g);
        console.log('Преобразовалось', color);
        if(color && color.length == revalid.length) {
            if(color.length > 6 || color.length < 3 || (color.length > 3 && color.length < 6)) {
                result = 'Invalid color';
            } else if(color.length == 6) {
                result = `#${color}`;
            } else if(color.length == 3) {
                result += '#';
                for(let i=0; i < color.length; i++) {
                    result += color[i].repeat(2);
                }
            }
        } else {
            result = 'Invalid color';
        }
    } else {
        result = 'Invalid color';
    }

    res.send(result);
});

app.listen(3000, () => {
    console.log('Listen 3000 port');
});
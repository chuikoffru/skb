import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors()); 

app.get('/', (req, res) => {

    const a = parseInt(req.query.a) || 0;
    const b = parseInt(req.query.b) || 0;

    res.send(`${a+b}`);
});

app.listen(3000, () => {
    console.log('Listen 3000 port');
});
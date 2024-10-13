import express from 'express';
import path from 'path';
import { routerUser } from './src/routes/User.js';

// Setting Express Js
const app = express();
const port = process.env.PORT || 3000;

// Views Setting
app.set('view engine', 'ejs'); // Contoh menggunakan ejs sebagai view engine
app.set('views', path.resolve('./src/views'));

// Routes
app.use('/users', routerUser);
app.use('/user', routerUser);

app.listen(port, () => {
    console.log('Server is Running on PORT localhost:8080');
});

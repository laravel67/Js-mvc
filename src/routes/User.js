import express from "express";
const routerUser = express.Router();

import {
    getAllUser,
    GetUser
} from "../controllers/UserController.js";

routerUser.get('/', (req, res) => {
    res.send('Ini adalah halaman pengguna');
});
// routerUser.get('/user/:id', (req, res) => {
//     res.send('Ini adalah halaman pengguna');
// });

export { routerUser };

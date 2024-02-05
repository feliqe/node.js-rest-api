const { Router } = require("express");
const router = Router();

//ruta estrar informacion de JSON externo
router.get('/', async (req, res) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    res.json(users);
 });

module.exports = router;
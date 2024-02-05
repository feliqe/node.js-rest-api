const { Router } = require("express");
const router = Router();

//ruta -  index
router.get('/', (req,res) => {
    res.json({"Title": "Pagina principal"});
});

//ruta - por alias
router.get('/local', (req, res) => {
    //json de usuario local
    const data = {
        "id": 1,
        "name": "Felipe",
        "age": 32
    };
    res.json(data)
})

module.exports = router;
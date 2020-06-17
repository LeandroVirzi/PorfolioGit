const { Router } = require('express'); // desde express requiero el metodo Router
const router = Router(); // ejecuto Router y lo almaceno en la constante router

router.get('/test', (req, res) => {
    //res.json({"title": "hello world"}); // responde un json}
    // enviar datos mediante una variable Json
    const data = {
        "name": "Lean",
        "website": "lean.com"
    };
    res.json(data);
});

module.exports = router;
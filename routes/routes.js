const express = require('express');
const router = express.Router();

// Renderizar la vista home.handlebars
router.get('/', (req, res) => {
    const products = []; 
    res.render('home', { products });
});

// Renderizar la vista realTimeProducts.handlebars
router.get('/realtimeproducts', (req, res) => {
    const products = []; 
    res.render('realTimeProducts', { products });
});

module.exports = router;

const express = require('express')

const router = app.router()
router.get('/', (req, res) => {
    res.send('Hola orders')
})

router.post('/', (req, res) => {
    res.send('Post orders')   
})

module.exports = router
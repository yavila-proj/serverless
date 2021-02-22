const express = require('express')

const router = app.router()
router.get('/', (req, res) => {
    res.send('Hola meals')
})

router.post('/', (req, res) => {
    res.send('Post meals')   
})

module.exports = router
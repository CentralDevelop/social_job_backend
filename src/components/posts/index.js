const express = require('express')
const router = express.Router()
//  const response = require('../../network/response')

router.get('/', (req, res) => {
  res.send('hola')
})

module.exports = router

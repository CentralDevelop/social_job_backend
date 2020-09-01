const express = require('express')
const router = express.Router()
const controller = require('./controller')
const response = require('../../network/response')

router.get('/',  (req, res) => {
    
})

router.post('/', async (req, res) => {
    const { fullname, email, username, password } = req.body;
    try {
        const data = await controller.add(fullname, email, username, password)
        let finalResponse = {
            data: data,
            message: 'User created successfully'
        }
        response.success(req, res, finalResponse, 200)
    } catch (error) {
        response.error(req, res, error.message, 400, error)
    }
})

module.exports = router

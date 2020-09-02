const express = require('express')
const router = express.Router()
const controller = require("./controller")
const response = require('../../network/response')



router.post("/", (req, res) => {
    const { title, image, salary, rating, description, company, url, skill, rate, user, location } = req.body
    controller.addPost(title, image, salary, rating, description, company, url, skill, rate, user, location)
        .then(data => {
            response.success(req, res, data, 201)
        })
        .catch(error => {
            response.error(req, res, error.message, 400, error)
        })
})

module.exports = router

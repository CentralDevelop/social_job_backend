const express = require('express')
const router = express.Router()
const controller = require('./controller')
const response = require('../../network/response')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: 'public/files',
    filename : function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now())
    }
})

const upload = multer({ storage: storage })

router.get('/', (req, res) => {
    
    controller.getAllPost()
        .then(data => {
            response.success(req, res, data, 200)
        })
        .catch(error => {
            response.error(req, res, error.message, 400, error)
        })
})


router.post('/', upload.single('image') ,(req, res) => {
    const { title, salary, rating, description, company, url, skill, rate, user, country, city } = req.body
    controller.addPost(title, salary, rating, description, company, url, skill, rate, user, country, city, req.file)
        .then(data => {
            response.success(req, res, data, 200)
        })
        .catch(error => {
            response.error(req, res, error.message, 400, error)
        })
})

router.patch('/:id' ,(req, res) => {
    
    const {title, salary, rating, description, company, url, skill, rate, user, country, city} =req.body
    
    controller.updatePost(req.params.id , title, salary, rating, description, company, url, skill, rate, user, country, city)
        .then(data => {
            response.success(req, res, data, 200)
        })
        .catch(error => {
            response.error(req, res, error.message, 400, error)
        }) 
})

module.exports = router

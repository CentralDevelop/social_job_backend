const express = require('express')
const router = express.Router()
const controller = require('./controller')
const response = require('../../network/response')
const multer = require('multer')
const path = require('path')
const checkAuth = require('../../api/middleware/check-auth')

const storage = multer.diskStorage({
    destination: 'public/files',
    filename : function (req, file, cb) {
        cb(null, file.filename + "-" + Date.now() +
        path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })

router.get('/', (req, res) => {
    
    let country = req.query.country || null
    let city = req.query.city || null
    let skill = req.query.skill || null
    
    controller.getAllPost(country, city, skill)
        .then( data => {
            response.success(req, res, data, 200)
        })
        .catch(error => {
            response.error(req, res, error.message, 400, error)
        })
})


router.post('/create', upload.single('image') ,(req, res) => {
    const { title, salary, rating, description, company, url, skill, user, country, city } = req.body
    controller.addPost(title, salary, rating, description, company, url, skill, user, country, city, req.file)
        .then(data => {
            response.success(req, res, data, 200)
        })
        .catch(error => {
            response.error(req, res, error.message, 400, error)
        })
})

router.patch('/:id' ,checkAuth ,upload.single('image') ,(req, res) => {
    
    const { title, salary, rating, description, company, url, skill, user, country, city } = req.body

    controller.updatePost(req.params.id, title, salary, rating, description, company, url, skill, user, country, city, req.file)
        .then(data => {
            response.success(req, res, data, 200)
        })
        .catch(error => {
            response.success(req, res, error.message, 400, error)
        })
})

router.delete('/:id' , (req, res) => {
    
    controller.deletePost(req.params.id)
        .then(data => {
            response.success(req, res, data , 200)
        })
        .catch(error => {
            response.error(req, res, error.message, 400, error)
        })
})

module.exports = router

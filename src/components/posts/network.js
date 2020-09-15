const express = require('express')
const router = express.Router()
const controller = require('./controller')
const response = require('../../network/response')
const multer = require('multer')
const path = require('path')
const checkAuth = require('../../api/middleware/check-auth')

const storage = multer.diskStorage({
  destination: 'public/files',
  filename: function (req, file, cb) {
    cb(null, file.filename + '-' + Date.now() +
        path.extname(file.originalname))
  }
})

const upload = multer({ storage: storage })

router.get('/', async (req, res) => {
  const country = req.query.country || null
  const city = req.query.city || null
  const skill = req.query.skill || null

  try {
    const result = await controller.getAllPost(country, city, skill)
    if (result === false) {
      response.status(400).json({
        message: 'Post not found'
      })
    }
    response.success(req, res, result, 200)
  } catch (error) {
    response.error(req, res, error.message, 400, error)
  }
})

router.post('/create', checkAuth, upload.single('image'), (req, res) => {
  const { position, salary, rating, description, company, url, skill, user, country, city } = req.body
  controller.addPost(position, salary, rating, description, company, url, skill, user, country, city, req.file)
    .then(data => {
      response.success(req, res, data, 200)
    })
    .catch(error => {
      response.error(req, res, error.message, 400, error)
    })
})

router.patch('/:id', checkAuth, upload.single('image'), (req, res) => {
  const { position, salary, rating, description, company, url, skill, user, country, city } = req.body

  controller.updatePost(req.params.id, position, salary, rating, description, company, url, skill, user, country, city, req.file)
    .then(data => {
      response.success(req, res, data, 200)
    })
    .catch(error => {
      response.success(req, res, error.message, 400, error)
    })
})

router.delete('/:id', (req, res) => {
  controller.deletePost(req.params.id)
    .then(data => {
      response.success(req, res, data, 200)
    })
    .catch(error => {
      response.error(req, res, error.message, 400, error)
    })
})

module.exports = router

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
  try {
    const data = await controller.getAll()
    response.success(req, res, data, 200)
  } catch (error) {
    response.error(req, res, 'Something wrong happend', 500, error)
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params

  try {
    const data = await controller.getOne(id)
    response.success(req, res, data, 200)
  } catch (error) {
    response.error(req, res, error.message, 400)
  }
})

router.post('/signup', upload.single('image'), async (req, res) => {
  const { fullname, email, username, password } = req.body
  try {
    const user = await controller.add(fullname, email, username, password, req.file)
    response.success(req, res, user, 201)
  } catch (error) {
    response.error(req, res, error.message, 400, error)
  }
})

router.post('/login', async (req, res, next) => {
  const { email, password } = req.body
  try {
    const token = await controller.loginController(email, password)
    const finalResponse = {
      Message: 'Auth success',
      token
    }
    if (token) {
      response.success(req, res, finalResponse, 200)
    } else {
      throw new Error('Login failed')
    }
  } catch (error) {
    response.error(req, res, error.message, 401, error)
  }
})

router.put('/:id', checkAuth, async (req, res) => {
  const { id } = req.params
  const { body: user } = req
  user._id = id
  try {
    const data = await controller.updateUser(user)
    response.success(req, res, data, 200)
  } catch (error) {
    response.error(req, res, error.message, 400, error)
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    await controller.deleteUserController(id)

    response.success(req, res, `User ${id} deleted`, 200)
  } catch (err) {
    response.error(req, res, err.message, 500, err)
  }
})

router.get('/fav/:id', async (req, res) => {
  const { id } = req.params

  try {
    const data = await controller.getAllFavorites(id)
    response.success(req, res, data, 200)
  } catch (error) {
    response.error(req, res, error.message, 400)
  }
})

module.exports = router

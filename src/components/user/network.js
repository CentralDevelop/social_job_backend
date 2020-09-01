const express = require('express')
const router = express.Router()
const controller = require('./controller')
const response = require('../../network/response')

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
    response.error(req, res, error.message, 500)
  }
})

router.post('/', async (req, res) => {
  const { fullname, email, username, password } = req.body
  try {
    const data = await controller.add(fullname, email, username, password)
    const finalResponse = {
      data: data,
      message: 'User created successfully'
    }
    response.success(req, res, finalResponse, 201)
  } catch (error) {
    response.error(req, res, error.message, 400, error)
  }
})

router.put('/', async (req, res) => {
  const user = { _id, fullname, email, username, password } = req.body
  try {
    const data = await controller.updateUser(user)
    response.success(req, res, data, 200)
  } catch (error) {
    response.error(req, res, error.message, 400, error)
  }
})

module.exports = router

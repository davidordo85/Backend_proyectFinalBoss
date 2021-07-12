const express = require('express')
const router = express.Router()
const { protect, authorize } = require('../middleware/auth')
const { 
  getUsers, 
  getUser,
  updateUser, 
  userPhotoUpload,
  userCvUpload, 
  deleteMyAccount 
} = require('../controllers/users')

router
  .route('/')
  .get(protect, authorize('admin'), getUsers)

router
  .route('/:id')
  .get(protect, authorize('admin'), getUser)
  .put(protect, authorize('admin'), updateUser)
  .delete(deleteMyAccount)

router
  .route('/:id/photo')
  .put(userPhotoUpload)

router
  .route('/:id/cv')
  .put(userCvUpload)

module.exports = router
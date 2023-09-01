const express = require('express')

const router = express.Router()

const adminController = require('../controllers/admin')

router.get('/getproduct',adminController.getproduct)
router.post('/addproduct', adminController.addproduct)
router.use('/deleteproduct/:userID', adminController.deleteproduct)
router.put('/updateUser/:userID', adminController.updateproduct)

module.exports = router
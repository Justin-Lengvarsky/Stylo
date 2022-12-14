const express = require('express')
const router = express.Router()
const favoritesController = require('../controllers/favorites') 

const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, favoritesController.getFavorites)

router.put('/editFavorite', favoritesController.editFavorite)

router.delete('/deleteFavorite', favoritesController.deleteFavorite)


module.exports = router
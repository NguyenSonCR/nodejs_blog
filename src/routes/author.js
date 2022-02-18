const express = require('express');
const router = express.Router();
const authorController = require('../app/controllers/AuthorController');

router.use('/', authorController.author);
module.exports = router;
const { Router } = require('express');
const articleController = require('../controllers/article');
const router = Router({});

router.get('/', articleController.getAllArticles);

module.exports = router;

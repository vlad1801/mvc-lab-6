const router = require('express').Router();
const { getNotFoundPage } = require('../controllers/error');

router.use('*', getNotFoundPage);

module.exports = router;
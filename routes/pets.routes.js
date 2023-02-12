const express = require('express');
const { get, create, lookup } = require('../controllers/pets.controller');

const router = express.Router();

router.route('/').get(get).post(create);

router.route('/lookup').get(lookup);

module.exports = router;

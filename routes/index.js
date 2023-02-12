const express = require('express');
const petRouter = require('./pets.routes');

const router = express.Router();

router.use('/pets', petRouter);

module.exports = router;

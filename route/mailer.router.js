const router = require("express").Router();
const { homepage, mailer } = require('../controllers/mailer.controller');

router.get('/mailer', homepage);
router.get('/mailer/send', mailer);

module.exports = router;

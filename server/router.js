const router = require('express').Router();
// const controllers = require('./controllers.js');

router.route('/about').get(() => console.log(`hello`));

module.exports = router;

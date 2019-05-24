var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.send('api works');
});

router.use('/user', require('./user'));
router.use('/genre', require('./genre'));
router.use('/video', require('./video'));
router.use('/playlist', require('./playlist'));
module.exports = router;
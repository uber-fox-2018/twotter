var express = require('express');
var router = express.Router();
const {getUserRepo} = require ('../controllers/api')
const {searchTopic} = require ('../controllers/api')
const {createRepo} = require ('../controllers/api') 

/* GET users listing. */
router.get('/getrepo/', getUserRepo)
router.get('/searchtopic/', searchTopic)
router.post('/createrepo/', createRepo)

module.exports = router;

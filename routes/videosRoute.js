const express = require('express');
const router = express.Router();
const VideoController = require('../controllers/VideoController');
const auth = require('../controllers/authController')
var methodOverrride = require('method-override');

router.use(methodOverrride('_method'));


router.get('/',auth, VideoController.allVideos);



router.get('/lista',auth, VideoController.lista);
router.get('/edit/:id', auth, VideoController.loadVideo);
router.get('/admin',auth, VideoController.addVideo);
router.post('/edit/:id', auth,express.urlencoded({extended:true}), VideoController.editVideo);
router.post('/create', auth,express.urlencoded({extended:true}), VideoController.createVideo);
router.delete('/:id', auth,VideoController.deleteFilme)


router.get('/filme/:id', auth,VideoController.listOne);
router.get('/search', auth,VideoController.search);











module.exports = router



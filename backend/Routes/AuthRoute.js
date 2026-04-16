const { Signup, Login,getProfile,logout } = require('../Controllers/AuthController')
const { userVerification } = require("../Middlewares/AuthMiddleware");
const router = require('express').Router()

router.get("/profile", getProfile);
router.post('/signup', Signup)
router.post('/login', Login)
router.post('/',userVerification)
router.get("/logout", logout);
module.exports = router
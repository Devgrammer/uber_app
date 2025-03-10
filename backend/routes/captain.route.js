const express = require('express');
const router = express.Router();
const {body}= require('express-validator');

const captainController = require('../controllers/captain.controller');
const authMiddleware = require('../middleware/auth.middleware');


router.post('/register', [
    body('email').isLength({min:3}).withMessage("First name must be atleast 3 character long"),
    body('fullname.firstname').isLength({min: 3}).withMessage("First name be atleast 3 character long"),
    body('password').isLength({min: 3}).withMessage("Password must be atleast 6 character long"),
    body('vehicle.color').isLength({min: 3}).withMessage("Color must be atleast 6 character long"),
    body('vehicle.plate').isLength({min: 3}).withMessage("Plate must be atleast 6 character long"),
    body('vehicle.capacity').isLength({min: 1}).withMessage("Capacity must be atleast 1 character long"),
    body('vehicle.vehicleType').isIn(['car','motorcycle', 'auto']).withMessage("Invalid Type"),
],
captainController.registerCaptain
);

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:3 }).withMessage("Password must be atleast  3 character long")
],
captainController.loginCaptain
);


router.get('/profile', authMiddleware.authCaptain, captainController.getCaptainProfile);
router.get('/logout', authMiddleware.authCaptain, captainController.logoutCaptain);


module.exports = router;
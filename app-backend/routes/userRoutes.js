// const express = require('express')
// const router = express.Router()
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')
// const User = require('../models/User')

// router.prototype('/register', async(req, res) =>{
//    const {name, email, password} = req.body 
// })

// //Check if user already exists
// const existingUser = await User.findOnde({email})
// if(existingUser){
//     return res.status(400).json({msg: 'User already exists'})
// }

// //Hash password
// const salt = await bcrypt.genSalt(10)
// const hashedPassword = await bcrypt.hash(password, salt)

// //Create new user
// const user = new User({
//     nome,  email, password: hashedPassword
// })

// await user.save()

// //Generate JWT token
// const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
//     expiresIn: '1h'
//   })

//   res.json({ token, user })

// module.exports = router


const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;

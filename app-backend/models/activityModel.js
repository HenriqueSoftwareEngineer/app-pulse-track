// const mongoose = require('mongoose');

// const activitySchema = new mongoose.Schema({
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true,
//   },
//   type: {
//     type: String,
//     required: true,
//   },
//   duration: {
//     type: Number, // Duração em minutos
//     required: true,
//   },
//   date: {
//     type: Date,
//     default: Date.now,
//   },
//   // Adicione outros campos conforme necessário
// });

// const Activity = mongoose.model('Activity', activitySchema);
// module.exports = Activity;

const express = require('express');
const { createActivity, getActivities } = require('../controllers/activityController');

const router = express.Router();

router.post('/', createActivity);
router.get('/:userId', getActivities);

module.exports = router;

const Activity = require('../models/activityModel');

// Criar Atividade
const createActivity = async (req, res) => {
  const { userId, type, duration } = req.body;

  try {
    const newActivity = new Activity({ userId, type, duration });
    await newActivity.save();
    res.status(201).json({ message: 'Atividade registrada com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao registrar atividade' });
  }
};

// Listar Atividades por Usuário
const getActivities = async (req, res) => {
  const { userId } = req.params;

  try {
    const activities = await Activity.find({ userId });
    res.status(200).json(activities);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao recuperar atividades' });
  }
};

module.exports = { createActivity, getActivities };

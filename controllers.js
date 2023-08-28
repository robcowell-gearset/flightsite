const { Member, Flight, TierPoint } = require('./models');  // Replace with the actual path to your models

// Get Dashboard
exports.getDashboard = async (req, res) => {
  try {
    const member = await Member.findOne({ where: { id: 1 } });  // Assuming member with ID 1 for now
    if (!member) {
      return res.status(404).json({ error: 'Member not found' });
    }
    res.json(member);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


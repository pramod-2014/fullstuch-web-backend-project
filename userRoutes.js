import express from 'express';
const router = express.Router();

router.post('/signup', (req, res) => {
  const { name, email, password } = req.body;
  
  // Yahan apna DB logic ya validation dal sakta hai
  // For now, simple response bhejte hain:
  res.json({ message: 'User signup successful', user: { name, email } });
});

export default router;

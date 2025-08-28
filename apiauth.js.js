// api/auth.js - Vercel Serverless Function
export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    
    // Mock authentication - in a real app, you'd validate against a database
    if (username && password) {
      // Mock user data
      const userData = {
        visaType: 'Subclass 189 (Skilled Independent)',
        visaStatus: 'Granted',
        grantDate: '15 March 2023',
        expiryDate: '15 March 2028',
        applicationId: 'APP-7890-1234-5678'
      };
      
      res.status(200).json({ success: true, user: userData });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

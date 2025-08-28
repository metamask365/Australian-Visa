// api/applications.js - Vercel Serverless Function
export default function handler(req, res) {
  if (req.method === 'GET') {
    // Mock application data
    const applications = [
      {
        id: 'APP-7890-1234-5678',
        type: 'Subclass 189 (Skilled Independent)',
        status: 'Granted',
        submitted: '15 January 2023'
      },
      {
        id: 'APP-1234-5678-9012',
        type: 'Subclass 500 (Student)',
        status: 'In Progress',
        submitted: '20 February 2023'
      }
    ];
    
    res.status(200).json({ success: true, applications });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

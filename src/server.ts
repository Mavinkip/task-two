import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Hardcoded user credentials
const validUser = {
  name: "JohnDoe",
  password: "12345"
};

// Authentication endpoint
app.post('/api/login', (req, res) => {
  const { name, password, age } = req.body;

  // Simple authentication logic
  if (name === validUser.name && password === validUser.password) {
    res.status(200).json({ message: "Login successful", age });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client')));

// Serve the React app for all non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

app.use(express.static(path.join(__dirname, '..', 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

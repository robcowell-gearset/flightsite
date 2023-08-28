const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const controllers = require('./controllers');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));


// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
// (Define your endpoints here)
/*
app.get('/', (req, res) => {
  res.send('Hello World!');
});
*/
app.get('/dashboard', controllers.getDashboard);
const flightController = require('./controllers/flightController');
app.post('/addflight', flightController.addFlight);
app.get('/flights', flightController.getFlights);
app.put('/flights/:id', flightController.updateFlight);
app.delete('/flights/:id', flightController.deleteFlight);


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

const express = require('express');
const cors = require('cors');
const app = express();
const personasRoutes = require('./routes/personasRoutes');

app.use(cors());
app.use(express.json());

app.use('/', personasRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
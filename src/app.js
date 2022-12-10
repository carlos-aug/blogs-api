const express = require('express');
const loginRouters = require('./routes/login.routes');
const userRoutes = require('./routes/users.routes');

// ...

const app = express();

app.use(express.json());

app.use('/login', loginRouters);
app.use('/user', userRoutes);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;

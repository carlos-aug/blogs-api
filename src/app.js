const express = require('express');
const categoryRouters = require('./routes/categories.routes');
const loginRouters = require('./routes/login.routes');
const userRouters = require('./routes/users.routes');

// ...

const app = express();

app.use(express.json());

app.use('/login', loginRouters);
app.use('/user', userRouters);
app.use('/categories', categoryRouters);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;

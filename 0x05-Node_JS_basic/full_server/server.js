// starts the express server
// import our routes and connect it to the server
// with app.use and also exports the serving app
//
import express from 'express';
import router from './routes/index.js';

const app = express();
const PORT = 1245;

app.use('/', router);

app.listen(PORT);

export default app;

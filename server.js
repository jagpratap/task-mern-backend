const express = require('express');
const dotenv = require('dotenv');

const taskRouter = require('./routes/taskRoutes.js');
const userRouter = require('./routes/userRoutes.js');
const { errorHandler } = require('./middleware/errorMiddleware.js');
const connectDB = require('./connect/database.js');

dotenv.config();
const port = process.env.PORT || 5000;

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/tasks', taskRouter);
app.use('/api/users', userRouter);

app.use(errorHandler);

app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));

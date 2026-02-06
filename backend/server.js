import './config/dotenv.js'
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import usersRoutes from './routes/users.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();

//app.use(cookieParser());
app.use(express.json());
app.use(morgan('dev'));
app.use(cors({
    origin : process.env.FRONTEND_URL  || 'http://localhost:5173',
    methods: ['GET' , 'POST' , 'PUT' , 'DELETE'],
    allowedHeaders: ['Content-Type' , 'Authorization'],
    credentials: true
}))

const PORT = process.env.PORT || 5000;

app.use('/api' , usersRoutes);
app.use(errorHandler);

app.listen(PORT , "0.0.0.0", () => console.log(`APP IS RUNNING AT PORT ${PORT}`));
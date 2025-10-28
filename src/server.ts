import express from 'express';
import cors from 'cors';
import routes from './modules/trintemo.routes';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 8080; // ← Mude para 8080

app.use(cors({
    origin: process.env.NODE_ENV === 'production' 
        ? ['https://seusite.com', 'http://localhost:5173'] // ← Adicione seus domínios
        : 'http://localhost:5173',
    credentials: true, 
}));
app.use(express.json());

app.use('/api', routes);

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log('NODE_ENV:', process.env.NODE_ENV);
    console.log('Database URL available:', !!process.env.DATABASE_URL);
});
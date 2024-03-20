import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import autenticacao from './middlewares/autenticacao';

dotenv.config();
const app = express();
const porta = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/ctes', autenticacao, rotasCtes);

app.listen(porta, () => {
  console.log(`Rodando na porta ${porta}`);
});

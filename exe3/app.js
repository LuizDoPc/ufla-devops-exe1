const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

const pool = new Pool({
  user: 'admin',
  host: 'postgres',
  database: 'teste',
  password: '123',
  port: 5432,
});

pool.connect()
  .then(() => {
    console.log('Conexão com o PostgreSQL estabelecida com sucesso!');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao PostgreSQL:', err);
  });

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Servidor Express está rodando na porta ${port}`);
});


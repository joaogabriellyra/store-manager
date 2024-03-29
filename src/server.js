const app = require('./app');
const connection = require('./models/connection.DB');
require('dotenv').config();

// não altere esse arquivo, essa estrutura é necessária para à avaliação do projeto

app.listen(process.env.PORT, async () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
    const [result] = await connection.execute('SELECT 1');
  if (result) {
    console.log('MySQL connection OK');
  }
});

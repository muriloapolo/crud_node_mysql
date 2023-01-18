//Import do app.js para conectar ao servidor
import app from "./app.js";

const PORT = process.env.PORT || 3000;
//Fazer a conexão

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT} http://localhost:${PORT}`);
  });


//Escutar a porta (PORT) criada para o servidor rodar

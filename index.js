//Подключаем сервер
const http = require('http');
const PORT = 3000;

const requestListener = (req, res) => {
  console.log('req', req);
  console.log('res', res);
  res.end("Hello I'm learning Node"); // ответ сервера
}

//Создание сервера
const server = http.createServer(requestListener);
server.listen(PORT); //запуск сервера | Порт 80 http / 443 https
const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url == '/') {
        res.end('<h1>Home</h1>')
    }
    res.end('<h1>Sem resposta pra essa URl</>')
})

server.listen(3001, 'localhost', () => {
    console.log('Servidor de pé em: http://localhost:3001')
    console.log('Pra desligar o servidor: Ctrl + c')

})
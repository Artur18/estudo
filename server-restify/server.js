const restify = require ('restify')

const server = restify.createServer()

server.get('/', (req, res) => {
    res.send('Ae!!! Serivdor Funcionando')
})

server.listen(8081, () => {
    console.log('Servidor de pé em http://localhost:8081')
    console.log('Para derrubar o servidor: ctrl + c')
})
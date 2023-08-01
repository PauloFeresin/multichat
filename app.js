// importar as configurações do servidor
const app = require("./config/server.js")

//Parametrizando a porta de escuta
//app.listen(80, function () { console.log("Servidor") }); Versão antiga

const server = app.listen(8080, () => {
    console.log("Servidor online")
}); // Usando arrow function

const io = require("socket.io")(server); // Modo atual de implementar

app.set("io", io)

// Criar a conexão por websocket
io.on("connection", (socket) => {
    console.log("usuario conectou");

    socket.on("disconnect", () => {
        console.log("Usuario desconectou")
    });
});
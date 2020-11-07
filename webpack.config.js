const path = require("path");

module.exports = {
    mode: "development", // moodo de desenvolvimento
    devServer: {
        open: true, // abrir automático
        contentBase: "dist" // qual a pasta que o server vai olhar (olhando para o bundle gerado)
    },
    entry: "./src/componentes/lista/listagem-cliente.js", // ponto inicial que o webpack vai olhar
    output: {
        filename: "main.js", // nome do arquivo bundle que será gerado
        path: path.resolve(__dirname, "dist") // pasta que será gerado o bundle
    }
}
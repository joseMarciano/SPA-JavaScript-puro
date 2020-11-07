const HtmlWebpackPlugin = require("html-webpack-plugin");
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
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/clientes.html",
            filename: "index.html"
        })
    ],
    module: {
        rules: [{
                test: /\.css$/i, //identificação de arquivos .css com REGEXP 
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.html$/,
                use: ["html-loader"], // esse cara pra pegar as tags que tenha um src e converter em JS para importar o conteudo dentro de src uma tag img por exemplo
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: "file-loader", // para importar os arquivos de imagens e transforma-los em JS
                options: { // opcional... colocar o nome do arquivo no bundle [name].[ext] diz que o nome será o nome original.extensaoDoArquivo
                    name: "[name].[ext]"
                }
            }
        ]
    }
}
const express = require("express")
const server = express()

// pegar o banco de dados
const db = require("./database/db")

// configura pasta public
server.use(express.static("public"))

// habilitar o uso do req.body na nossa aplicação
server.use(express.urlencoded({ extended: true }))

// utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    // evita devolução de cache
    noCache: true
})

// configurar caminhos da minha aplicação
// página inicial
// req: Requisição
// res: Resposta
server.get("/", (req, res) => {
    return res.render("index.html", { title: "Um titulo" })
})

server.get("/create-point", (req, res) => {
    // req.query: Query strings da nossa URL
    // console.log(req.query)
    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {

    // req.body: O corpo do formulário
    // console.log(req.body)

    // inserir dados no banco de dados
    // // INSERIR dados na tabela
    const queryInsert = `
        INSERT INTO places (
            name,
            image,
            address,
            address2,
            state,
            city,
            items
            ) VALUES (?,?,?,?,?,?,?);
        `
    const values = [
        req.body.name,
        req.body.image,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err) {
        if (err) {
            console.log(err)
            return res.send("Erro no cadastro!")
        }
        console.log("Cadastrado com sucesso")
        console.log(this) // referencia a função que está executando

        return res.render("create-point.html", { saved: true })
    }

    db.run(queryInsert, values, afterInsertData)

})

server.get("/search", (req, res) => {

    const search = req.query.search

    if (search == "") {
        // pesquisa vazia
        return res.render("search-results.html", { total: 0 });
    }

    // pegar os dados do banco de dados
    // CONSULTAR dados da tabela

    const querySelect = `SELECT * FROM places WHERE city LIKE '%${search}%'`

    function afterSelect(err, rows) {
        const total = rows.length;
        const resp = res.render("search-results.html", { places: rows, total });
        const failure = console.log(err);

        return err !== null ? failure : resp
    }

    db.all(querySelect, afterSelect)

})

// ligar o servidor
server.listen(3000)
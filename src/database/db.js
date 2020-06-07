// importar a dependencia do sqlite3

const sqlite3 = require("sqlite3").verbose()

// criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// utilizar o objeto de banco de dados para nossas operações

// db.serialize(() => {

    // CRIAR tabela
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         name TEXT NOT NULL,
    //         image TEXT NOT NULL,
    //         address TEXT,
    //         address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)

    // // INSERIR dados na tabela
    // const queryInsert = `
    //     INSERT INTO places (
    //         name,
    //         image,
    //         address,
    //         address2,
    //         state,
    //         city,
    //         items
    //         ) VALUES (?,?,?,?,?,?,?);
    //     `
    // const values = [
    //     "Papersider",
    //     "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    //     "Guilherme Gemballa, Jardim América",
    //     "Número 260",
    //     "Santa Catarina",
    //     "Rio do Sul",
    //     "Papéis e Papelão"
    // ]

    // function afterInsertData(err) {
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log("Cadastrado com sucesso")
    //     console.log(this) // referencia a função que está executando
    // }

    // db.run(queryInsert, values, afterInsertData)

    // CONSULTAR dados da tabela
    // const querySelect = 'SELECT * FROM places'

    // function afterSelect(err, rows) {
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log(rows)
    // }

    // db.all(querySelect, afterSelect)

    // DELETAR um dado da tabela

    // function afterDelete(err) {
    //     const erro = err !== null ? console.log('Algo deu errado:' + err) : console.log('Registro deletado com sucesso!')
    //     return erro;
    // }

    // const queryDelete = `DELETE FROM places`

    // db.run(queryDelete, afterDelete)
// })

//Importar o MYSQL
import mysql from 'mysql';

//Criar conexão com o BANCO DE DADOS

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '1234',
    database:'bdcopa'
})
conexao.connect()




/**
* @param {string} sql instrucao sql a ser executada
* @param { string=id | [selecao]} valores a serem passados para o sql
* @param {string} mensagemReject mensagem a ser exibida
* @param {}
* @returns objeto da Promise
 */
export const consulta = (sql,valores='', mensagemReject)=>{
    return new Promise((resolve,reject)=>{
        conexao.query(sql,valores,(error,result)=>{
            if(error) return reject(mensagemReject)
            const row = JSON.parse(JSON.stringify(result))
            return resolve(row)

        })
    })
};
export default conexao;
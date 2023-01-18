import {consulta} from "../database/conexao.js";

class SelecaoRepository {
  //Crud
  create(selecao) {
    const sql = "INSERT INTO selecoes SET ?;";
  return consulta(sql,selecao,'Não foi possível cadastrar')
  }
  //Read
  findAll() {
    const sql = "SELECT * FROM selecoes;";
    return consulta(sql,'Não foi possível localizar')
  }
  //Ready by ID
  findById(id) {
    const sql = "SELECT * FROM selecoes WHERE id=?;";
    return consulta(sql,id,'Não foi possível localizar')
  }
  //Update
  update(selecao, id) {
    const sql = "UPDATE selecoes SET ? WHERE id=?;";
    return consulta(sql,[selecao,id],'Não foi possível atualizar')
  }
  //Delete
  delete(id) {
    const sql = "DELETE FROM selecoes WHERE id=?;";
    return consulta(sql,id,'Não foi possível apagar')
  }
}

export default new SelecaoRepository();

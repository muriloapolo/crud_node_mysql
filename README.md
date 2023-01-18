## Do Banco de Dados 
// CREATE SCHEMA `bdcopa` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ;

## Lista de Seleções

Grupo A: Qatar, Equador, Senegal e Holanda
Grupo B: Inglaterra, Irã, EUA e País de Gales
Grupo C: Argentina, Arábia Saudita, México e Polônia
Grupo D: França, Austrália, Dinamarca e Tunísia
Grupo E: Espanha, Costa Rica, Alemanha e Japão
Grupo F: Bélgica, Canadá, Marrocos e Croácia
Grupo G: Brasil, Sérvia, Suíça e Camarões
Grupo H: Portugal, Gana, Uruguai e Coreia do Sul

## Conexão com o BD

CREATE TABLE `bdcopa`.`selecoes` (
`id` INT NOT NULL AUTO_INCREMENT,
`selecao` VARCHAR(25) NOT NULL,
`grupo` CHAR(1) NOT NULL,
PRIMARY KEY (`id`));

## Métodos para inserir

INSERT INTO `bdcopa`.`selecoes` (`selecao`, `grupo`) VALUES ('Holanda', 'A');
INSERT INTO `bdcopa`.`selecoes` (`selecao`, `grupo`) VALUES ('Senegal', 'A');
INSERT INTO `bdcopa`.`selecoes` (`selecao`, `grupo`) VALUES ('Equador', 'A');
INSERT INTO `bdcopa`.`selecoes` (`selecao`, `grupo`) VALUES ('Catar', 'A');

## UPDATE

UPDATE `bdcopa`.`selecoes` SET `selecao` = 'México' WHERE (`id` = '7');

## Delete

DELETE FROM `bdcopa`.`selecoes` WHERE (`id` = '6');

## Mock Para teste

const selecoes = [
  { id: 1, selecao: "Brasil", grupo: "G" },
  { id: 2, selecao: "Suíca", grupo: "G" },
  { id: 3, selecao: "Sérvia", grupo: "G" },
  { id: 4, selecao: "Camarões", grupo: "G" },
];
## ROTA RAIZ
//criar rota padrão
app.get("/", (req, res) => {
  res.send("Hello world");
});
## Funções de busca por ID

//Buscar seleções por ID recebido por parâmetros na requisição
function buscarSelecoesPorId(id) {
  return selecoes.filter((selecao) => selecao.id == id);
}

//Pegar a posição ou index do elemento no array por id
function buscaIndiceSelecao(id) {
  return selecoes.findIndex((selecao) => selecao.id == id);
}
## --- Recorte de SPLIT
  // let index = buscaIndiceSelecao(req.params.id);
  // selecoes.splice(index, 1);
  // res.send(`Seleção excluidas com sucesso: ${index}`);
// Em knexfile.js tem dois banco de dados: dbuser_lw e dbuser_ap
const knexfile = require("../knexfile").dbuser_lw;  // Testando com o banco dbuser_lw
const knex = require("knex")(knexfile);

const pegarCTe = require("./src/pegarCTe");


test("Deve pegar um cte pela referencia", async () => {
  const dados = await pegarCTe(knex);
  console.log(dados)
  expect(dados).toBeInstanceOf(Array);
});

// Finalizar a conexão após rodar todos os testes
afterAll(() => {
  knex.destroy();
});

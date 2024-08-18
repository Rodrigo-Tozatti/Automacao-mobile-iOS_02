
const login_page = require("./pages/login_page");

Feature('CT001 - Login na plataforma');

Scenario('Cenário 01 - Realizar login com sucesso',  ({ I }) => {

        login_page.realizarLogin('teste@teste.com', '123456')

        //Verificar algum elemento
        I.waitForElement('~salvar', 5);
        I.seeElement('~salvar')
        I.seeElement('~Código')
});  

Scenario('Cenário 02 - Realizar login com e-mail errado',  ({ I }) => {

        login_page.realizarLogin('teste10@teste.com', '123456')

        //Verificar algum elemento
        I.waitForElement('name', 5);
        I.seeElement('name')
}); 
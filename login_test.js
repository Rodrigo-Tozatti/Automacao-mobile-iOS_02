Feature('CT001 - Login na plataforma');

Scenario('Cenário 01 - Realizar login com sucesso',  ({ I }) => {

        I.preecherEmail('username', 'usuario_email')


        I.preencherSenha('username', 'usuario_senha')


        I.toque('botao_entrar')
});

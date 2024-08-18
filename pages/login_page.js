const { I } = inject();

module.exports = {

    fields: {
        email: '~email',
        senha: '~senha',
    },

    buttons: {
        entrar: '~entrar'
    },

    //-----------------------

    realizarLogin(email, senha) {
        I.fillField(this.fields.email, email);
        I.fillField(this.fields.senha, senha);
        I.click(this.buttons.entrar);
    }
}



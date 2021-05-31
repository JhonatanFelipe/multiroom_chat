const { emit } = require("../../config/server");

module.exports.initChat = function(application, req, res) {

    var dataForm = req.body;

    req.assert('name', 'Nome é obrigatório').notEmpty();
    req.assert('name', 'Nome inválido').len(3, 20);

    var erros = req.validationErrors();

    if (erros) {
        res.render('index', { validacao: erros });
        return;
    }

    application.get('io').emit(
        'msgParaCliente', { name: dataForm.name, mensagem: 'acabou de entrar no chat' }
    );

    res.render('chat', { dataForm: dataForm });
}
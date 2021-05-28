module.exports.initChat = function(application, req, res) {

    var data = req.body;

    req.assert('name', 'Nome é obrigatório').notEmpty();
    req.assert('name', 'Nome inválido').len(3, 20);

    var erros = req.validationErrors();

    if (erros) {
        res.render('index', { validacao: erros });
        return;
    }

    res.render('chat');
}
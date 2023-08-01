const { check, validationResult } = require("express-validator")

module.exports.iniciaChat = (application, req, res) => {
    let dadosForm = req.body;

    check(dadosForm.apelido).not().notEmpty().withMessage("Nome ou Apelido é obrigatorio");
    check(dadosForm.apelido).isLength({ min: 3, max: 15 }).withMessage("Nome ou apelido deve ter entre 3 e 15 caracteres");

    let errors = validationResult(req);

    /* VERIFICAR PORQUE NÃO VALIDA CORRETAMENTE */
    // console.log(dadosForm)
    // console.log(errors.isEmpty());
    // console.log(errors.array());

    if (!errors.isEmpty()) {
        res.send("index", { validacao: errors.array() });
        return;
    }

    application.get("io").emit(
        "msgParaCliente",
        { apelido: dadosForm.apelido, mensagem: "acabou de entrar no chat" }
    )

    res.render("chat");
}
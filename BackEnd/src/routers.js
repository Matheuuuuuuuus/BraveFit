const express = require("express");
const clientController = require("../controller/controller");
const router = express.Router();

router.get("/", clientController.getRoot); //rota raiz
router.post("/api/registerUser", clientController.registerbravefit); //Cadastrar um novo usuario
router.post("/api/validate", clientController.login); //validar o login 
router.post("/api/reset", clientController.getEmailReset);//verificar o email de reset
router.put("/api/resetpassword", clientController.resetPassword);//resetar a senha
router.get('/api/readNews', clientController.listAllNews);//listar todas noticias
router.get('/api/readNewsID/:id', clientController.listNewsbyID);//lstar noticias por id
router.post('/api/cadastrarFicha', clientController.CadastrarFicha);//cadastrar ficha
router.get('/api/fichasCadastradas', clientController.listAllFicha);//listar todas as fichas
router.get('/api/fichasCadastradasUser/:id_usuario', clientController.listbyIDFichaUser);//listar ficha por id
router.delete('/api/deleteficha/:id', clientController.deleteFicha)//deletar ficha

module.exports = router;
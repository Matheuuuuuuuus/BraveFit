const clientController = require("../model/model");

const userController = {

    //route root 
    getRoot: async (req, res) => {
        res.status(200).json({ msg: "The API is running!!!" })
    },

    //cadastrar um novo usuario no banco 
    registerbravefit: async (req, res) => {
        const { id, nome, email, senha } = req.body;
        try {
            const sql = await clientController.getByEmail(email);

            if (sql.length > 0) {
                res.status(401).json({ msg: "O email ja esta cadastrado, Insira um email valido" })
            }
            else {
                await clientController.registerUser(id, nome, email, senha);
                res.status(201).json({ msg: "Usuario cadastrado com sucesso" })
            }
        }
        catch (erro) {
            console.log(erro);
            res.status(500).json({ msg: "Ocorreu um erro durante o registro de usuarios" });
        }
    },
    login: async (req, res) => {
        let { email, senha } = req.body;

        senha = senha.toString();

        try {
            const sql = await clientController.validateLogin(email, senha);


            if (sql != null) {
                res.status(200).json(sql[0]);
            }
            else {
                res.status(401).json({ msg: "Email ou senha incorretos" });
            }
        }
        catch (error) {
            if (error) {
                console.log(error)
                res.status(500).json(error);
            }
        }
    },
    //controller para reset 
    getEmailReset: async (req, res) => {
        let { email } = req.body

        email = email.toLowerCase();

        try {
            const sql = await clientController.getByEmail(email);

            if (sql.length > 0) {
                res.status(200).json({ msg: 'Success' })
            }
            else {
                res.status(404).json({ msg: "Email nao cadastrado no BD" });
            }
        }
        catch (error) {
            if (error) {
                res.status(500).json(error);
            }
        }
    },

    resetPassword: async (req, res) => {
        let { email, senha } = req.body

        email = email.toLowerCase();

        try {
            const sql = await clientController.updatePassword(email, senha);
            res.status(200).json({ msg: "Senha Atualizada com sucesso" });
        }
        catch (error) {
            console.log("Erro ao redefinir a senha");
            res.status(500).json({ msg: "Erro no servidor" })
        }
    },
    //listar noticias
    listAllNews: async (req, res) => {
        try {
            const clients = await clientController.getAllNews();
            res.status(200).json(clients);
        }
        catch (error) {
            res.status(500).json({ error: "Erro ao obter a lista de noticias" })
        }
    },

    //listar por noticias por id
    listNewsbyID: async (req, res) => {
        try {
            const sql = await clientController.getByIdNews(req.params.id);

            if (sql.length > 0) {
                res.status(200).json(sql)
            }
            else {
                res.status(401).json({ msg: "Não existe registro no banco com este id" })
            }
        }
        catch (error) {
            res.status(500).json({ error: "Erro ao obter a lista de noticias" })
        }
    },
    //cadastrar ficha
    CadastrarFicha: async (req, res) => {
        try {
            const { ID, peso, suplementacao, nutricionista, objetivo, id_usuario } = req.body;

            await clientController.CreateFicha(ID, peso, suplementacao, nutricionista, objetivo, id_usuario);
            res.status(201).json({ message: 'Ficha cadastrada com sucesso!' });

        } catch (error) {
            console.error('Erro ao cadastrar a Ficha:', error);
            res.status(500).json({ message: 'Erro ao cadastrar a Ficha.' });
        }
    },

    //lstar ficha por id
    listbyIDFichaUser: async (req, res) => {
        console.log(req.params.id_usuario);
        try {
            const sql = await clientController.getFichasUser(req.params.id_usuario);

            console.log(sql);

            if (sql != null) {
                res.status(200).json(sql)
            }
            else {
                //console.log("aqui");
                res.status(401).json({ msg: "Não existe registro no banco com este id" })
            }
        }
        catch (error) {
            res.status(500).json({ error: "Erro ao obter a lista de fichas" })
        }
    },
    //listar todas as fichas
    listAllFicha: async (req, res) => {
        try {
            const clients = await clientController.getAllFicha();

            console.log(clients);

            res.status(200).json(clients);

        }
        catch (error) {
            res.status(500).json({ error: "Erro ao obter a lista de fichas" })
        }
    },
    //deletar ficha
    deleteFicha: async (req, res) => {
        try {
            const ficha = await clientController.getFichaById(req.params.id);

            console.log(ficha)

            if (ficha === null) {
                res.status(404).json({ msg: "ficha não encontrada." });
            }
            else {
                await clientController.deleteficha(req.params.id);
                res.status(200).json({ msg: "ficha deletada com sucesso!" });
            }
        } catch (error) {
            console.error("Erro ao deletar a ficha:", error);
        }
    },
};

module.exports = userController;

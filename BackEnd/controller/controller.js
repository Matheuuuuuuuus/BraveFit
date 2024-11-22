const clientController = require("../model/model");

const userController = {

    //route root 
    getRoot: async (req, res) => {
        res.status(200).json({ msg: "The API is running!!!" })
    },

    //Controller para listar todos os usuários do banco
    // listAllUsers: async(req,res)=>{
    //     try{
    //         const clients = await clientController.getAllUsers();
    //         res.status(200).json(clients);
    //     }
    //     catch(error){
    //         res.status(500).json({error: "Erro ao obter a lista de usuários"})
    //     }
    // },

    //listar usuário por id
    // listByID: async(req,res)=>{
    //     try{
    //         const sql = await clientController.getByID(req.params.id);

    //         if(sql.length > 0){
    //             res.status(200).json(sql)
    //         }
    //         else{
    //             res.status(401).json({msg:"Não existe registro no banco com este ID"})
    //         }
    //     }
    //     catch(error){
    //         return error
    //     }
    // },

    //Criar um novo usuário
    // createNewUser: async(req,res)=>{
    //     const {id,nome,sobrenome,idade} = req.body;

    //     try{
    //         const sql = await clientController.getByID(id);

    //         if(sql.length > 0){
    //             res.status(401).json({msg: "O ID já está cadastrado no BD"})
    //         }
    //         else{
    //             await clientController.registerUser(id,nome,sobrenome,idade);
    //             res.status(201).json({msg:"Usuário cadastrado com sucesso"});
    //         }
    //     }
    //     catch(error){
    //         return error
    //     }
    // },


    //Deletar um usuario pelo ID 
    // deleteUser: async(req,res)=>{
    //     try{
    //         const sql = await clientController.getByID(req.params.id);

    //         if(sql.length > 0){
    //             await clientController. deleteUser(req.params.id);
    //             res.status(204).json({msg:"Usuario deletado com sucesso!!!"})
    //         }
    //         else{
    //             res.status(401).json({msg:"O ID nao existe na base de dados"})
    //         }
    //     }
    //     catch(error){
    //         res.status(500).json({error: "Erro ao tentar deletar o usuario"})
    //     }
    // },
    // updateUser: async(req,res)=>{
    //     const{email, senha}= req.body;
    //     try{
    //         const sql = await clientController.getByID(req.params.id)

    //         if(sql.length > 0){
    //             await clientController.updateUser(email, senha, req.params.id)
    //             res.status(200).json({msg:"Atualizado com sucesso"})
    //         }
    //         else{
    //             res.status(401).json({msg:"O id nao existe na base de dados"})
    //         }
    //     }
    //     catch(erro){
    //         if(erro){
    //             res.status(500).json({msg:"Erro no servidor"+erro})
    //         }
    //     }
    // },
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
    listAllNews: async (req, res) => {
        try {
            const clients = await clientController.getAllNews();
            res.status(200).json(clients);
        }
        catch (error) {
            res.status(500).json({ error: "Erro ao obter a lista de noticias" })
        }
    },


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

    listbyIDFichaUser: async (req, res) => {
        try {
            const sql = await clientController.getFichasUser(req.params.id_usuario);

            if (sql.length > 0) {
                res.status(200).json(sql)
            }
            else {
                res.status(401).json({ msg: "Não existe registro no banco com este id" })
            }
        }
        catch (error) {
            res.status(500).json({ error: "Erro ao obter a lista de fichas" })
        }
    },
    listAllFicha: async (req, res) => {
        try {
            const clients = await clientController.getAllFicha();
            res.status(200).json(clients);

        }
        catch (error) {
            res.status(500).json({ error: "Erro ao obter a lista de fichas" })
        }
    },
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

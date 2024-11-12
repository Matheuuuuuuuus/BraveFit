const connection = require("../config/db");
const bcrypt = require("bcrypt");
const salt = 10;

const userModel = {
    // getAllUsers: async () =>{
    //     const [result] = await connection.query("SELECT * FROM cadastro_senai")
    //     .catch(erro => console.log(erro));
    //     return result
    // },

    getByID: async (id) =>{
        const [result] = await connection.query("SELECT * FROM cadastro_usuarios WHERE id =?",[id])
        .catch(erro => console.log(erro));
        return result
    },

    // registerUserr: async (id, nome, sobrenome, idade) =>{
    //     const [result] = await connection.query("INSERT INTO cadastro_usuarios values(?,?,?,?)",[id,nome,sobrenome,idade])
    //     .catch(erro => console.log(erro));
    //     return result
    // },

    // deleteUser: async (id)=>{
    //     const [result] = await connection.query("DELETE FROM cadastro_senai WHERE id=? ", [id])
    //     .catch(erro => console.log(erro));
    //     return result
    // },
    //Model para login
    getByEmail: async (email)=>{
        const [result] = await connection.query("SELECT * FROM cadastro_usuarios WHERE email=?", [email])
        .catch(erro => console.log(erro));
        return result;
    },
    validateLogin: async(email, senha)=>{
        const [result] = await connection.query("SELECT * FROM cadastro_usuarios WHERE email=?", [email])

        try{
            if(result.length>0){
                const user = result[0]
                const compare = await bcrypt.compare(senha, user.senha)

                if(compare){
                    return result
                }
                else{
                    return null
                }
            }
            else{
                return null

            }
        } catch(erro){
            return erro
        }

    },
    registerUser: async(id,nome,email,senha)=>{
        const hashsenha = await bcrypt.hash(senha, salt);
        const [result] = await connection.query("INSERT INTO cadastro_usuarios values(?,?,?,?)", [id, nome, email, hashsenha])
        .catch(erro => console.log(erro));
        return result;
    },

     //reset senha aluno
    resetByEmail: async(email) =>{
        const [result] = await connection.query("SELECT * FROM cadastro_usuarios WHERE email=?", [email])
        .catch(error => console.log(error))
        return result; 
    },
    //update the password
    updatePassword: async(email,senha)=>{
        const hashpassword = await bcrypt.hash(senha, salt);
        const result = await connection.query("UPDATE cadastro_usuarios SET senha=? WHERE email=?",
        [hashpassword, email])
        .catch(error => console.log(error))
        return result;
    },

    getAllNews: async () => {
        const [result] = await connection.query("SELECT * FROM noticias")
            .catch(erro => console.log(erro));
        return result
    },


    getByIdNews: async (id) => {
        const [result] = await connection.query("SELECT * FROM noticias WHERE id =?", [id])
            .catch(erro => console.log(erro));
        return result
    },
    CreateFicha:  async (id,peso, suplementacao, nutricionista, objetivo, id_usuario) => {
        const result = await connection.query(
          'INSERT INTO ficha (ID, peso, suplementacao, nutricionista, objetivo, id_usuario) VALUES (?, ?, ?, ?, ?, ?)',
          [id,peso, suplementacao, nutricionista, objetivo, id_usuario]
        );
        return result;
      },
    getFichasUser: async (id_usuario) => {
        const [result] = await connection.query("SELECT * FROM ficha WHERE id_usuario =?", [id_usuario])
            .catch(erro => console.log(erro));
        return result
    },

    getFichaById: async (id) => {
        try {
            const [result] = await connection.query("SELECT * FROM ficha WHERE id_usuario = ?", [id]);

            console.log(result);
            
            if (result.length === 0) {
                return null;
            }
            return result[0];
        } catch (erro) {
            console.error('Erro ao buscar ficha por ID:', erro);
            throw erro;
        }
    },

    getAllFicha: async () => {
        const [result] = await connection.query("SELECT peso, suplementacao, nutricionista, objetivo id FROM ficha")
            .catch(erro => console.log(erro));
        return result
    },
    deleteficha: async (id) => {
        const [result] = await connection.query("DELETE FROM ficha WHERE id_usuario = ?", [id])
            .catch(erro => console.log(erro));
        return result;
    },

};

module.exports = userModel;
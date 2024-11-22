const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const routers = require('./src/routers');
const client = require('./config/db');

const app = express();
app.use(bodyParser.json());
app.use(routers);

let server;

//funçao para realizar a chamada do servidor 
beforeAll(()=>{
    server = app.listen(8086);
});

//funçao para fechar conexao com o banco e encerrar o servidor 
afterAll(async()=>{
    await client.end();
    server.close();
});

//Describe = usado para testar as rotas da API A
describe('API routes', ()=>{
    //rota raiz
    it('GET / deve retornar a mensagem', async()=>{
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('msg', "The API is running!!!")
    });
    
    //rota para listar os usuarios 
    it('GET /api/readNews deve retornar uma lista de noticias ', async()=>{
        const res = await request(app).get('/api/readNews');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array)
    });

    // //teste de rota para cadastrar um usuario
    it('POST /api/registerUser deve criar um novo usuário', async()=>{
        const data = {
            nome: "baena",
            email: "baena@gmail.com",
            senha: "1234"
        };
        const res = await request(app).post('/api/registerUser').send(data);
        if(res.statusCode === 401){
            expect (res.body).toHaveProperty('msg',"O email ja esta cadastrado, Insira um email valido")
        }else if(res.statusCode == 500){
            expect (res.body).toHaveProperty('msg',"Ocorreu um erro durante o registro de usuarios")
        }
        else{
            expect(res.statusCode).toEqual(201);
            expect (res.body).toHaveProperty('msg',"Usuario cadastrado com sucesso")
        }
    });

    //Teste de rota para deletar um usuario no banco
    it('DELETE /api/deleteficha/:id deve deletar uma ficha', async()=>{
        const id = 10;
        const res = await request(app).delete(`/api/deleteficha/${id}`);

        console.log(res.text)

        if(res.statusCode === 404){
            expect(res.body).toHaveProperty('msg',"ficha não encontrada.")
        }
        else{
            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('msg',"ficha deletada com sucesso!")
        }
    });
    
    // //teste de rota para atualizar
    // it('PUT /api/update/:id deve atualizar as informações do usuários',async () => {

    //     const updateUser={
    //         nome:"Mathues",
    //         sobrenome:"Dias",
    //         idade:"17"
    //     }
        
    //     const res = await request(app).put(`/api/update/${id}`).setEncoding(updateUser)
    //     if (res.statusCode === 200) {
    //         expect(res.body).toHaveProperty('msg',"Dados atualizados com sucesso!!!")
    //     }else{
    //         expect(res.statusCode).toEqual(401);
    //         expect(res.body).toHaveProperty('msg',`O ID ${id} não existe na base de dados`)
    //     }
    // });

});


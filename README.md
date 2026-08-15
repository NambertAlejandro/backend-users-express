# backend-users-express

Projeto de estudo: eu aprendendo a criar um banco de dados, usando Express e Mongoose (MongoDB) para uma API de usuários.

## O que aprendi

- **API REST com Express**: criar rotas `GET` e `POST` para listar e cadastrar usuários.
- **MongoDB com Mongoose**: conectar a um banco na nuvem (MongoDB Atlas) e definir um schema (`nome`, `age`, `email`) com validações como `required` e `unique`.
- **Variáveis de ambiente**: tirar a senha do banco de dentro do código e guardá-la num arquivo `.env`, lendo com o pacote `dotenv` e `process.env`, para não expor credenciais publicamente.
- **Git do zero**: iniciar um repositório (`git init`), configurar o `.gitignore` (ignorando `node_modules` e `.env`), colocar arquivos em stage (`git add`), commitar (`git commit`), conectar a um repositório remoto (`git remote add origin`) e publicar no GitHub (`git push`).

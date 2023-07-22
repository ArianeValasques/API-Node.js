# API-Node.js
Uma API criada com Node.js, usando JavaScript e Banco de Dados PostgreSQL

A API contém um CRUD para usuários, e as funções SignIn e SignUp, para autenticação do usuário, pois já conta com a proteção para acesso apenas por usuários validados.

- Token: chave jwt
- Filtro de requisições a serem validadas com passport
- Acesso completo para usuário administrador. Configuração de visão por usuário.
- Validações simples

Tecnologias Utilizadas: 
* Node.js / JavaScript
* Banco de dados PostgreSQL

Orientações de Instalação

```bash
git clone https://github.com/ArianeValasques/API-Node.js.git
```

Instalação de dependências

```bash
  npm i
```

Depois de criado o Banco de Dados - webproject, criar tabelas com 

```bash
  Knex migrate:latest
```

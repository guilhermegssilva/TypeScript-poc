# TypeScript-poc

Uma API para criar e gerenciar uma lista de heróis.

## Endpoints

  `GET /profile`: Recebe uma lista com todos os heróis.
  
  `GET /profile/:id`: Recebe um perfil de herói de acordo com seu ID.
  
  `POST /profile`: Cria um novo perfil de herói.
  
  `PUT /profile/:id`: Atualiza um herói de acordo com seu ID.
  
  `DELETE /profile/:id`: Deleta um herói.
  
## Instalação
  Instale as dependências: ```npm install```

  Execute o Postgres

  Dump o arquivo no seu banco de dados from `./dump/dump.sql`

  Coloque no seu arquivo .env a url do banco do postgres `ex: postgres://postgres:password@localhost:5432/database_name`

  Inicie o server: ```npm run dev```
  
  ## Utilização
  A rota: `POST /profiles` - Cria um novo perfil utilizando os seguintes campos:
  ```json

 {
    "alias": "Hulk",
    "power": "Super força",
    "name": "Bruce Banner",
    "age": "36",
    "sex": "male",
  }
```

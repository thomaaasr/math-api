# Math API

API REST de operações matemáticas, construída com **NestJS** e **TypeScript** como
prática do curso de *API Development com Node.js* (Impacta).

## O que ela faz

| Método | Rota | Exemplo | Resposta |
|---|---|---|---|
| GET | `/math/soma` | `/math/soma?a=2&b=3` | `{ "resultado": 5 }` |
| GET | `/math/subtracao` | `/math/subtracao?a=10&b=4` | `{ "resultado": 6 }` |
| GET | `/math/multiplicacao` | `/math/multiplicacao?a=3&b=7` | `{ "resultado": 21 }` |
| GET | `/math/divisao` | `/math/divisao?a=9&b=3` | `{ "resultado": 3 }` |

Entradas inválidas são recusadas com **400 Bad Request**:

- `a` ou `b` ausente ou que não é número → `O parâmetro "a" precisa ser um número.`
- divisão por zero → `Divisão por zero não é permitida`

## Como rodar

Pré-requisito: [Node.js](https://nodejs.org) 20 ou superior.

```bash
npm install
npm run start:dev
```

A API sobe em `http://localhost:3000`. Teste no navegador:
`http://localhost:3000/math/soma?a=2&b=3`

## Testes

```bash
npm test
```

## O que pratiquei

- Estrutura de um projeto NestJS: **módulos**, **controllers** e **services**
- Rotas com `@Get` e leitura de parâmetros com `@Query`
- Tratamento de caso de erro (divisão por zero)
- Testes unitários com **Jest**
- Separar responsabilidades: o **controller** valida a entrada e o **service** faz as contas
- **Injeção de dependência**: o NestJS entrega o service pronto ao controller

## Próximos passos

- [x] Validar a entrada (recusar `a` e `b` que não são números)
- [x] Responder erros com o status HTTP correto (400 Bad Request)
- [x] Mover a lógica para um *service* e testar cada operação
- [ ] Documentar a API com Swagger

## Tecnologias

`TypeScript` `Node.js` `NestJS` `Jest`

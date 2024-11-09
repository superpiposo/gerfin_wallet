# Gerfin Wallet Fullstack
DEMO 👉
Este é um exemplo do Gerfin Wallet como Aplicação web, desenvolvido inteiramente dentro do nextjs com o prisma como ORM.

## Pré-requisitos
- Node.js 22.2.0
- PostgresSQL

## Instalação
Clone o repositório
```
https://github.com/superpiposo/gerfin_wallet.git 
```

Uma vez instalado, abra o terminal dentro do diretório do projeto e instale as dependencias:
```
npm install
```
Inicie o Prisma na aplicação.
```
npx prisma init
```
Faça o migrate do banco de dados:
```
npx prisma migrate dev
```
No arquivo `.env`, faça a configuração de duas variáveis de ambiente com as pontuações escolhidas para o score:
- INCOME=""
- OUTCOME=""

inicie o projeto na sua máquina local:
```
npm run dev
```
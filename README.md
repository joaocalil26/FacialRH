# FacialRH

Sistema de controle de ponto por **reconhecimento facial** desenvolvido com **React Native (Expo)**, **Node.js** e **PostgreSQL**.

O FacialRH foi projetado para empresas que desejam registrar a jornada de trabalho de seus colaboradores utilizando um **tablet fixo na entrada ou saída da empresa**, eliminando cartões, senhas e outras formas tradicionais de marcação de ponto.

## Objetivo

Desenvolver uma plataforma moderna de controle de ponto eletrônico com autenticação por reconhecimento facial, oferecendo praticidade para os colaboradores e ferramentas de gestão para o setor de Recursos Humanos.

## Funcionalidades planejadas

### Colaborador

* Registro de entrada
* Saída para intervalo
* Retorno do intervalo
* Saída do expediente
* Reconhecimento facial automático
* Confirmação visual na tela
* Registro de data e hora
* Registro do dispositivo utilizado

### Gestor / RH

* Cadastro de empresas
* Cadastro de colaboradores
* Cadastro da biometria facial
* Gerenciamento de jornadas
* Relatórios completos
* Histórico de registros
* Exportação para PDF e Excel
* Controle de permissões

## Tecnologias

### Aplicativo (Tablet)

* React Native
* Expo
* TypeScript

### Backend

* Node.js
* Express
* Prisma ORM

### Banco de Dados

* PostgreSQL

### Reconhecimento Facial

* face-api.js (fase inicial)
* AWS Rekognition ou Azure Face API (fase futura)

## Estrutura do Projeto

facialrh/
├── mobile/      # Aplicativo React Native (tablet)
├── backend/     # API Node.js
├── web/         # Painel administrativo
├── docs/        # Documentação e diagramas
└── README.md

## Como executar

### Mobile

cd mobile
npm install
npm start

### Backend

cd backend
npm install
npm run dev

## Roadmap

* Estrutura inicial do projeto
* Interface do tablet
* Relógio em tempo real
* Cadastro de colaboradores
* Integração com PostgreSQL
* API REST
* Captura da câmera
* Reconhecimento facial
* Painel administrativo
* Geração de relatórios
* Publicação para empresas

## Licença

Este projeto está sendo desenvolvido para fins educacionais e de portfólio.

## Autor

**João Calil**

Projeto desenvolvido durante os estudos de Engenharia de Software.

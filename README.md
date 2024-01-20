<p align="center">
  <img src="https://github.com/mewmewdevart/ClarkeChallengeJr/assets/50052600/7f31b10e-bded-4aa8-a345-43f6c1c09812" alt="Clark Energia Logo" style="width: 200px;">
</p>

<p align="center">
	<b><i>
    💼 | Minha solução para o desafio técnico da vaga Dev. Full Stack Jr na Clark Energia.
  </i></b><br>
</p>

<p align="center">
	<img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/mewmewdevart/ClarkeChallengeJr?color=01C976" />
	<img alt="Main language" src="https://img.shields.io/github/languages/top/mewmewdevart/ClarkeChallengeJr?color=01C976"/>
	<img alt="License" src="https://img.shields.io/github/license/mewmewdevart/ClarkeChallengeJr?color=01C976"/>
</p>

<p align="center">
	<a href="clarke-challenge-jr.vercel.app" target="_blank">Acessar solução</a> 
</p>

## Sumário
1. [Desafio](#desafio)
2. [Curiosidade](#curiosidade)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Implementações](#implementações)
5. [Instruções](#instruções)
    - [Pré-requisitos](#pré-requisitos)
    - [Rodando o Projeto Localmente](#rodando-o-projeto-localmente)
      - [Backend (Clark-backend)](#backend-clark-backend)
      - [Frontend (Clark-researches)](#frontend-clark-researches)
6. [Resultado](#resultado)
    - [Frontend](#frontend)
    - [Backend](#backend)
7. [Tecnologias](#tecnologias)
8. [Referências](#referências)
9. [Licença](#licença)
10. [Contato](#contato)


## Desafio

O desafio propõe o desenvolvimento de uma solução full stack para atender aos requisitos da Clark Energia. A aplicação deve ser capaz de gerenciar informações de fornecedores por meio de uma API e proporcionar uma interface amigável para interação do usuário. Os principais requisitos incluem:

- O usuário deve informar seu consumo mensal de energia.
- Ao informar o consumo, o sistema deve mostrar quais fornecedores podem atender à necessidade do cliente.
- Cada fornecedor deve ter informações como nome, logo, estado de origem, custo por kWh, limite mínimo de kWh, número total de clientes e avaliação média dos clientes.
- Um fornecedor só pode atender um cliente se o consumo mensal deste for maior do que o limite mínimo de kWh do fornecedor.


## Curiosidade

Desenvolvi a interface simulada do Marketplace utilizando o Figma, o que auxiliou na estruturação do Front-End inicialmente com valores aleatórios.  Caso queira acessar o protótipo do figma : <a href="https://www.figma.com/file/0EY8zil2O90dwPKULIUQ2l/Clarke-Energia?type=design&node-id=0-1&mode=design&t=eG9erOGjwALgy0r4-0" target="_blank">Figma - Prototipo do Desafio : Clarke Energia</a>


## Estrutura do Projeto

- `clark-backend/`: Pasta que contém o backend da aplicação, uma API desenvolvida usando Django com dados fictícios.
- `clark-researches/`: Pasta que contém o frontend do projeto, desenvolvido utilizando React.


## Implementações

- [x] Frontend em React.
- [x] Backend em Python.
- [ ] Integração da aplicação com GraphQL.
- [ ] Testes automatizados no frontend usando Jest ou Cypress.
- [ ] Testes automatizados no backend.
- [ ] Configuração dos arquivos para execução da aplicação no Docker.


## Instruções

### Pré-requisitos

❗️ | Certifique-se de ter as seguintes ferramentas instaladas em sua máquina antes de prosseguir:

- [Python](https://www.python.org/downloads/): Linguagem de programação para o backend.
- [Node.js](https://nodejs.org/): Plataforma JavaScript para o frontend.

### Rodando o Projeto Localmente

#### Backend (Clark-backend)

1. **Configuração do ambiente virtual:**

```bash
# Navegue até o diretório do backend
$ cd clark-backend/myproject

# Crie um ambiente virtual (recomendado)
$ python -m venv myenv

# Ative o ambiente virtual
$ source myenv/bin/activate   # No Windows: .\myenv\Scripts\activate
```

2. **Instalação de dependências:**

```bash
# Instale as dependências do projeto
$ pip install -r requirements.txt
```

3. **Execute o servidor Django:**

```bash
# Inicie o servidor Django e deixe-o aberto no terminal
$ python manage.py runserver

# Acesse a visualização do Backend através da URL http://localhost:8000/
```

#### Frontend (Clark-researches)

1. **Instalação de dependências:**

```bash
# Em outro terminal, navegue até o diretório do frontend
$ cd clark-researches

# Instale as dependências do projeto
$ npm install
```

2. **Execute o servidor de desenvolvimento:**

```bash
# Inicie o servidor de desenvolvimento
$ npm start

# Acesse a visualização do FrontEnd através da URL http://localhost:3000/
```

**Observação:** Tanto o backend quanto o frontend devem estar em execução em terminais diferentes para funcionarem corretamente ao rodar o projeto localmente.


## Resultado

### Frontend

- Resultado das implementações no Frontend : Url : ```http://localhost:3000/```

![Screenshot Frontend](https://github.com/mewmewdevart/ClarkeChallengeJr/assets/50052600/de235313-30cc-492a-b438-252127f10537)

Pesquisa por kWh gastos ou nome da empresa:

![Screenshot Pesquisa Frontend](https://github.com/mewmewdevart/ClarkeChallengeJr/assets/50052600/cce91cb4-e9bf-4907-be10-e5fcfb8993a7)

### Backend

- Resultado das implementações no Backend : Url : ```http://localhost:8000/``` edite o conteudo através de ```http://localhost:8000/suppliers/```

Página de adição e edição do JSON da aplicação com os campos ID, nome da empresa, logo, estado de origem, custo por kWh, limite mínimo de kWh, número total de clientes e avaliação média dos clientes:

![Screenshot Backend](https://github.com/mewmewdevart/ClarkeChallengeJr/assets/50052600/94ac06b5-a5a4-4d2d-bd0e-91d0c9fb6c68)

![Screenshot Backend Adição/Edição](https://github.com/mewmewdevart/ClarkeChallengeJr/assets/50052600/1ac1c124-3b09-4e8b-928c-961b56e14f16)


## Tecnologias

- [VS Code](https://code.visualstudio.com/): Ambiente de desenvolvimento integrado.
- [Git Bash](https://git-scm.com/downloads): GitBash para realizar commits.
- [Figma](https://www.figma.com/): Ferramenta de prototipagem para desenvolver elementos da interface.
- [Node.js](https://nodejs.org/en): Plataforma para instalação de pacotes necessários para o frontend (React, Material UI, Bootstrap, etc.).
- [Python](https://www.python.org/downloads/): Python para importação de pacotes no backend.


## Referências

- [Markdown - Basic Syntax](https://www.markdownguide.org/basic-syntax/): Documentação sobre a sintaxe básica do Markdown.
- [W3Schools](https://www.w3schools.com/): Documentação e tutoriais práticos.
- [Figma Community](https://www.figma.com/community): Inspiração na prototipação do projeto.
- Fóruns e blogs da internet, como Alura, Stack Overflow e Geeks for Geeks, para sanar dúvidas relacionadas à linguagem.


## Licença

Este projeto é licenciado nos termos do arquivo [LICENÇA](LICENSE). Consulte o arquivo para obter mais detalhes.


## Contato

<p align="center">
  Desenvolvido com muito ☕ por
  <a href="https://linktr.ee/mewmewdevart" target="_blank">Larissa Cristina Benedito</a>
</p>

<p align="center">
  <img src="https://github.com/mewmewdevart/ClarkeChallengeJr/assets/50052600/7f31b10e-bded-4aa8-a345-43f6c1c09812" alt="Clark Energia Logo" style="width: 200px;">
</p>

<p align="center">
	<b><i>
    💼 | Minha solução para o desafio técnico da desenvolvedora full stack na Clark Energia.
  </i></b><br>
</p>

## Desafio 🪡
O desafio consiste em desenvolver uma solução full stack para atender aos requisitos propostos pela Clark Energia. A proposta envolve a criação de um sistema capaz de gerenciar informações de fornecedores (suppliers) por meio de uma API e uma interface amigável para interação do usuário. Atendendo os seguintes requisitos:

- O usuário deverá informar a sua consumo mensal de energia, exemplo: 30000 kWh (um número fictício > 0)
- Ao informar o consumo, o sistema deverá mostrar quais fornecedores poderiam atender a necessidade do cliente
- Cada fornecedor deve ter as seguintes informações: nome, logo, estado de origem, custo por kWh, limite mínimo de kWh, número total de clientes e avaliação média dos clientes
- Um fornecedor só pode atender um cliente caso o consumo mensal de energia deste seja maior do que o limite mínimo de kWh do fornecedor

## Estrutura do desafio/
- clark-backend/ Pasta onde está localizado o backend da aplicação : API desenvolvida usando Django <br>
- clark-researches/ Parte frontend do projeto : Desenvolvida usando React

## Implementações:
- [x] O frontend for feito em React
- [x] Backend for feito em Python
- [ ] Aplicação for integrada com Graphql
- [ ] Frontend tiver testes automatizados com Jest ou Cypress
- [ ] Backend tiver testes automatizados
- [ ] Os arquivos para que a aplicação funcione no Docker estiverem configurados

## Instruções
### Pre-requisitos
Para executar o projeto, é necessário ter instalados em sua máquina os seguintes requisitos:

- [Python](https://www.python.org/downloads/) | Linguagem de programação para o backend.
- [Node.js](https://nodejs.org/) | Plataforma JavaScript para o frontend.

❗️| Certifique-se de ter todas as ferramentas necessárias instaladas em sua máquina local antes de seguir com as próximas etapas<br>

### Instruções para rodar o programa localmente:

**0. Baixe os arquivos**

```bash
# Clone o meu repositório
$ git clone https://github.com/mewmewdevart/ClarkeChallengeJr.git

# Entre dentro da pasta do projeto
$ cd ClarkeChallengeJr/
```

**Backend (Clark-backend)**

**1. Configuração do ambiente virtual:**

```bash
# Navegue até o diretório do backend
$ cd clark-backend/myproject

# Crie um ambiente virtual (recomendado)
$ python -m venv myenv

# Ative o ambiente virtual
$ source myenv/bin/activate   # No Windows: .\myenv\Scripts\activate
```

**2. Instalação de dependências:**

```bash
# Instale as dependências do projeto
$ pip install -r requirements.txt
```

**3. Execute o servidor Django:**

```bash
# Inicie o servidor Django e o deixe aberto no Terminal
$ python manage.py runserver

## Acesse a visualização do Backend através da URL http://localhost:8000/
```

**Frontend (Clark-researches)**

**1. Instalação de dependências:**

```bash
# Em outro terminal; Navegue até o diretório do frontend
$ cd clark-researches

# Instale as dependências do projeto
$ npm install
```

**2. Execute o servidor de desenvolvimento:**

```bash
# Inicie o servidor de desenvolvimento
$ npm start

## Acesse a visualização do FrontEnd através da URL http://localhost:3000/
```
<hr>
Tanto o backend quanto o frontend precisam estar inicializados em terminais diferentes; ambos devem estar em execução para funcionarem em sintonia ao rodar o projeto localmente. 

### FrontEnd
Resultado das implementações no Frontend : Url : ```http://localhost:3000/```
![Screenshot from 2024-01-20 15-34-11](https://github.com/mewmewdevart/ClarkeChallengeJr/assets/50052600/de235313-30cc-492a-b438-252127f10537)

É possivel pesquisar através dos kWh gastos e do nome da empresa:
![Screenshot from 2024-01-20 15-32-24](https://github.com/mewmewdevart/ClarkeChallengeJr/assets/50052600/cce91cb4-e9bf-4907-be10-e5fcfb8993a7)


### Backend
Resultado das implementações no Backend : Url : ```http://localhost:8000/``` edite o conteudo através de ```http://localhost:8000/suppliers/```
Pagina de adição e edição do json da aplicação com os campos id, nome da empresa, logo, estado de origem, custo por kWh, limite mínimo de kWh, número total de clientes e avaliação média dos clientes:
![Screenshot from 2024-01-20 15-40-42](https://github.com/mewmewdevart/ClarkeChallengeJr/assets/50052600/94ac06b5-a5a4-4d2d-bd0e-91d0c9fb6c68)

![Screenshot from 2024-01-20 15-40-53](https://github.com/mewmewdevart/ClarkeChallengeJr/assets/50052600/1ac1c124-3b09-4e8b-928c-961b56e14f16)
<hr>

## Tecnologias
- [VS CODE](https://code.visualstudio.com/) | Ambiente de desenvolvimento integrado para escrever, ler e executar código do projeto com mais eficiência.
- [Git Bash](https://git-scm.com/downloads) | GitBash para realizar os commits.
- [Figma](https://www.figma.com/) | Figma para desenvolver alguns elementos da interface.

## Referencias
- [Markdown](https://www.markdownguide.org/basic-syntax/) | Documentação de como utilizar o Markdown.
- [Documentação W3Schools](https://www.w3schools.com/) | Documentação e tutoriais práticos.
- [Figma Community](https://www.figma.com/community) | Inspiração na prototipação do projeto.
- +Forums e Blogs da internet para sanar as minhas dúvidas relacionadas à linguagem (Alura, Stack Overflow e Geeks for Geeks).

## 📜 Licença
Este projeto é licenciado sob os termos do arquivo [LICENÇA](LICENSE). Veja o arquivo para mais detalhes. <br>

<p align="center">
  Desenvolvido com muito ☕ por
  <a href="https://linktr.ee/mewmewdevart" target="_blank">Larissa Cristina Benedito</a>
</p>

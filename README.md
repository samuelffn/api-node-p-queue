# api-node-p-queue  
Poc de uma API em NodeJs para uso da lib p-queue.  
  
## Comandos para criação do projeto  
1) mkdir api-node-p-queue (nome do diretório do projeto)  
2) cd api-node-p-queue  
3) npm init -y (comando para criação do projeto)  
4) ls (para listar o que tem na pasta)  
  
## Comando para executar o projeto  
nstalando as dependências: **npm i**  
Executando direto com o node: **node index.js**  
Usando o nodemon: **npm run start**  
  
## Dependências utilizadas no projeto    
npm install -D nodemon  
npm i p-queue  
  
## nodemon  
**npm install -D nodemon**  
Dependência para ser utilizada apenas no ambiente de desenvolvimento.  
Ela faz com que ao salvar alguma alteração o servidor faça a atualização semprecisar parar e executar novamente.  
Utilização:  
1) Acessa o package.json  
2) Em scripts, cria uma nova propriedade: **"start": "nodemon index.js"**  
3) No terminal executa a aplicação usando o comando: **npm run start**  
Obs.: O npm run serve para executar os comandos que estão em script  
4) Ao executar a aplicação pela primeira vez ela vai criar o banco de dados.  
  
## p-queue  
**npm i p-queue**  
Esta lib é utilizada para paralelização. O Node é uma linguagem que possui apenas uma thread, mas a p-queue simula uma paralelização de processamento.  
Útil para operações assíncronas (ou sincronização) de limitação de taxa. Por exemplo, ao interagir com uma API REST ou ao realizar tarefas com uso intensivo de CPU/memória.  
Para mais informações, acesse o link:  
- https://www.npmjs.com/package/p-queue  
  
  

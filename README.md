# Automação do Portal de beneficios de Saúde da Petrobras criado com Playwright e Typescript

## Visão Geral

Este é um projeto de automação do Portal de beneficios da Petrobras que utiliza o runner integrado do Playwright com o modelo de objetos de página/fixtures como base de design.

## Índice

- [Recursos](#recursos)
- [Introdução](#introducao)
  - [Pré-requisitos](#pre-requisitos)
  - [Execução local](#execucao-local)
  - [Execução no Docker](#execucao-no-docker)
- [Em Breve](#em-breve)

## Recursos

- Uso de dados de teste a partir de arquivo JSON para data-driven, padrão builder com a biblioteca faker e templates personalizados de fábrica de dados
- Anexar vídeo e captura de tela em caso de falha no relatório HTML do Playwright
- Estado de armazenamento do Playwright e uso de configuração global para login único
- Arquivo JSON de ambiente para facilitar a execução de testes em ambientes de STG ou PROD
- Uso de fixtures para um modelo de objetos de página mais limpo
- Suporta execução serial e paralela
- Facilmente adicionar mais testes para testar APIs RESTful

## Introdução

### Pré-requisitos

- Node.js: Baixe e instale o Node.js [aqui](https://nodejs.org/en/download)
- Visual Studio Code: Baixe e instale o VS Code [aqui](https://code.visualstudio.com/)

### Execução local

1. Clone o repositório:

```sh
  SSH: git clone ssh://<coreID>@github.com
```

2. Navegue até o diretório raiz do projeto e instale o seguinte:
   - Instale os pacotes npm usando:

   ```sh
   npm install
   ```
   - Se esta for a sua primeira vez com o framework Playwright do Node.js, você precisará baixar os navegadores necessários:

   ```sh
   npx playwright install
   ```
3. No diretório raiz do projeto, execute o comando abaixo para rodar todos os testes de UI:

   ```sh
   npm run "petrobras-test:ui
   ```

   - Se quiser rodar em um navegador específico como Firefox ou WebKit, pode executar o seguinte comando. Por padrão, o projeto rodará no Chromium.

   Firefox:

   ```sh
   BROWSER=firefox npm run "petrobras-test:ui
   ```

   WebKit:

   ```sh
   BROWSER=webkit npm run "petrobras-test:ui
   ```

   **Nota**: Por padrão, os testes rodarão em modo headless e em paralelo.
   Se você gostaria de rodar os testes de UI em modo com interface, use o flag **--headed** e/ou se deseja desabilitar o paralelismo use **--workers=1**

   ex:
    ```sh
   npm playwright test --headed --workers=1
   ```

**Opcional:** Se você gostaria de executar os testes usando a IDE e o Runner do Playwright. Abra o VS Code e baixe a extensão: **Playwright Test for VS Code**.
Você também pode habilitar os SCRIPTS NPM no explorador do VS Code e executá-los dessa forma.

### Execução no Docker

1. Clone o repositório:

```sh
    SSH: git clone ssh://<coreID>@github.com
```

2. Navegue até o diretório raiz do projeto.

3. Construa a imagem Docker:

```sh
docker build -t <nomeDaImagem> .
```

4. Execute o contêiner Docker:

```sh
docker run <nomeDaImagem>
```

### Executando Codegen

- Use o comando codegen para executar o gerador de testes seguido pela URL do site para o qual deseja gerar testes. A URL é opcional e você sempre pode executar o comando sem ela e então adicionar a URL diretamente na janela do navegador.

```sh
npx playwright codegen https://saudepetrobrasteste.service-now.com/beneficiario
```

ou no VS Code deve instalar a extensão:

- Playwright Test for VS Code: Baixe e instale a extensão [aqui](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)

Gravar um Novo Teste
Para gravar um teste, clique no botão Gravar novo na barra lateral de Testes. Isso criará um arquivo test-1.spec.ts, bem como abrirá uma janela do navegador.

### Contribuindo

Obrigado pelas contribuições da equipe de QA!  
- Rafael Pizarro
 [@Raul Batalha](raulbatalha@gmail.com)

### Licença
MIT © [Saúde Petrobras ](https://saudepetrobrasteste.service-now.com/)

# Base de Usuários

## Preparando o ambiente

Verificar se o Node.js e npm estão instalados, caso contrário, proceder com a [instalação](https://nodejs.org/en/download/) antes de continuar.

Se necessário, instalar o Angular CLI através do comando:

```
npm install -g @angular/cli
```

## Executar a aplicação diretamente do CLI

Primeiro, instalar as dependências do projeto, vá até a pasta raíz e execute:

```
npm install
```

Para executar a aplicação, utilize o comando:

```
ng serve
```

A aplicação estará disponível em `http://localhost:4200/`. Para fazer o login utilize o nome de usuário `admin` e senha `admin`.

## Criar os arquivos da aplicação

Para simplesmente criar os arquivos da aplicação, execute:

```
ng build -prod
```

Os arquivos serão criados no diretório `dist/`, coloque-os em um servidor para executá-los. Para fazer o login utilize o nome de usuário `admin` e senha `admin`.


# **Marvel Characters** - Your wiki for Marvel Comics Universe

- **Develepoled by:** [Julio L. Muller](https://github.com/juliolmuller)
- **Released on:** Aug 1, 2019
- **Updated on:** Aug 1, 2019
- **Latest version:** 1.0.0
- **License:** MIT

## Overview

This is an application developed as a challenge, proposed by the company [Juno](https://www.juno.com.br/). The application consumes Marvel API, performing a search in the characters of the Marvel Universe and displaying their details. The main objective was to develop a fully responsive front-end web application using React library.

[Take a look at the app in production!](https://jjsolutions.net/)

<!-- ![Marvel Characters](./app-overview.jpg) -->

Elaborar um projeto front-end para consultar a API da Marvel (https://developer.marvel.com/).

## Objetivos

- Consultar o endpoint [/v1/public/characters](https://developer.marvel.com/docs#!/public/getCreatorCollection_get_0)
  - Exibir campo de busca para que o usuário digite o termo filtrando o campo `nameStartsWith`;
  - Exibir os resultados da busca (resumidamente);
  - Ao abrir um item do resultado da busca, exibir mais informações daquele item;
  - Quando houver uma ocorrência de thumbnail deverá ser exibida a imagem como melhor convier para a interface;
- A interface deverá ser obrigatoriamente responsiva;
- A entrega deverá conter um arquivo .MD detalhando o projeto.

## Bônus opcional

- Paginação;
- SASS;
- Transitions;
- Rotinas Node e configurações adicionais para o ambiente;
- Testes unitários por componentes.

## Considerações

Você é livre para decidir o layout, mas ele deve ser responsivo.

- Linguagem a ser utilizada: Node + React, utilizando JS com ES6.
- Ao final, compartilhar o projeto com o usuário @boletofacil

<!--
## How to Set Up the Enviroment

Marvel Characters is a web application developed with PHP Laravel and MySQL. So, to get it up and running in your local enviroment, you are going to meet a few requirements.

### Software Required

Make sure you have the following applications installed and have their enviroment variables properly configured:

- [PHP 7.2+](https://php.net/)
- [Composer](https://getcomposer.org/)
- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)

### Dependencies Installation

After downloading or cloning this repository, run the following command lines inside your project directory:

```bash
composer install
```

### Database Connection Setup

To allow Laravel to access setup database schema and connect to it, do through the following steps:

1. Rename the file `.env.example`, in project root, to `.env`;
2. In this file, change all the values attributed to those variables prefixed with `DB_*` according to your local database configuration;
3. Inside your database server, create a database, with the same name of the variable `DB_DATABASE` you just set;
4. Run laravel migration to create the required tables and to seed them with the initial configuration:

```bash
php artisan migrate --seed
```

The parameter `--seed` already insert the 5 chosen languages (PHP, Java, JavaScript, Python & C#) into table `languages` and pulls fresh data for `repositories` from the GitHub API for each one of those languages.

### Run the Server

For Laravel projects, you can use the web server of your choice, like Apache, you just need to point the application root as being the `/public/` folder. However, you can run the embeded Laravel's server instead, by running the following command line, in the project root:

```bash
php artisan serve
```

## Automated Tests

As part of the challenge, the project should contain scripts for testing (included in `/tests` folder). To run it, execute the following command line:

```bash
"./vendor/bin/phpunit"
```

The tests execute 771 assertions related to HTTP requests (routes), database content and data consistency.

## Technologies

Here are the main technologies used to build this project:

### Back-End

- Programing Language: [PHP 7](https://php.net/)
- Server-Side Framework: [Laravel 5.8](https://laravel.com/)
- HTTP Client: [Ixudra PHP cURL](https://github.com/ixudra/curl)
- External API: [GitHub Search API](https://developer.github.com/v3/search/)
- Relational Database: [Oracle MySQL](https://www.mysql.com/)

### Front-End

- Styles: [Bootstrap 4](https://getbootstrap.com/)
- JS Framework: [jQuery 3](https://jquery.com/)
- Front-End Header Template: [brojask's](https://bootsnipp.com/brojask)

### Deploy

- Cloud Platform: [Heroku](https://www.heroku.com/)

### Dev Tools

- Server Development Package: [XAMPP for Windows](https://www.apachefriends.org/pt_br/index.html)
- Text Editor: [Visual Studio Code](https://code.visualstudio.com/)
- Console Emulator: [Cmder](https://cmder.net/)
- PHP Package Manager: [Composer](https://getcomposer.org/)
- JS Package Manager: [Node.js](https://nodejs.org/en/)
- API Development Enviroment: [Postman](https://www.getpostman.com/)
- PHP Testing: [PHPUnit](https://phpunit.de/)
- Versioning Tool: [Git](https://git-scm.com/)
- Remote Repository: [GitHub](https://github.com/)
-->

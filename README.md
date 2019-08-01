
# Marvel Characters - Your wiki for MCU

- **Develepoled by:** [Julio L. Muller](https://github.com/juliolmuller)
- **Released on:** Aug 1, 2019
- **Updated on:** Aug 1, 2019
- **Latest version:** 1.0.0
- **License:** MIT

## Overview

This is an application developed as a challenge, proposed by the company [Juno](https://www.juno.com.br/). The application consumes Marvel API, performing a search in the characters of the Marvel Universe and displaying their details. The main objective was to develop a fully responsive front-end web application using React library.

[Take a look at the app in production!](https://jjsolutions.net/)

<!-- ![Marvel Characters](./app-overview.jpg) -->

## Main Objectives

The aaplication consumes [Marvel API endpoint for characters](https://developer.marvel.com/docs#!/public/getCreatorCollection_get_0) and meets the following mandatory requirements:

- :heavy_check_mark: Display a search input for the user to filter the field `nameStartsWith`;
- :heavy_check_mark: Display search result (summarized);
- :heavy_check_mark: When opening an item, displat its details;
- :heavy_check_mark: Display responsive thumbnails (that better fits the screen) for the items which has it;
- :heavy_check_mark: Interface MUSTt be responsive;
- :heavy_check_mark: The final project must contain a `.MD` file with specifications of the project.
- :heavy_check_mark: Develop the application using React and Node.js (with ES6+)

### Optional bonus

- :heavy_check_mark: Pagination;
- :warning: SASS (implemented for Bootstrap and additional styles customization);
- :x: Transitions;
- :heavy_check_mark: Project watchers and routines with Node.js and other enviromental utilities;
- :x: Unit tests by componnent.

## Setting Up the Enviroment

To reproduce the development enviroment locally you may start downloading the compacted folder of the project or use **Git** to clone the repository (recommended):

```bash
git clone https://github.com/juliolmuller/marvel-characters
```

Afterwards, you will also need **Node.js** to download the packages dependencies and run the development routines:

```bash
npm install
```

You may find this 2 tools in their respective web sites:

- **Git:** (https://php.net/)
- **Node.js:** (https://nodejs.org/)

Additionally, you also must sign up to the [Marvel Development Portal](https://developer.marvel.com/) to generate your application keys, so your web application can consume their application programming interface (API).

Once you generate your keys, you will need to inport them into the project. For that, rename the file `env.js.example' (inside directory `src/config`) to 'env.js`, and paste **PUBLIC** and **PRIVATE** hashes in the respective places. 

You should be ready for coding now!

Run `npm start` and you are good to go!.

<!--
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

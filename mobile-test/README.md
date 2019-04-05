# Teste Prático (Mobile)

Elaborar um projeto mobile que faça buscas de repositórios no Github:

## Objetivos

* Exibir um campo de busca para que o usuário digite o termo a ser buscado.

* Executar as consultas à API do Github através do seguinte endpoint:
`https://api.github.com/search/repositories?q=[termo]`

* Exibir os resultados da busca em forma de listagem (resumidamente).

* Ao abrir um item do resultado da busca exibir mais informações daquele item.

* Persistir os resultados localmente a fim de que sejam acessíveis offline.

* Implementar testes unitários.

## Bônus opcional

* Implementar paginação (parâmetros `page` e `per_page`). Ex:
`https://api.github.com/search/repositories?q=android&per_page=100&page=2`)

* Integração com Firebase Realtime Database.

## Considerações

* Você é livre para decidir o layout, mas ele deve ser responsivo.

* Linguagem a ser utilizada: Kotlin (Android) ou Swift (iOS).

* Ao final, versionar o código no GitHub (ou na plataforma de sua preferência) nos enviar o link.

## exercícios 1 e 2
Coisas que eu quero lembrar sobre o DOM:

markup como HTML é a interface que é traduzida numa estrutura de dados chamada
DOM, na memória do Browser. É isso que o javascript manipula.

Entender os tipos básicos dessa estrutura de dados, explica de onde vem os tipos
do React!

document, element, nodeList, attribute e NamedNodeMap.

Ele toma cuidado de chamar a atenção de uma confusão comum: O name do form vem
do HTMLFormElement, enquanto o className vem da interface HTMLElement. Isso
corresponde com a forma que typamos essas coisas no React.

Por exemplo, uma HTMLTableElement "herda", na ordem do mais pro menos genérico:
Node interface -> Element interface -> HTMLTableElement.

## React.createElement()

https://www.reddit.com/r/reactjs/comments/ia8sdi/any_other_typescript_users_constantly_confused/g1lsu9n/


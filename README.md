# Desenvolvimento Web – Semana 04: Arrays, DOM e Eventos

Projeto desenvolvido para consolidação dos conceitos fundamentais de JavaScript moderno (ES6+), cobrindo manipulação avançada de arrays, alteração de elementos do DOM e tratamento de eventos.

## Conteúdo do Projeto

### 1. Métodos de Arrays
- **map**: Utilizado para transformar dados, mapeando cada elemento do array e retornando um novo array com o mesmo tamanho (ex: conversão para maiúsculas e extração de chaves específicas de objetos).
- **filter**: Utilizado para filtrar elementos com base em uma condição booleana, retornando um novo array contendo apenas os itens que correspondem ao critério (ex: produtos abaixo de determinado valor).
- **reduce**: Processa o array acumulando seus valores para retornar um único resultado final (ex: cálculo do valor total de itens).
- **forEach**: Iterador simples que executa uma função para cada elemento do array sem retornar um novo array (ex: exibição no console e criação sequencial de elementos).

### 2. Manipulação do DOM
- Seleção de elementos com `querySelector` e `querySelectorAll`.
- Alteração dinâmica de textos e marcação HTML usando `textContent` e `innerHTML`.
- Criação e inserção de novos elementos no documento utilizando `createElement` e `append`.
- Gerenciamento de classes CSS em tempo de execução via `classList` (`add`, `contains`, `toggle`).

### 3. Eventos e Event Delegation
- Escuta de eventos básicos de interface (`click`, `mouseover`, `keyup`).
- Manipulação de formulários interceptando o evento `submit` e prevenindo o comportamento padrão do navegador via `e.preventDefault()`.
- **Event Delegation**: Técnica aplicada adicionando um único escutador de eventos no elemento pai (`#lista`) em vez de associar listeners individuais a cada item (`<li>`). Isso melhora substancialmente a performance da aplicação e garante que elementos criados dinamicamente recebam a funcionalidade de clique sem a necessidade de reanexar novos manipuladores.

## Como Executar

1. Clone este repositório ou baixe os arquivos.
2. Abra o arquivo `index.html` em qualquer navegador web moderno.
3. Pressione a tecla `F12` para abrir as Ferramentas do Desenvolvedor (*DevTools*) e selecione a aba **Console** para acompanhar a execução dos scripts.
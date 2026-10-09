console.log("=== BLOCO 1: ARRAYS E MÉTODOS ===\n");

const nomes = ["Ana", "Carlos", "Beatriz"];

nomes.forEach(nome => {
  console.log(`Olá, ${nome}!`);
});

const nomesMaiusculas = nomes.map(nome => nome.toUpperCase());
console.log("Nomes em maiúsculas:", nomesMaiusculas);

const precos = [10, 25, 40, 5, 60];

const precosMaioresQue20 = precos.filter(preco => preco > 20);
console.log("Preços maiores que 20:", precosMaioresQue20);

const somaPrecos = precos.reduce((acumulador, precoAtual) => acumulador + precoAtual, 0);
console.log("Soma de todos os preços:", somaPrecos);

const produtos = [
  { nome: "Caderno", preco: 15 },
  { nome: "Mochila", preco: 120 },
  { nome: "Caneta", preco: 5 },
  { nome: "Livro", preco: 45 }
];

const nomesProdutos = produtos.map(produto => produto.nome);
console.log("Nomes dos produtos:", nomesProdutos);

const produtosBaratos = produtos.filter(produto => produto.preco < 50);
console.log("Produtos com preço menor que 50:", produtosBaratos);

const totalProdutos = produtos.reduce((acumulador, produto) => acumulador + produto.preco, 0);
console.log("Soma total dos produtos:", totalProdutos);

produtos.forEach(produto => {
  console.log(`${produto.nome}: R$ ${produto.preco}`);
});


console.log("\n==================================================");
console.log("=== BLOCO 2: MANIPULAÇÃO DO DOM ===");
console.log("==================================================\n");

const titulo = document.querySelector("#titulo");
titulo.textContent = "Blog do Michel";

const paragrafos = document.querySelectorAll(".texto");
paragrafos.forEach(p => console.log(p.textContent));

const lista = document.querySelector("#lista");
lista.innerHTML = "<li>Primeiro item</li><li>Segundo item</li>";

const terceiroLi = document.createElement("li");
terceiroLi.textContent = "Terceiro item";
lista.append(terceiroLi);

terceiroLi.classList.add("destaque");
console.log("Possui a classe 'destaque'?:", terceiroLi.classList.contains("destaque"));

const tarefas = ["Estudar JS", "Fazer exercícios", "Revisar DOM"];
tarefas.forEach(tarefa => {
  const novoLi = document.createElement("li");
  novoLi.textContent = tarefa;
  lista.append(novoLi);
});

const primeiroItem = lista.querySelector("li");
if (primeiroItem) {
  primeiroItem.classList.add("feito");
}

const totalItens = document.querySelectorAll("li").length;
console.log("Quantidade total de itens na lista:", totalItens);


console.log("\n==================================================");
console.log("=== BLOCO 3: EVENTOS E EVENT DELEGATION ===");
console.log("==================================================\n");

const botao = document.querySelector("#botao");

botao.addEventListener("click", () => {
  console.log("Clicou!");
});

botao.addEventListener("mouseover", () => {
  botao.textContent = "Pode clicar!";
});

const inputNome = document.querySelector("#nome");
inputNome.addEventListener("keyup", () => {
  console.log("Nome atual:", inputNome.value);
});

lista.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("feito");
    console.log("Texto do item clicado:", e.target.textContent);
  }
});

const liDinamico = document.createElement("li");
liDinamico.textContent = "Item adicionado dinamicamente para teste";
lista.append(liDinamico);

const formulario = document.querySelector("#formulario");
const inputTarefa = document.querySelector("#tarefa");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const textoTarefa = inputTarefa.value.trim();
  
  if (textoTarefa !== "") {
    const novoLi = document.createElement("li");
    novoLi.textContent = textoTarefa;
    lista.append(novoLi);
    inputTarefa.value = "";
  }
});
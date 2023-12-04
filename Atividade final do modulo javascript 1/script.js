let elementoJavaScript = document.createElement("h1");

elementoJavaScript.innerText = "Um site qualquer de vendas"
elementoJavaScript.id = "Titulo"

let titulo = document.querySelector("#Titulo");
titulo.appendChild (elementoJavaScript);

let elementoJavaScripth3 = document.createElement("h3");
elementoJavaScripth3.innerText = "Playstation 5";
elementoJavaScripth3.id = "nomeProduto";

let produto = document.querySelector("#nomeProduto");
produto.appendChild(elementoJavaScripth3);

let elementoJavaScriptLi = document.createElement("li");
elementoJavaScriptLi.innerText = "Preço R$";
elementoJavaScriptLi.id = "Preco";

let preco = document.querySelector("#Preco");
preco.appendChild(elementoJavaScriptLi);

console.log(elementoJavaScript);
console.log(elementoJavaScriptLi);

let precoValor = 4500;
preco.innerHTML = `${elementoJavaScriptLi.innerText} ${precoValor}`;

let elementoDescontoLi = document.createElement("li");
elementoDescontoLi.innerHTML = `Desconto 10% no pagamento com Pix: -R$${precoValor * 0.1}`;
elementoDescontoLi.id = "Desconto";

let desconto = document.querySelector("#Desconto");
desconto.appendChild(elementoDescontoLi);
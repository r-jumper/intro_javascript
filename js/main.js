//====================================AULA 1:=====================================
/*
var nome = " Fernando Ramos.";
var idade = 41
var idade2 = 10
var soma = idade + idade2
var mult = idade * idade2
var frase = "javascript é uma linguagem de script"
//alert("Bem vindo" + nome + " Você tem: " + idade + " anos.");
//alert (idade + idade2);

console.log(nome);
console.log(idade);
console.log(frase);
console.log(nome.replace("Ramos", "Cesar"));
//alert(nome.replace("Ramos", "Cesar"));
console.log(frase.toUpperCase());
console.log(mult);
*/



//=====================================AULA 2:=====================================
/*
var lista = ["maça", "banana", "morango"]
lista.push("mamão");
lista.pop();

console.log(lista);
console.log(lista[1]);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" | "));
*/
/*
var fruta = {nome: "maça", cor: "vermelha"};
console.log(fruta.nome);
console.log(fruta.cor);
*/
/*
var frutas = [{nome: "maça", cor: "Vermelha"}, 
{nome: "banana", cor: "amarela"}, {nome: "morango", cor: "vermelha"}]
console.log(frutas);
*/



//=====================================AULA 3:======================================
/*
var idade = prompt("Qual sua idade? ")

if (idade >= 18){
    alert ("Você é maior de idade");
}else{
    alert("Você é menor de idade");
};
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    count ++; //ou count= count +1
};
*/
/*
var count;
for (count= 0; count <= 5; count ++){
    alert(count);
};
*/
/*
var dta= new Date();
alert(dta.getDate());
alert(dta.getHours());
*/


//=======================================AULA 4:========================================

/*
function soma(n1, n2){
    return n1 + n2;   
}

alert(soma(15, 6));
alert(soma(15, 5));
alert(soma(10, 10));
alert(soma(100, 5));
*/
/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(setReplace("Vai corinthians", "corinthians", "Brasil"));
*/



//=======================================AULA 5:========================================

/*
function validIdade(idade){
    var validar;
    if (idade >=18){
        validar = true
    }else {
        validar = false
    }
    return validar;
}
var idade = prompt("Qual sua idade? ");
console.log(validIdade(idade));
*/

function clicar(){
    //alert("Obrigado por clicar");
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar</b>";
    //console.log(document.getElementById("agradecimento"));    
}
function redirecionar(){
    document.getElementById("redireciona");
    window.open("https://digitalinnovation.one/");
    //window.location.href = "https://getbootstrap.com/"; abre na mesma aba
}
function trocar(){
    document.getElementById("troca").innerHTML = "O Texto foi trocado";
    //alert("Troca o texto");
}


// Outra forma
function trocar1(elemento){
    elemento.innerHTML = "Passe o mouse para trocar";
}
function voltar1(elemento){
    elemento.innerHTML = "Passe o mouse para voltar"
}
function funcaoChange(elemento){
    console.log(elemento.value);
}
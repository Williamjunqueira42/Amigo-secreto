//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


let amigos = [];


function adicionarAmigo(){
    let input = document.getElementById("amigo").value;


    if (input != ""){
        amigos.push(input);
        console.log("Nome adicionado a lista!")
        console.log(amigos);
        document.getElementById("amigo").value = ""; // -> lipando o campo input

        atualizarListaAmigos()
    }
    else{
        alert("Por favor, insira um nome");
       
    }


}

function atualizarListaAmigos(){
    lista_atual = document.getElementById("listaAmigos");
    lista_atual.innerHTML = "";


    for (let amigo of amigos){
        texto = `<li>${amigo}</li>`;
        lista_atual.innerHTML += texto;
    }
}


function sortearAmigo(){
        if (amigos.length >= 2){
            indice_sorteado = Math.floor((Math.random() * amigos.length));
            amigo_sorteado = amigos[indice_sorteado];


            document.getElementById("resultado").innerHTML = amigo_sorteado;

        }
        else{
            alert("Adicione pelo menos 2 Amigos!");
        }

}
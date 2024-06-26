let input = document.getElementById("input-principal")
let botao = document.getElementById("botao-adicionar")
let listaCompleta = document.getElementById("tarefas")
let arrayDeTarefas = []

function mostrarNaTela(){
    let novaLista = ""

    arrayDeTarefas.forEach( tarefa =>{
        novaLista = novaLista + `
            <li>
                <p class="item-tarefa">${tarefa}</p>
            </li>
        `
    })

    listaCompleta.innerHTML = novaLista
}

function cliquiNoBotao(){
    arrayDeTarefas.push(input.value)  
    mostrarNaTela()  
}

botao.addEventListener("click", cliquiNoBotao)
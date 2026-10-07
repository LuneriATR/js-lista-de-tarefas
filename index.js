let tarefas = [];

function buscarTarefas(){
    try{
        fetch("https://js-lista-de-tarefas-api.onrender.com/tarefas")
        .then(resposta => resposta.json())
        .then()
    } catch (error){
        console.log("Error: ", error.message);
    }
}
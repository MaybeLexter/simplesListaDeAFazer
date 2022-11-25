let adctarefaBt = document.getElementById('adcTarefa');
let conteudoTarefa = document.getElementById('conteudoTarefa');
let textfieldinput = document.getElementById('textField');

adctarefaBt.addEventListener('click', function(){
    var tarefasPg = document.createElement('p');
    tarefasPg.classList.add('tarefasPg-styling');
    tarefasPg.innerText = textfieldinput.value;
    conteudoTarefa.appendChild(tarefasPg);
    textfieldinput.value = "";
    tarefasPg.addEventListener('click', function(){
        tarefasPg.style.textDecoration = "line-through";
    })
    tarefasPg.addEventListener('dblclick', function(){
        conteudoTarefa.removeChild(tarefasPg);textfieldinput  })
})
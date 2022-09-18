const form = document.getElementById('form');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const telefone = document.getElementById('telefone');

function checkInput()
{
    const nomeValue = nome.value;
    const emailValue = email.value;
    const telefoneValue = telefone.value;

    if(nomeValue === ''){
        setErrorForm(nome,"É preciso o nome do aluno.")
    }else{
        setSuccessForm(nome);
    }
    if(emailValue === ''){
        setErrorForm(email,"É preciso de um e-mail.")
    }else{
        setSuccessForm(email);
    }
    if(telefoneValue === ''){
        setErrorForm(telefone,"É preciso do numero de telefone.")
    }else{
        setSuccessForm(telefone);
    }
}
function setFormNormal(input1,input2,input3){
    const formControl1 = input1.parentElement;
    const formControl2 = input2.parentElement;
    const formControl3 = input3.parentElement;
    formControl1.className = 'formControl';
    formControl2.className = 'formControl';
    formControl3.className = 'formControl';

}
function setErrorForm(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    //adicionar mensagem de erro
    small.innerText = message;
    //adicionar a classe de sucesso;
    formControl.className = 'formControl error';

}
function setSuccessForm(input)
{
    const formControl = input.parentElement;
    //adicionar a classe de sucesso;
    formControl.className = 'formControl success';
}


let alunos=[
    ['Samuel','samuel@email.com','85 8888888'],
    ['Bruno','samuel@email.com','85 8888888'],
    ['Matheus','samuel@email.com','85 8888888'],
    ['Marcelo','samuel@email.com','85 8888888'],
]
function cadastrarNovoAluno()
{
    event.preventDefault();
    checkInput();
     if(nome.value != '' && email.value != '' && telefone.value != '')
     {
        alunos.push([`${nome.value}`,`${email.value}`,`${telefone.value}`]);
        listar_Aluno();
     }
}
function atualiza_Lista_De_Alunos()
{
    tabela_Alunos.innerHTML = '';
}
function novo_Aluno()
{
    pagina_novo.style.display ='block' //mostrar
    pagina_listar.style.display ='none' //mostrar

    setFormNormal(nome,email,telefone);
    nome.value = '';
    email.value = '';
    telefone.value = '';
}
function listar_Aluno()
{
    pagina_listar.style.display ='block';
    pagina_novo.style.display ='none';
    
    atualiza_Lista_De_Alunos();
    alunos.forEach(function(cadaAluno) {
        tabela_Alunos.innerHTML =
        tabela_Alunos.innerHTML +
        `<tr>
        <td> ${cadaAluno[0]} </td>
        <td> ${cadaAluno[1]} </td>
        <td> ${cadaAluno[2]} </td>
        <td> Editar-Excluir</td>
        </tr>`;
        }
    );
}
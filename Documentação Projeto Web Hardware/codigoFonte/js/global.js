//Chamar um novo popup
function IniciarPopup(popupId){
    const popups = document.getElementById(popupId);

    if(popups){
        popups.classList.add('mostrarPopup');
        popups.addEventListener('click',(elemento) => {
            //console.log(elemento.target) //pra saber a pode está o click do cursor

            if (elemento.target.id == popupId || elemento.target.className == 'buttonFecharPopup'){
                popups.classList.remove('mostrarPopup');
            }
        });
    }
}

//Fechar popup
function FecharPopup(popupId){
    document.getElementById(popupId).classList.remove('mostrarPopup');
}

//Fecha o popup atual e abre um novo, através dos Ids
function ProximoPopup(antigoPopupId, novoPopupId){
    FecharPopup(antigoPopupId);
    IniciarPopup(novoPopupId);
}

//Salvar chave/valor em localStorage
function SalvarEscolhaPopup(key,valor){
    localStorage.setItem(key,valor);
}

//Salva escolha do usuário e chama próximo popup
function SalvarEscolhaPopup_ProximoPopup(key, valor, antigoPopupId, novoPopupId){
    if(key != '' && valor != ''){
        let ultimoPopupValor;

        if(valor == 'gamer' || valor == 'profissional' || valor == 'casual')
            ultimoPopupValor = 'popup-perfil';

        if(valor == 'barato' || valor == 'mediano' || valor == 'caro')
            ultimoPopupValor = 'popup-valor';

        if(valor == 'computador' || valor == 'notebook')
            ultimoPopupValor = 'popup-Pc';
        
        if(valor == 'novo' || valor == 'upgrade')
            ultimoPopupValor = 'popup-novo';

        SalvarEscolhaPopup('ultimoPopup',ultimoPopupValor);
        SalvarEscolhaPopup(key,valor);
    }

    ProximoPopup(antigoPopupId, novoPopupId);
}

//Volta para o último popup que o usuário selecionou
function VoltarUltimoPopup(){
    let ultimoPopup = localStorage.getItem('ultimoPopup');

    if(ultimoPopup != null && ultimoPopup != ''){
        IniciarPopup(ultimoPopup);
        FecharPopup('popup-local');
    } 
    else
        IniciarPopup('popupBemVindo');
        FecharPopup('popup-local');
}
//Verifica o local storage e chama o popup inicial ou o ultimo popup que o usuário acessou 
function VerificarUltimoPopup(){
    let ultimoPopup = localStorage.getItem('ultimoPopup');
    if(ultimoPopup != null && ultimoPopup != '')
        IniciarPopup('popup-local');
    else
        IniciarPopup('popupBemVindo');

}

//Limpa localStorage 
function LimparStorage(){
    localStorage.clear();    
    FecharPopup('popup-local');
}

/* Função Email */
function EnviarEmail() {
    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }
}

function verificacao(){
    let nome = meu_form.nome.value;
    let fone = meu_form.fone.value;
    let email = meu_form.email.value;
    let opniao = meu_form.opniao.value;
    if(nome == ""){
        alert("Campo Nome é Obrigatorio");
        meu_form.nome.focus();
        return false;
    }

    if(fone == ""){
        alert("Campo Telefone é obrigatorio");
        meu_form.nome.focus();
        return false;
    }
    else if(fone.length < 8){
        alert("Campo Telefone é obrigatorio ter no minino 8 caracteres");
        meu_form.nome.focus();
        return false;
    }
    if(email == ""){
        alert("Campo Email é Obrigatorio");
        meu_form.nome.focus();
        return false;
    }
    else if(email.match('@')){
        document.getElementById('txt').innerHTML = "sucesso";
    }
}

function SalvarPecas (){
    let tipos = ['processador', 'placaMae', 'placaDeVideo', 'memoria', 'cooler', 'armazenamento'];

    tipos.forEach(function(tipo){
        let componenteOpcoes = document.getElementById(tipo).options;
        let componenteValue = componenteOpcoes[componenteOpcoes.selectedIndex].value;

        localStorage.setItem(tipo,componenteValue);
    });    

    location.href = "../html/escolhasUpgrade.html";
}

function link(endereco){
    location.href = '../html/' + endereco;
}


/* Fnção para fechar popups com o ESC */
document.querySelector('body').addEventListener('keydown', function fecharESC(e){
    let tecla = e.keyCode
            if(tecla == 27){
                document.getElementById('popupBemVindo').classList.remove('mostrarPopup');
                document.getElementById('popup-perfil').classList.remove('mostrarPopup');
                document.getElementById('popup-valor').classList.remove('mostrarPopup');
                document.getElementById('popup-Pc').classList.remove('mostrarPopup');
                document.getElementById('popup-novo').classList.remove('mostrarPopup');
                document.getElementById('popup-Hardcore').classList.remove('mostrarPopup');
                document.getElementById('popup-local').classList.remove('mostrarPopup');
            };
});



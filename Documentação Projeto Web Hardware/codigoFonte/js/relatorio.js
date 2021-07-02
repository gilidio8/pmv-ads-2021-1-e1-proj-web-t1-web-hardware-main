function criarPDF(){
    let sitePDF = document.getElementById('secaoParaRelatorio').innerHTML; /* variavel pegando a div da pagina */
    let style = "<style>"; /* Variavel pegando o estilo(css) da página */

    /* Parte onde edita o css da pagina pdf */
    style = style + "button { margin: 20px; background: none; border-style: none; color: white; border-style: solid; border-color: #A79375; border-width: 0px 0px 2px; }";
    style = style + "body {background-color: #0D1115}";
    style = style + "</style>";
    /* ----------------------------------------------------------------------- */

    var win = window.open('', ''); /* Variavel win serve para criar a janela do pdf */
    win.document.write('<html><head>'); /* ADD as tags <html> e <head> na janela do pdf*/
    win.document.write('<title>Relatório Recomendação de Hardware</title>');    /* ADD a tag <title> na janela do pdf */                                
    win.document.write('</head>'); /* Fechando a tag <head> na janela do pdf*/
    win.document.write('<body>'); /* Abrindo a tag <body> na janela do pdf*/
    win.document.write(style); /* Serve para pegar o style, está pegando a variavel style criada acima */
    win.document.write(sitePDF); /* pega a vairavel sitePDF para colocar na janela do pdf*/  
    win.document.write('</body></html>'); /* Fechando as tags <body> e <html> */
    win.print(); /* Faz aparecer a janela do PDF */
}

window.onload = function(){ 
    
    let perfil = localStorage.getItem('perfil');
    let preco = localStorage.getItem('preco'); 
    let tipoMaquina = localStorage.getItem('tipoMaquina');
    let tipoUpgradeNovo = localStorage.getItem('tipoUpgradeNovo');

    if(perfil == null || perfil == "" || preco == null || preco == "" || tipoMaquina == null || tipoMaquina == "" || tipoUpgradeNovo == null || tipoUpgradeNovo == "")
        location.href="../html/index.html";


    let processador = localStorage.getItem("processador");
    let placaMae = localStorage.getItem("placaMae");
    let memoria = localStorage.getItem("memoria");
    let placaDeVideo = localStorage.getItem("placaDeVideo");
    let armazenamento = localStorage.getItem("armazenamento");

    if(tipoUpgradeNovo == 'upgrade')
        if(processador == null || processador == "" || 
           placaMae == null || placaMae == "" || 
           memoria == null || memoria == "" || 
           placaDeVideo == null || placaDeVideo == "" || 
           armazenamento == null || armazenamento == "")
            location.href="../html/index.html";

    //Máquina nova
    if(tipoUpgradeNovo == 'novo'){
        if(perfil == 'gamer' && preco == 'caro' && tipoMaquina == 'computador'){
            document.getElementById("processador").innerHTML = "AMD Ryzen 7 3800x";
            document.getElementById("placaMae").innerHTML = "X570";
            document.getElementById("memoria").innerHTML = "Memória XPG Gammix D10, 16gb (2x8GB), 3200MHz, DDR4, CL16";
            document.getElementById("placaDeVideo").innerHTML = "RX 6700XT";
            document.getElementById("fonte").innerHTML = "700W 80+";
            document.getElementById("armazenamento").innerHTML = "SSD 240gb M.2 NVME + HD 7200RPM 2TB";
            document.getElementById("nota").innerHTML = "Essa configuração irá atender qualquer jogo com uma ótima qualidade.";      
        }
        else if(perfil == 'gamer' && preco == 'caro' && tipoMaquina == 'notebook'){
            document.getElementById("escolhaComputador").style.display='none';

            document.getElementById("notebook").innerHTML = "XPG Xenia 2070 Max-Q";
            document.getElementById("nota").innerHTML = "Esse é um dos modelos mais potentes do mercado.";
        }
        else if(perfil == 'gamer' && preco == 'barato' && tipoMaquina == 'computador'){
            document.getElementById("processador").innerHTML = "AMD Ryzen 3 3200G";
            document.getElementById("placaMae").innerHTML = "A320M";
            document.getElementById("memoria").innerHTML = "Memória 8gb (2x4gb) 2666mhz DDR4";
            document.getElementById("placaDeVideo").innerHTML = " - ";
            document.getElementById("fonte").innerHTML = "350W";
            document.getElementById("armazenamento").innerHTML = "HD 500gb";
            document.getElementById("nota").innerHTML = "Essa configuração modesta consegue rodar os jogos mais antigos e jogos novos em qualidade baixa.";  
        }
        else if(perfil == 'gamer' && preco == 'barato' && tipoMaquina == 'notebook'){
            document.getElementById("escolhaComputador").style.display='none';

            document.getElementById("notebook").innerHTML = "Lenovo IdeaPad S145 i5 8265U 8GB MX110";
            document.getElementById("nota").innerHTML = "Essa configuração modesta consegue rodar os jogos mais antigos e jogos novos em qualidade baixa.";  
        }
        else if(perfil == 'gamer' && preco == 'mediano' && tipoMaquina == 'computador'){

        }
        else if(perfil == 'gamer' && preco == 'mediano' && tipoMaquina == 'notebook'){
            document.getElementById("escolhaComputador").style.display='none';

            document.getElementById("notebook").innerHTML = "Avell A52 Liv";
            document.getElementById("nota").innerHTML = "Essa configuração aguenta todos os jogos atuais em qualidade satisfatória."; 
        }

        //escolhas casual
        else if(perfil == 'casual' && preco == 'caro' && tipoMaquina == 'computador'){
            document.getElementById("processador").innerHTML = "i5 10400";
            document.getElementById("placaMae").innerHTML = "H510M";
            document.getElementById("memoria").innerHTML = "Memória 8gb (2x4gb) 2666mhz DDR4";
            document.getElementById("placaDeVideo").innerHTML = " - ";
            document.getElementById("fonte").innerHTML = "350W";
            document.getElementById("armazenamento").innerHTML = "SSD 480gb";
            document.getElementById("nota").innerHTML = "Esse modelo irá atender todas as atividades casuais com o máximo de satisfação.";  
        }
        else if(perfil == 'casual' && preco == 'caro' && tipoMaquina == 'notebook'){
            document.getElementById("escolhaComputador").style.display='none';

            document.getElementById("notebook").innerHTML = "Lenovo Ultrafino Ideapad S145 i7-1065G7";
            document.getElementById("nota").innerHTML = "Esse modelo irá atender todas as atividades casuais com o máximo de satisfação.";  
        }
        else if(perfil == 'casual' && preco == 'barato' && tipoMaquina == 'computador'){
            document.getElementById("processador").innerHTML = "Intel Pentium Gold G6400";
            document.getElementById("placaMae").innerHTML = "H510M";
            document.getElementById("memoria").innerHTML = "Memória 4gb 2400mhz DDR4";
            document.getElementById("placaDeVideo").innerHTML = " - ";
            document.getElementById("fonte").innerHTML = "350W";
            document.getElementById("armazenamento").innerHTML = "HD 500gb";
            document.getElementById("nota").innerHTML = "Esse modelo irá atender todas as atividades casuais.";  
        }
        else if(perfil == 'casual' && preco == 'barato' && tipoMaquina == 'notebook'){
            document.getElementById("escolhaComputador").style.display='none';

            document.getElementById("notebook").innerHTML = "Samsung Book E30 i3-1115G4";
            document.getElementById("nota").innerHTML = "Esse modelo não irá apresentar longos travamentos nem engasgos para atividades casuais.";  
        }
        else if(perfil == 'casual' && preco == 'mediano' && tipoMaquina == 'computador'){
            document.getElementById("processador").innerHTML = "i3 10100";
            document.getElementById("placaMae").innerHTML = "H510M";
            document.getElementById("memoria").innerHTML = "Memória 8gb 2400mhz DDR4";
            document.getElementById("placaDeVideo").innerHTML = " - ";
            document.getElementById("fonte").innerHTML = "350W";
            document.getElementById("armazenamento").innerHTML = "SSD 240gb";
            document.getElementById("nota").innerHTML = "Esse modelo não irá apresentar travamentos nem engasgos para atividades casuais.";  
        }
        else if(perfil == 'casual' && preco == 'mediano' && tipoMaquina == 'notebook'){
            document.getElementById("escolhaComputador").style.display='none';

            document.getElementById("notebook").innerHTML = "Acer Aspire 5 i5-10210u";
            document.getElementById("nota").innerHTML = "Esse modelo não irá apresentar travamentos nem engasgos para atividades casuais.";  
        }
        //escolhas Profissional
        else if(perfil == 'profissional' && preco == 'caro' && tipoMaquina == 'computador'){
            document.getElementById("processador").innerHTML = "Ryzen 9 5900x";
            document.getElementById("placaMae").innerHTML = "X570";
            document.getElementById("memoria").innerHTML = "Memória 64gb (16x4) 3200mhz CL16";
            document.getElementById("placaDeVideo").innerHTML = "GTX 1050TI";
            document.getElementById("fonte").innerHTML = "750W 80+";
            document.getElementById("armazenamento").innerHTML = "SSD 1tb M.2 NVME + HD 7200RPM 4tb";
            document.getElementById("nota").innerHTML = "Esta configuração entregará o máximo de desempenho em atividades profissionais.";  
        }
        else if(perfil == 'profissional' && preco == 'caro' && tipoMaquina == 'notebook'){
            document.getElementById("escolhaComputador").style.display='none';

            document.getElementById("notebook").innerHTML = "XPS 13 i7-1165G7 32gb RAM 1tb SSD M.2";
            document.getElementById("nota").innerHTML = "Esse é um dos melhores modelos profissionais, com altíssimo desempenho para multitarefas, tela touch-screen 4k com alta fidelidade de cores, leve e fino para ser facilmente transportado.";  
        }
        else if(perfil == 'profissional' && preco == 'barato' && tipoMaquina == 'computador'){
            document.getElementById("processador").innerHTML = "Ryzen 5 3600";
            document.getElementById("placaMae").innerHTML = "B450M";
            document.getElementById("memoria").innerHTML = "Memória 16gb (8x2) 3200mhz CL16";
            document.getElementById("placaDeVideo").innerHTML = "GT 1030";
            document.getElementById("fonte").innerHTML = "450W 80+";
            document.getElementById("armazenamento").innerHTML = "SSD 240gb + HD 7200RPM 1tb";
            document.getElementById("nota").innerHTML = "Esse modelo irá atender atividades profissionais com um desemepnho satisfatório.";  
        }
        else if(perfil == 'profissional' && preco == 'barato' && tipoMaquina == 'notebook'){
            document.getElementById("escolhaComputador").style.display='none';

            document.getElementById("notebook").innerHTML = "Acer Aspire 3 A315-23G Ryzen 7 3700U 8gb RAM 256GB SSD";
            document.getElementById("nota").innerHTML = "Tem um ótimo desempenho em processamento, construção simples e tela HD.";  
        }
        else if(perfil == 'profissional' && preco == 'mediano' && tipoMaquina == 'computador'){
            document.getElementById("processador").innerHTML = "Ryzen 7 3800X";
            document.getElementById("placaMae").innerHTML = "B450M";
            document.getElementById("memoria").innerHTML = "Memória 32gb (16x2) 3200mhz CL16";
            document.getElementById("placaDeVideo").innerHTML = "GT 1030";
            document.getElementById("fonte").innerHTML = "450W 80+";
            document.getElementById("armazenamento").innerHTML = "SSD 500gb M.2 NVME + HD 7200RPM 2tb";
            document.getElementById("nota").innerHTML = "Esse modelo entrega um alto desempenho para atividades que exigem muito processamento e multitarefa.";  
        }
        else if(perfil == 'profissional' && preco == 'mediano' && tipoMaquina == 'notebook'){
            document.getElementById("escolhaComputador").style.display='none';

            document.getElementById("notebook").innerHTML = "Dell Latitude 3410 i7-10510u 16gb RAM 256gb SSD";
            document.getElementById("nota").innerHTML = "Um modelo com ótimo desempenho, teclado iluminado, tela Full HD e boa portabilidade.";  
        }
        else{
            location.href="../html/index.html";
        }
    }
    //Upgrade
    else if(tipoUpgradeNovo == 'upgrade'){
        let tipos = ['processador', 'placaMae', 'placaDeVideo', 'memoria', 'cooler', 'armazenamento'];

        tipos.forEach(function(tipo){
            let listaComponentes = [];

            switch(tipo){
                case 'processador':
                    listaComponentes = ['pentium', 'i3', 'i5', 'i7', 'i9'];
                    break;
                case 'placaMae':
                    listaComponentes = ['h410m', 'b560m', 'z590'];
                    break;
                case 'memoria':
                    listaComponentes = ['4gb','8gb','16gb','32gb'];
                    break;
                case 'placaDeVideo':
                    listaComponentes = ['gt1030','gtx1650','rtx2060','rtx3080'];
                    break;
                case 'cooler':
                    listaComponentes = ['120mm', '240mm', '360mm'];
                    break;
                case 'armazenamento':
                    listaComponentes = ['hd500', 'hd1000', 'ssd240', 'ssd1000'];
                    break;
            }

            listaComponentes.forEach(function(componente){
                if(listaComponentes.indexOf(componente) <= listaComponentes.indexOf(localStorage.getItem(tipo)))
                    document.getElementById(componente).classList.add('escurecerBox');
            })
        })
    }
    else{
        location.href="../html/index.html";
    }

   
   





}
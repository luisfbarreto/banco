let saldo = 100.5; //Float
let nomeUser = prompt('Insira seu nome: ');
alert(`Olá, ${nomeUser}, seja bem vindo ao nosso banco!`);

    function inicio(){
        let escolha = parseInt(prompt('Escolha uma opção: \n1.) Saldo \n2.) Extrato \n3.) Saque \n4.) Depósito \n5.) Transferência \n6.) Sair'));
        switch(escolha){
            case 1:
                senha();
                ver_saldo();
                break;
            case 2:
                ver_extrato();
                break;
            case 3:
                senha();
                fazer_saque();
                break;
            case 4:
                senha();
                fazer_deposito()
                break;
            case 5:
                senha();
                fazer_transferencia()
                break;
            case 6: 
                sair()
                break;
            default:
                erro()
                break;
        }
    }

    function senha(){
        let senhaConta = 3589;
        let tentarNovamente;
        let digitar_senha = parseInt(prompt('Digite sua senha:'))
        if(digitar_senha !== senhaConta){
                alert('Senha incorreta!')    
                tentarNovamente = confirm("Deseja tentar novamente?")
                    if(tentarNovamente){
                    senha(); 
                }   else{
                    inicio();
            }
        }
    }

    function ver_saldo() {     
        alert('Seu saldo atual é: ' + saldo);
        inicio();
    }

    function ver_extrato(){
        let extrato = ['PS5 pro: R$5.250,00' + '\nGTA 6: R$350,00'];
        alert(extrato);
        inicio()
    }

    function fazer_deposito() {  
        var deposito = parseFloat(prompt('Qual o valor para depósito?'));
        // Not a Number
        if (isNaN(deposito) || deposito === '') {
            alert('Por favor, informe um número:');
            fazer_deposito();
        } else if(deposito <= 0){
            alert('Operação não autorizada')
            inicio()
        } else {
            saldo += deposito;
            ver_saldo();
        }
    }

    function fazer_saque() {   
        var saque = parseFloat(prompt('Qual o valor para saque?'));
        if (isNaN(saque) || saque === '') {
            alert('Por favor, informe um número:');
            fazer_saque();
        }
        if(saque > saldo ||saque <= 0 ){
            alert('Operação não autorizada!');
            fazer_saque();
        } saldo -= saque;   
        ver_saldo();
    }
    
    function fazer_transferencia(){
        let nConta = parseFloat(prompt('Informe o número da conta que deseja transferir: '))
        if(isNaN(nConta) || nConta <= 0){
            alert('Operação não autorizada! \nNúmero da conta incorreto.')
            fazer_transferencia();
        }
        let valorTranf = parseFloat(prompt('Informe o valor que deseja transferir: '))
        
        if(isNaN(valorTranf)){
            alert('Operação não autorizada! \nValor incorreto')
            fazer_transferencia();
        } else if(valorTranf > saldo || valorTranf <= 0 ){
            alert('Operação não autorizada! \nValor incorreto ou saldo insulficiênte.')
            ver_saldo();
            inicio();
        } else {
            saldo -= valorTranf;
            alert('Transferência realizada com sucesso!')
            ver_saldo()
        }     
    }

    function erro() {
        alert('Por favor, informe um número entre 1 e 6');
        inicio();
    }
    
    function sair() {
        var confirma = confirm('Você deseja sair?');
        if (confirma) {
            alert(`${nomeUser}, foi um prazer ter você por aqui!`)
            window.close();
        } else{
            inicio();}
    }  inicio();
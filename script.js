function verifica(){
    var verificacao = document.getElementById('email');
    verificacao = verificacao.textContentgit;
    console.log(verificacao);
    
    if(verificacao=="true"){
        var recebe = document.getElementById('Escolha');
        recebe.style.display = "block";

        var recebe = document.getElementById('Matrix');
        recebe.style.display = "block";
    }
}

verifica();
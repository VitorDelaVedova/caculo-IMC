var btnCalc = document.getElementById('calc');
btnCalc.addEventListener('click', adicionar);

function adicionar(){    
    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;

    if( altura !== '' && peso !== '') {  
        var imc = peso / (altura  * altura);       
        validaIMC(imc);
    } else {
        alert('Preencha os campos corretamente!');
    }
}

function validaIMC(imc) {
    var result = document.getElementById('result');
    var resultTotal = document.getElementById('resultTotal');
    
    var descricao;
    var cor;
       
    if (imc < 16) {
        descricao = 'Magreza grave';
        cor = 'red';
    } else if (imc >= 16 && imc < 17) {
        descricao = 'Magreza moderada';
        cor = 'orange';
    } else if (imc >= 17 && imc < 18.50) {
        descricao = 'Magreza leve';
        cor = 'blue';
    } else if (imc >= 18.50 && imc < 25) {
        descricao = 'Saudável';
        cor = 'green';
    } else if (imc >= 25 && imc < 30) {
        descricao = 'Sobrepeso';
        cor = 'blue';
    } else if (imc >= 30 && imc < 35) {
        descricao = 'Obesidade Grau I';
        cor = 'orange';
    } else if (imc >= 35 && imc < 40) {
        descricao = 'Obesidade Grau II (severa)';
        cor = 'red';
    } else if (imc >= 40) {
        descricao = 'Obesidade Grau III (mórbida)';
        cor = 'red';
    }

    resultTotal.innerText = 'Seu IMC é: ' + imc.toFixed(2);
    result.innerText = descricao;
    result.style.color = cor;
}
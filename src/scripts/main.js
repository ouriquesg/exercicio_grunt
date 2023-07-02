document.addEventListener('DOMContentLoaded', function(){
    
    alert("Olá tudo bem? Eu sou o Goku! E hoje quero testar você digite dois números onde o segundo tem que ser maior que o primeiro.");
    document.getElementById('formValidator').addEventListener('submit', function(evento){
        evento.preventDefault();
    

        let num1 = document.getElementById('numberOne').value;
        let num2 = document.getElementById('numberTwo').value;
        
        if(num2 > num1){
            document.querySelector('successMenssagem').style.display = 'block';
        }else{
            document.querySelector('.erroMenssag').style.display = 'block';
        }
    })
})
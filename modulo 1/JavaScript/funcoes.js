  function capturarNumeros(operacao){
        var n1 = document.getElementById('c1').value
        var n2 = document.getElementById('c2').value

        let resultado
        switch (operacao) {
            case '+': resultado = somar(n1, n2); break;
            case '-': resultado = subitrair(n1, n2); break;
            case '*': resultado = multiplicar(n1, n2); break;
            case '/': resultado = dividir(n1, n2); break;
        }
        document.getElementById('calculadora').innerHTML = 'O resultado é:' + resultado
  }
  
  function somar(n1, n2) {
      
        return Number(n1) + Number(n2)
            //adiciona o resultado ao h1 (resultado
        }

        function subitrair(n1, n2) {
            //logica da subitração
            return Number(n1) - Number(n2)


        }

           function multiplicar(n1, n2){
            //lógoca da multiplicação
            return Number(n1) * Number(n2)
    
        }

        function dividir(n1, n2) {
            if (n2==0) {
                console.error('Não é possivel dividir por 0!!!!')
                return null
            } else {
              return Number(n1) / Number(n2)   
            }
        }
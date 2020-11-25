function sacar(){
    let = parseInt(valor_do_saque = document.getElementById('valor_do_saque').value)

    const notas_disponiveis = [100, 50, 10]
    let notas100 = 0
    let notas50 = 0
    let notas10 = 0

    for(let i = 0; notas_disponiveis.length; i++){
        if (valor_do_saque >= notas_disponiveis[0]){
            notas100 = parseInt(valor_do_saque/notas_disponiveis[0])
            let resto = valor_do_saque % notas_disponiveis[0]
            valor_do_saque = resto
            document.getElementById('notasde100').innerHTML = `Notas de R$100: ${notas100}`    
            
        }
        else if (valor_do_saque >= notas_disponiveis[1]){
            notas50 = parseInt(valor_do_saque/notas_disponiveis[1])
            let resto = valor_do_saque % notas_disponiveis[1]
            valor_do_saque = resto
            document.getElementById('notasde50').innerHTML = `Notas de R$50: ${notas50}`
        }

        else if(valor_do_saque >= notas_disponiveis[2]){
            notas10 = parseInt(valor_do_saque/notas_disponiveis[2])
            let resto = valor_do_saque % notas_disponiveis[2]
            valor_do_saque = resto 
            document.getElementById('notasde10').innerHTML = `Notas de R$10: ${notas10}`
        }

        else if(valor_do_saque == 0){
            break
        }
        
        else{
            alert("Valor inválido para notas disponíveis (R$10, R$50, R$100)")
            break
            
        }
        
    }
        
        
      
    
}

function limpar(){
    document.getElementById('notasde100').innerHTML = ''
    document.getElementById('notasde50').innerHTML = ''
    document.getElementById('notasde10').innerHTML = ''
}

    
let exibir_notas = document.getElementById('exibir_notas')
exibir_notas.addEventListener('click', sacar)
exibir_notas.addEventListener('focus', limpar)
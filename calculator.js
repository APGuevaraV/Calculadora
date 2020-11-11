const screen = document.getElementById('calculator-screen');
    keys = document.getElementById('calculator-keys'); //obtiene el padre contenedor de todos los botones
let operationStatus =false, number1,typeOperation
    screen.textContent= '0'
    
const calculator = () =>{
    if(!keys) return // si keys no existe rgresa y no se ejecuta nada 
    keys.addEventListener('click' , e => {
        const t = e.target, // el elemento del dom donde se originó el evento, el hijo más profundo
            d = t.dataset
        //detectar si se pulso un número
        if(d.number) writeScreen(d.number)// ok
        
        // detectar si se pulso un a operacion matemática
        if(d.math) getOperation(t,d.math)//ok

        // detectar si se pulso otra operación
        if(d.operation)runOperation()
    })
}

// mostrar numero pulsado en pantalla
const writeScreen = number => {

    screen.textContent =='0' || operationStatus ===true
    ? screen.textContent= number
    : number === '.' && !screen.textContent.includes('.')
        ? screen.textContent += number
        : number !== '.'
            ?screen.textContent += number
            : null

    operationStatus = false
}


const getOperation = (element,operation) =>{
    operationStatus = true
    typeOperation = operation
    number1 = Number(screen.textContent)
    screen.textContent= element.textContent
   
    return {number1 , typeOperation}
}

const runOperation = operation =>{
  
    const getResult = (number1 , typeOperation) =>{
        const number2 = Number(screen.textContent)
        let result
        switch (typeOperation) {
            case 'add': result = number1+ number2
                
                break;

            case 'minus': result = number1- number2
                
                break;
            case 'multiply': result = number1* number2
                
                break;
            case 'divide': result = number1/ number2
                
                break;
        
            default:
                break;
        }

        result === Infinity 
        ? screen.textContent = 'Error'
        : screen.textContent = result
    }

    operation ==='clear'
    ? screen.textContent = '0'
    : getResult(number1,typeOperation)

    operationStatus =true


}




calculator()





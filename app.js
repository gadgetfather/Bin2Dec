const inputText = document.querySelector('#input')
const output = document.querySelector('#output')
const waitText = document.querySelector('#waiting')

inputText.addEventListener('input',bin2dec)


function bin2dec(){
    let binValue = inputText.value
    let decValue = parseInt(binValue,2)
    // To check if value is NaN 
    if(Number.isNaN(decValue)){
        waitText.textContent = `Enter a valid number`
        output.textContent = `Waiting for right number`
        
    }else{
        output.textContent = decValue
    }
    console.log(parseInt(binValue,2))
    
    
}


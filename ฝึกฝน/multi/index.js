let numberInput = document.getElementById('inputnumber');
let Submit = document.getElementById('submit');
let output = document.getElementById('output');

function printMultiply(){
    let number = Number(numberInput.value);
    let outputhtml = '';

    for (let i = 1; i<= 12; i++){
        outputhtml+='<p>';
        outputhtml+= number + ' x ' + i + ' = ' + (number*i);
        outputhtml+='</p>';
    }
    output.innerHTML = outputhtml;
}
Submit.addEventListener('click', printMultiply);
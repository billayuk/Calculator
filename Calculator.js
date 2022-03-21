
let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText= ''; //to reset the screen
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText); // will then evaluate and display the answer
                }catch{
                    display.innerText = "Error" // if the maths calculation is wrong, the system display an error
                }
                break;
            case '←':
                if (display.innerText){
                    display.innerText = display.innerText.slice(0, -1); // back space or delete a letter or number from block or one 
                }
                break;
                default:
                    display.innerText += e.target.innerText;
        }

    });
});
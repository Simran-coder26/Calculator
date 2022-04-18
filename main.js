let screen = document.getElementById("screen")
buttons = document.querySelectorAll('button')
let screenValue = ''
for (item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
       if(buttonText== 'C'){
            screen.value = '';
            screenValue= '';
        }
        else if(buttonText == '='){
           console.log("pressing =")
           screen.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}
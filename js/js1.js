let screen = document.getElementById('screen');
let history = document.getElementById('history')
let result = document.getElementById('result')

let screenValue =''
let historyvalue=''
let resultvalue=''


buttons = document.querySelectorAll('button');
for(item of buttons){
    item.addEventListener ('click', (e)=>{
        buttonText = e.target.innerText;
        if(buttonText == 'C'){
            screenValue = "";
            historyvalue = "";
            resultvalue = "";
            result.value = resultvalue
            history.value =historyvalue
            screen.value = screenValue
        }
        else if(buttonText =='='){
            if(screenValue != ''){
                historyvalue = screenValue
                history.value = historyvalue
                screenValue = screen.value;
                screenValue = screenValue.replace(/×/g, '*')
                screenValue = screenValue.replace(/÷/g,'/')
                screen.value = eval(screenValue);
            }
            else{
                screenValue = ''
                screen.value = screenValue
            }


        }
        else if(buttonText == '%'){
            
            screenValue = screenValue/100
            screen.value = screenValue 
        }
        else if(buttonText == 'CE'){
            
            screenValue = screenValue.substr(0,screenValue.length-1)
            history.value=historyvalue
            screen.value = screenValue 
        }
        else if(buttonText == 'Tools'){
            
        }
        
        else{
            screenValue += buttonText
            screen.value = screenValue
        }
        screenValue = screenValue.replace(/×/g, '*')
        screenValue = screenValue.replace(/÷/g,'/')
        resultvalue='='+eval(screenValue)
        result.value=resultvalue
    if (screen.maxlength != 16){      
        if (resultvalue=='='+undefined){
            resultvalue=''
            result.value=resultvalue
        }
        if(buttonText=='='){
            resultvalue=''
            result.value=resultvalue
            
        }
        
    }
            

    
    })
} 

type = document.getElementsByClassName('options');
input = document.getElementById('C');
r1 = document.getElementById('R1');
r2 = document.getElementById('R2');
button = document.getElementById('hi');

inputValue = '';
R1Value = '';
R2Value = '';


function Cchk(){

    if (type[0].checked){
        input.placeholder = "Celcius";
        r1.placeholder = "Farenhiet";
        r2.placeholder = "Kelvin";
        
    };
    
};
function Fchk(){
    if (type[1].checked){
        input.placeholder = "Farenhiet";
        r1.placeholder = "Celcius";
        r2.placeholder = "Kelvin";
    };
};
function Kchk(){
    if (type[2].checked){
        input.placeholder = "Kelvin";
        r1.placeholder = "Farenhiet";
        r2.placeholder = "Celcius";
    };
};

function func(){
    if (type[0].checked){
    R1Value = (input.value*9/5) + 32;
    r1.value = R1Value;
    R2Value = parseFloat(input.value) + 273.15;
    r2.value = R2Value;
  };
    if (type[1].checked){
    R1Value = (input.value-32) *5/9;
    r1.value = R1Value;
    R2Value = (input.value-32) *5/9 + 273.15;
    r2.value = R2Value;
  };
    if (type[2].checked){
    R1Value = input.value-273.15;
    r1.value = R1Value;
    R2Value = (input.value - 273.15) * 9/5 + 273.15;
    r2.value = R2Value;
  };

};



    

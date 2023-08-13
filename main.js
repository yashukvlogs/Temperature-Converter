let valuec = 0;
let result = document.getElementById("result").innerHTML;



function getValue(){
  valuec = document.getElementById("input").value;
  
  document.getElementById("result").innerHTML = valuec*(9/5)+32;
  
  }
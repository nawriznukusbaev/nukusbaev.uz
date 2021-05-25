'use strict';

const codeText=document.querySelector('#code_text');
//codeText.innerHTML="";
//console.log(codeText)
let text1='"use strict";';
function print_code(code)
{
  codeText.append(code);
} 

//print_code(text1);

//console.log(text1[0]);
let i=0;
let send_code1=setInterval(() => {
  print_code(text1[i]);
    i++;
    if(i==text1.length-1)
    {clearInterval(send_code1);}      
    
  
}, 200);

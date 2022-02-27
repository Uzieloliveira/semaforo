var red = document.getElementById('red');
var yellow = document.getElementById('yellow');
var green = document.getElementById('green');
var cont= 0;
var tmp;

function start(){
    // define o tempo de execução para cada cor
    green.style = " background-color: rgb(2, 236, 2);   box-shadow: 0 5px 15px 10px  rgba(30, 255, 0, 0.52);"
    yellow.style = " background-color:rgba(255, 255, 0, 0.26);"
    red.style = " background-color: rgba(255, 0, 0, 0.246);"

     setTimeout(() => {
         yellow.style = " background-color: yellow;  box-shadow: 0 5px 15px 10px  rgba(255, 255, 0, 0.438); "
         green.style = " background-color: rgba(2, 236, 2, 0.342); box-shadow: none;"
         red.style = " background-color: rgba(255, 0, 0, 0.246); "
        
     }, 2000);
 
     setTimeout(() => {
         red.style = " background-color: red; box-shadow: 0 5px 15px 10px  rgba(255, 0, 0, 0.52);"
         green.style = " background-color: rgba(2, 236, 2, 0.342);box-shadow: none;"
         yellow.style = " background-color:rgba(255, 255, 0, 0.26);"
     }, 4000); 

     setTimeout(() => {
         green.style = " background-color: rgb(2, 236, 2);   box-shadow: 0 5px 15px 10px  rgba(30, 255, 0, 0.52);"
         yellow.style = " background-color:rgba(255, 255, 0, 0.26);"
         red.style = " background-color: rgba(255, 0, 0, 0.246);"
     }, 6000);

 };

 // Captura dos eventos nos botões
var btn_Auto = document.querySelector('.auto').addEventListener("click", () =>{
    tmp = setInterval(start, 6500);
})

var btn_Stop = document.querySelector('.break').addEventListener("click",()=>{
    clearInterval(tmp);
});


var btn_Manual = document.querySelector('.manual').addEventListener("click", ()=>{

    clearInterval(tmp);
    cont++;

        green.style = " background-color: rgba(2, 236, 2, 0.342); box-shadow: none;"
    while(cont>0){
        yellow.style = " background-color: yellow; box-shadow: 0 5px 15px 10px  rgba(255, 255, 0, 0.438);"
            while(cont>1){
                if(cont>2){
                    green.style = " background-color: rgb(2, 236, 2) box-shadow: none;"
                    yellow.style = " background-color:rgba(255, 255, 0, 0.26);"
                    red.style = " rgba(255, 0, 0, 0.246);"
                    cont-= 3;
                }else{
                    yellow.style = " background-color:rgba(255, 255, 0, 0.26);"
                    red.style = " background-color: red; box-shadow: 0 5px 15px 10px  rgba(255, 0, 0, 0.52);"
                    break;
                }
               break;
            }

        break;
    }
});



var equ=0;
function display(value){ 
        document.getElementById("total").equ += equ;
       

}
function clearScreen(){
        console.log("hello");
        document.getElementById("total").equ = "";
       
}


function calc(){
 
        var a = document.getElementById("total").equ;
        var b = eval(a);
        document.getElementById("total").equ = b;

}

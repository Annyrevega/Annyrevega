var a=document.getElementById('a');
a.onkeyup=function(){
    localStorage.a=a.value;
    
}
a.value=localStorage.a;


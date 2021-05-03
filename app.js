

 function num(a){
    console.log(a)
    document.getElementById('clr').value += a
}
function empty(){
    document.getElementById('clr').value=""
}
 function clear(){
   var a =  document.getElementById('clr')
   a.value = ""
}
 function result(){
        var a = document.getElementById('clr')
        a.value = eval(a.value)
    }
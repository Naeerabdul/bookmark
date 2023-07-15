let ferst=document.getElementById('ferst')
let secund=document.getElementById('secund')
let third=document.getElementById('third')


// function one() {
//     ferst.classList.add("block")
   
//     secund.classList.add("none");
// third.classList.add("none");
// }
// function tow() {
//     ferst.classList.add("none")
       
//     secund.classList.add ("block")
//     third.classList.add("none");
// }
// function three() {
//     ferst.classList.add("none")
//         console.log("3")
//     secund.classList.add("none");
//     third.classList.add ("block")
// }

 function one() {
    if(ferst.style.display == "none"){
        ferst.style.display = "grid";
        third.style.display = "none";
        secund.style.display = "none";
   
    }
  
    else{
        ferst.style.display = "none";
        
    }
}
 function tow() {
    if(secund.style.display == "none"){
        third.style.display = "none";
        secund.style.display = "grid";
        ferst.style.display = "none";
    }
    else{
        secund.style.display = "none";
        
    }
}
 function three() {
    if(third.style.display == "none"){
        third.style.display = "grid";
        secund.style.display = "none";
        ferst.style.display = "none";
    }
    else{
        third.style.display = "none";
    }
}
//
// onclick="quastion1()"
let par1 = document.getElementById("parag11")
let img1 = document.getElementById("img1")
function quastion1() {
    par1.classList.toggle("none");
    img1.classList.toggle("trans")
}
let par2 = document.getElementById("parag22")
let img2 = document.getElementById("img2")
function quastion2() {
    par2.classList.toggle("none");
    img2.classList.toggle("trans")
}

let par3 = document.getElementById("parag33")
let img3 = document.getElementById("img3")
function quastion3() {
    par3.classList.toggle("none");
    img3.classList.toggle("trans")
}

let par4 = document.getElementById("parag44")
let img4 = document.getElementById("img4")
function quastion4() {
    par4.classList.toggle("none");
    img4.classList.toggle("trans")
}
let list = document.getElementById("lista")
let ham = document.getElementById("ham")
let col = document.getElementById("col")


function hambuger() { 
    ham.classList.add("none")
    list.classList.add("block");
    col.classList.add("block");
}
function merhaba() { 
    ham.classList.remove("none")
    list.classList.remove("block");
    col.classList.remove("block");
}
let mer = document.getElementById("merhaba");
function marbaba(){
if (mer.value == false)
{
    console.log('merhaba')
    }
else {
    console.log ("as")
    }
}


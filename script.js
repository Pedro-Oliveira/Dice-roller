let myinput = document.getElementById("my-input")

function stepper(btn){
    let id = btn.getAttribute("id");
    let val = myinput.getAttribute("value");
    let total = (id == "diminuir") ? (parseInt(val)-1): (parseInt(val)+1);
    myinput.setAttribute("value", total);
}
function rolar(){
    let rolagem = Math.floor(Math.random() * 20 +1);
    let valor = myinput.getAttribute("value");

    spin()
    document.getElementById("result").innerHTML = rolagem;
    document.getElementById("span").innerHTML = parseInt(valor)+rolagem;
    if (rolagem === 20){
        document.getElementById("result").style.color = "var(--green)";
        document.getElementById("body").style.backgroundColor = "var(--dark-green)";
    }
    else if(rolagem === 1){
        document.getElementById("result").style.color = "var(--red)";
        document.getElementById("body").style.backgroundColor = "var(--dark-red)";
    }
    else{
        document.getElementById("result").style.color = "black";
        document.getElementById("body").style.backgroundColor = "var(--black)";
    }
}
function spin(){
    dado.classList.add("spin");
}
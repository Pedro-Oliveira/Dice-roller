function rolar(){
    let rolagem = Math.floor(Math.random() * 21);
    document.getElementById("result").innerHTML = rolagem;
    document.getElementById("span").innerHTML = rolagem;
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
let contador = 0;
let x = 0;

function visor(num){
    if (num === "AC"){
        document.getElementById("visor-oculto").innerHTML = 0;
        document.getElementById("container-visor").innerHTML = 0;
        contador = 0;
        x = 0;

    }else if (num === "()"){
        if(x === 0){
            if (contador === 0){
                document.getElementById("container-visor").innerHTML = "";
                document.getElementById("visor-oculto").innerHTML = "";
                parenteses = num.split("");
                num = parenteses[0];
                document.getElementById("container-visor").innerHTML += num;
                document.getElementById("visor-oculto").innerHTML += num;
                contador += 1;
                x += 1;
            }else{
                parenteses = num.split("");
                num = parenteses[0];
                document.getElementById("container-visor").innerHTML += num;
                document.getElementById("visor-oculto").innerHTML += num;                     
                contador += 1;
                x += 1;
            }
        }else{
            parenteses = num.split("");
            num = parenteses[1];
            document.getElementById("container-visor").innerHTML += num;
            document.getElementById("visor-oculto").innerHTML += num;
            contador += 1;
            x = 0;
        }
    }else if (num === "*"){
        document.getElementById("visor-oculto").innerHTML += num;
        document.getElementById("container-visor").innerHTML += "x";
    }else if (num === "/100"){
        document.getElementById("visor-oculto").innerHTML += num;
        document.getElementById("container-visor").innerHTML += "%";
    }else if (num === "/"){
        document.getElementById("visor-oculto").innerHTML += num;
        document.getElementById("container-visor").innerHTML += "÷";
    }else if (num === "="){
        let conta = document.getElementById("visor-oculto").innerHTML;
        console.log(conta);
        if(eval(conta) === Infinity){
            document.getElementById("container-visor").innerHTML = "Erro";
            document.getElementById("visor-oculto").innerHTML = eval(conta);
        }else{
            document.getElementById("visor-oculto").innerHTML = eval(conta);
            document.getElementById("container-visor").innerHTML = eval(conta);
        }
    }else if (num === "."){
        document.getElementById("visor-oculto").innerHTML += num;
        document.getElementById("container-visor").innerHTML += ",";
        contador += 1;
    }else{
        if(contador === 0){
            document.getElementById("visor-oculto").innerHTML = "";
            document.getElementById("visor-oculto").innerHTML += num;
            document.getElementById("container-visor").innerHTML = "";
            document.getElementById("container-visor").innerHTML += num;
            contador += 1;
        }else if (contador > 0){
            document.getElementById("visor-oculto").innerHTML += num;
            document.getElementById("container-visor").innerHTML += num;
        }
    }
}
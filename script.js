function tab(ntab){ 
    let multi = 2;  
    while (multi <= 9){
        tabuada = tabuada + 
              ("<tr><td>"+ntab+"</td><td>x</td><td>"+               
                  multi+"</td><td>=</td><td>"+               
                  ntab*multi+"</td></tr>");
        multi++;
    }
    return tabuada + "</table>";
}
function criaDivTab(ntab){
    let htmltab;

    tabdiv = document.createElement("div");
    tabdiv.innerHTML = htmltab;
    document.getElementById("result-wrapper").appendChild(tabdiv);
}
function cria1tab(){
    let ntab = document.getElementById("valor").value;
    criaDivTab(ntab);
}

function criaTodas(){
    document.getElementById("result-wrapper").innerHTML="";
    let n = 2;
    while(n <= 9) {
        criaDivTab(n);
        n++;
    }
}

document.getElementById("cria-tab").addEventListener("click", cria1tab);
document.getElementById("cria-todas").addEventListener("click", criaTodas);
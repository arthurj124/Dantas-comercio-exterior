 // URL da API
function getApiGitHub(){
    fetch ('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL').then((api) => api.json()).then((api)=> dolar = api['USDBRL']['high'] );

}



let dolar = 0;
getApiGitHub();


function calcular(){
    getApiGitHub();


    let print = document.getElementById("calcular")
    let fob = document.getElementById("fob")
    let frete = document.getElementById("frete")
    let seguro = document.getElementById("seguro")
    let ii = document.getElementById("ii")
    let IPI = document.getElementById("IPI")
    let Pis = document.getElementById("Pis")
    let Confins = document.getElementById("Confins")
    let Icms = document.getElementById("Icms")
    var fobnum = Number(fob.value)*dolar
    var fretenum = Number(frete.value)*dolar
    var seguronum = Number(seguro.value)*dolar
    var iinum = Number(ii.value)/100
    var IPInum = Number(IPI.value)/100
    var Pisnum = Number(Pis.value)/100
    var Confinsnum = Number(Confins.value)/100
    var Icmsnum = Number(Icms.value)/100
    var total1 = fobnum+fretenum+seguronum
    var iiconta = total1*iinum
    var IPIconta = (total1+ iiconta)*IPInum
    var pisconta = total1*Pisnum
    var Confinsconta = total1*Confinsnum
    var Icmsconta = (total1+iiconta+IPIconta+pisconta+Confinsconta)/0.82*Icmsnum
    let total2 = iiconta+IPIconta+pisconta+Confinsconta+Icmsconta
    //var resultado = fob+frete+seguro+ii+IPI+Pis+Confins+Icms;
    print.innerHTML = `R$ ${(total2.toFixed(2))}`
}

function modifyText() {  
    var t2 = document.getElementById("calcular");  
    t2.firstChild.nodeValue = "CALCULAR";      
    }  

    
    fob.addEventListener("click", modifyText, false);
    frete.addEventListener("click", modifyText, false);
    seguro.addEventListener("click", modifyText, false);
    ii.addEventListener("click", modifyText, false);
    IPI.addEventListener("click", modifyText, false);
    Pis.addEventListener("click", modifyText, false);
    Confins.addEventListener("click", modifyText, false);
    Icms.addEventListener("click", modifyText, false);


 
          
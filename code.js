 // URL da API




let dolar = 0;
fetch ('http://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL').then((res) => res.json()).then((data)=> dolar = data['USDBRL']['high'] );



function calcular(){
    alert(dolar);
    

    let print = document.getElementById("resultado")
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

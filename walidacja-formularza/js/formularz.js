'use strict';


var wszystkieZgody = document.getElementById("wszystkie-zgody");

var zgodaMarketingiwa1= document.getElementById("zgoda-marketingowa1")

var zgodaMarketingiwa2= document.getElementById("zgoda-marketingowa2")

var wyslijBtn = document.getElementById("wyslij");

var inputImie = document.getElementById("name");

var inputEmail = document.getElementById("email");

var wiadomosc =document.getElementById("wiadomosc");


//zdarzenie, addlistener, po kliknieciu zeby w consoli sie pokazywolo ze klinkniety 


// mój sposób

//function klik() {
//console.log( 'click' );
//}
//wszystkieZgody.onclick = klik; 



//drugi sposób


// wszystkieZgody.onchange = function() {
//    console.log('change');
//    console.log(wszystkieZgody.checked);                                    
//}
//
//console.log(wszystkieZgody);
//console.log(wszystkieCheckboxy);


//3 spsoób funckja imienna

function stanCheckboxa() {
    zgodaMarketingiwa1.checked = this.checked;
    zgodaMarketingiwa2.checked = this.checked;
    
    zgodaMarketingiwa1.disabled = this.checked;
    zgodaMarketingiwa2.disabled = this.checked;
}

wszystkieZgody.onchange = stanCheckboxa;




//sprawdzanie czy pola są wypełnione

// 1 sposób

//document.getElementById("wyslij").addEventListener('click', walidujFormularz);
//
//function walidujFormularz()
//



function walidujFormularz(event){
    
   
//    var bladWalidacji = document.createElement('p');
//    bladWalidacji.innerHTML = "BŁąd!";
//    inputImie.parentNode.insertBefore(bladWalidacji, inputImie.nextSibling);
    
    wiadomosc.innerHTML = '<ul id="wiadomosc"></ul>';
   

    if(inputImie.value.trim() == ""){
        var msgImie = document.createElement("li");
        msgImie.innerHTML = "wpisz imie";
        wiadomosc.appendChild(msgImie);
        
        event.preventDefault();
    } else{
         wiadomosc.innerHTML = "";
    }
    
    
    
  if(inputEmail.value.trim() == ""){
       var msgEmail = document.createElement ("li");
       msgEmail.innerHTML = "wpisz email"
       wiadomosc.appendChild(msgEmail);
      
       event.preventDefault();   
  } 
//    
//    
    if (! zgodaMarketingiwa1.checked){
        var msgZgodaMarketingowa1 = document.createElement("li");
        msgZgodaMarketingowa1.innerHTML = "wyraź zgode";
       wiadomosc.appendChild(msgZgodaMarketingowa1);
        
        event.preventDefault();
   }
}

wyslijBtn.addEventListener('click', walidujFormularz);

//preventDefault - blokuje domyślną funkcję 

// za pomocą .value pobieramy wartosc elementu

//funkcja trim usuwa z lewej i prawej puste znaki



//dodajemy info ze cos jest nie uzupełnione























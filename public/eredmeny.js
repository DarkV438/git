const erednmenyDiv = document.getElementById('eredmeny');

function berak(elem) {
    const p = document.createElement('p');
    p.innerText = elem.nev + ': ' + elem.szavazatok; 
    erednmenyDiv.appendChild(p);
}


function oldalGenerálás(eredmenyek) {
        console.log(eredmenyek);  
        
        eredmenyek.forEach(berak);
}

fetch('/eredmenyek')
    .then(function(válasz) {
        válasz.json().then(oldalGenerálás);
        
    
    })


function myFunc () {
    console.log("Jakiś tekst");
}
setTimeout(myFunc,5000);


setTimeout(() => {
    console.log("z zaskoczenia");
},8000);

function print (txt,nr){
    console.log(txt,nr);

}
setTimeout (print,2000,"Ala ma kota",102);

const interval = setInterval(() =>{
    console.log("Wypisze się co sekundę")

},1000);
 
clearInterval(interval);

console.group ("Nazwa grupy");
console.log("Ala ma kota");
console.log("Kot ma Alę");
console.groupEnd;

console.table(["Czesc","Ala","Kot"]);

console.log("Jestem zwykłym tekstem w konsoli");
console.log("%cJetem zwykłym tektem w konsoli","font-weight:bold;color:rebeccapurple;font-size:30px;background:gold");
console.log("Kot %s lubi się bawić","Rysiek");
console.log("Cena tego produktu to %dzł",120);
console.log("%cCena tego produktu to %dzł","color:red;font-weight:bold",120);

 alert("treść komunikatu");


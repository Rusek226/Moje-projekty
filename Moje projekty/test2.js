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

console.table([1,2,3,4,5]);


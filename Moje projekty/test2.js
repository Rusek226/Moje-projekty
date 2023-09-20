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


let a = 0;
a = 10;

const tab = [1,2,3];
tab[3] = 4;
tab.push(5,6);
console.log(tab);

// tab = [1,2,3,4,5,6];

/**const user = {
    name:"Piotr",
    age : 18
}

user.age = 20;
user ={
    name:"Poitr"
}/** */

let c = 20;
{
    let c = 30;
    console.log(c);
}
console.log(c);
{
    let d = "Ala";
    console.log(d);
}

/**{
    console.log(d);
}/** */

{
    let e = "Ola";
    console.log(e);
}

// console.log(e);

for(let i=0;i<30;i++) {
    console.log(i);
}
// console.log(i);

// console.log(f);
// let f = 20;



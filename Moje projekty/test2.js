/*function myFunc () {
    console.log("Jakiś tekst");
}
setTimeout(myFunc,5000);*/


/*setTimeout(() => {
    console.log("z zaskoczenia");
},8000);*/

function print (txt,nr){
    console.log(txt,nr);

}
// setTimeout (print,2000,"Ala ma kota",102);

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

// Zmienne let i const

let a = 0;
a = 10;

const tab = [1,2,3];
tab[3] = 4;
tab.push(5,6);
console.log(tab);

// tab = [1,2,3,4,5,6];

const user = {
    name:"Piotr",
    age : 18
}

/**user.age = 20;
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

// OPERATORY

const x = 5;
console.log(x+2);
console.log(x-1);
console.log(x*2);
console.log(x/2);
console.log(x%2);
console.log(9%3);
console.log(x**2);
console.log(3**3);

let y = 24;

if(y % 2===0){
    console.log(`Liczba ${y} jest parzysta`);
}

let z = 5;
z += 3;
console.log(x);

let o = 5;
o -= 3;
console.log(o);

let k = 5;
k *= 3;
console.log(k);

let u = 5;
u /= 2;
console.log(u);


let t =5;
t++;
console.log(t);

let h = 8;
h--;
console.log(h);

// Instrukcje warunkowe plus pętle

const nr = 8;
    switch (true) {
        case (nr<= 5):
            console.log("Mało");
        break;
        case (nr > 5 && nr < 10):
            console.log("Śednio");
                break;
        case ( nr >= 10):
            console.log("Dużo");
            break;
        
    }

    let i = 1;

    while (i <=20) {
        console.log("Nie będę ...");
         i++;
    }

    for ( let i=0; i<10;i++){
        console.log("%cGłówna pętla nr " + i, "color:green");


        for (let j=0;j<5;j++) {
            console.log("%cPętla wewnętrzna nr " + j,"color:purple");
        }
    }

let str = "";

    for (let i=0; i<4; i++) {
        for (let j=0; j<6; j++) {
            str += "*";
        }
        str += "\n";
    }
    console.log(str);

let g = 0;

while (i <10){
    console.log(i);
    i = Math.random();
}
console.log(i);


const ob = {
    name:"Karol"
}
ob.name

const txt = "Ala ma kota";
txt.length;
txt.toUpperCase();
console.log(txt.length);


const zzz = "Ala";
const big = txt.toUpperCase();
console.log(big);
console.log(txt);

const fg = 10;
const fff = "coś tam ";
const arr = [1,2,3];


console.log(typeof nr);
console.log(typeof fff);
console.log(typeof arr);

/*const nr =20;
    if (nr>20){
        console.log("Liczba jest większa od 20");
    }
        else {
            console.log("Liczba jest mniejsza lub równa 20");
        }*/

const a = 10;
const b = 20;
console.log(b>a);
console.log(b<a);
console.log(b===a);

const result = a>b;
console.log(result);

const c = 10;
const d = 20;
        if (c<d){
            console.log("C jest mniejsze od D");
        }
/*const li = prompt("Podaj jakąś liczbę");
        if (li >5){
            console.log('Liczba ${li} jest większa od 5');
        }

        if ("7" >5){
            console.log('Liczba 7 jest większa od 5');
        }*/

console.log("a" > "A");
console.log("Kot" > "kot");
console.log("alicja" >"Beata");
console.log("ab" > "aa");
console.log("pies" > "kot");
console.log("abc" > "acc");
console.log("alicja" > "bela");
console.log("Marcin" > "Ania");


console.log("a" > "A"); 
console.log("Kot" > "kot");
console.log("alicja" > "Beata");

console.log("3" > 2);
console.log("02" > 3);
console.log("0" == 0);

console.log(true >2);
console.log(false <2);

console.log("Ala" > 0);

/*const nr = Number(prompt("Podaj liczbę z zakresu 1-10"));
        if (nr > 5){nr};
        console.log(nr);*/

   /* const nr = Number(prompt("Podaj liczbę"));
        if (nr === 10) {
                        console.log(nr+nr);
            console.log(10 +"10");
            console.log(10 + 10);
        }*/

const j = 20;
const m = 0;
const l = null;
        if (a){
            console.log("A ma wartość,a");
        }

        if (b) {
            console.log("B ma wartość", b);
        }
        if (c){
            console.log("C ma wartość",0);
        }
        if (false){

        }

const pr = Math.random()*10;
        if (pr >=5){
            console.log("Liczba pr jest większa lub równa  5");
        } else {
            console.log("Liczba pr jest mniejsza od 5");
        }

/*const imie = "Kasia";
        if (imie === "Marcin"){
            console.log("Marciny są fajne");
        }else if (imie === "Ania"){
            console.log("Anie są fajne");
        }else if (imie === "Karol"){
            console.log("Karole są fajne");
        }else {
            console.log("Nie wiem kto jest fajny");
        }*/

const checkImie = true;
const imie = "Karol";

        if (checkImie){
            if (imie ==="Ala");
            console.log("Imie zaczyna się na A");
        }
        if (imie === "Beata"){
            console.log("Imie zaczyna się na B");
        }
        if (imie === "Karol"){
            console.log("Imie zaczyna się na K");
        }

const i = 20;
let number = "";
        if (i >0){
            number = "dodatnia";
            console.log("dodatnia")
        } else {
            number = "ujemna";
            console.log("ujemna");
        }

/*const animal = prompt("Jakiego masz zwierzaka");
        switch(animal){
            case "pies":
                console.log("Psy są najlepsze");
                break
            case "kot":
                console.log("Koty są lepsze od psów");
                break
            case "chomik":
                console.log("Każdy chomik jest super");
                break
            default:
                console.log("Jakiś dziwny tez zwierzak");
        }*/

for (let i=0;i<100;i++){
    console.log("Nie będę rozmawiał na lekcji Informatyki");
}


for (let i=0; i<6; i++){
    console.log("wyknoywanie pętli", i);
}

let sum = 0;
for (let i =0;i<10;i++){
    sum += i;
}
console.log(sum);

for(let i= 10;i>0;i--){
    console.log("trwa odliczanie",i);
}

const f = 10;
const g =20;
  for (let i=1; i<=f && i<=g; i++);
  console.log("Wypisze sie co mna mniejsza liczba",i);

let k =0;

    while(k<=90){
        console.log("Nie będę...");
        k++;
        
    }

let h = 0;
while ( i  < 0.5){
    console.log(i);
    i =Match.random();

}
console.log(i);

let o = 0;
do{
    o++;
    console.log(i);

} while (i<5);

for (let i =0; i<10; i++){
    console.log("%c Główna pętla: "  + i,"color  :red");
    for (let j=0;j<11; j++){
        console.log("%c Pętla wewnętrzna nr: " +j, "color:blue");
    }
}

/*let str ="";
for(let j=0; j<9; j++){
    str+= "*";
}
console.log(str);*/

/*let str ="";
    for(let j=0; j<4; j++){
        for(let j=0;j<6;j++){
            str +="*";
        }
        str += "\n";
 }

 console.log(str);*/
       
let str = "";
 for (let i=0; i<4; i++){
    for(let j=0; j<6; j++){
        if(i===0 || i===3 || j===0 || j===5){
            str +="*";
        
        }else {
            str+= "-"
        }
    }
    str +="\n";
 }
console.log(str);

for (let i =0; i<200; i++){
    console.log("Siemano",);
}

let xxx = '';
let s = 0;

while (s <= 100) {
    xxx += s;
    if (xxx.length > 20) break;
    s++;
}

console.log(xxx);

/*const tab = ["Ala", "Monika", "Beata", "Karol"];

let userExist = false;

for (let i=0; i<tab.length; i++) {
    if (tab[i] === "Beata") {
        userExist = true;
        break; 
    }
}*/

const tab = ["Ala", "Monika", "Beata", "Karol", "Alicja"];

for (let i=0; i<tab.length; i++) {
    if (tab[i] === "Karol") {
        continue; 
    }
    console.log(tab[i]);
}


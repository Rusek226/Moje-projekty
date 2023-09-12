/*const x = 2;
console.log(x);
console.log(6 + x);
console.log((6 * x) * 2);*/


let = "Hello World";
console.log("Hello World");
txt = "Inny tekst";
console.log(txt);

const min = 5;
const max = 15;
const random = Math.floor(Math.random()*(max-min+1)+min);
console.log(random);

var text = 'ala ma kota';
text = 'ala nie ma kota';
console.log(text);

/*let a =0;
a = 10;
console.log(a);*/

const tab = [1,2,3];
tab  [3] = 4;
tab.push(5,6);
console.log(tab);

let a = 20;
    {

    let a = 30;
    console.log(a);
    }
    console.log(a);

{

let a = "Ala";
console.log(a);
}
{
    console.log(a);
}

for  (let i=0; i<100; i++){
    console.log(i)
}


//alert ("SIEMANO");

const x = 5;
console.log(x + 2);
console.log(x - 1);
console.log(x *3);
console.log(x /2);
console.log(x % 2);
console.log(9 %3);


let y = 24;
    if (y % 2===0){
        console.log('True');
    }

{
    let x =5;
    x+=3;
    console.log(x);
}

{
    let x =5;
    x -= 3;
    console.log(x);
}

{
    let x =5;
    x *= 3;
    console.log(x);
}

{
    let x = 15;
    x /= 3;
    console.log(x);
}

{
    let x =11;
    x %= 3;
    console.log(x);
}
 
let t = 5;
t++;
console.log(t);

let z = 5;
z--;
console.log(z);


for ( let f=0; f<200;f++){
    console.log(f);
}
//alert ("PING PONG o 15:00");

//operatory porównania

let j =10;
console.log(j == 10);

let h = 10;
console.log(h!= 20);
console.log(h != 10);
console.log(h != "10");

let u = 10;
console.log(u == 10);
console.log(u == "10:");

let o = 10;
console.log(o !== 10);
console.log(o !=="10");

let g =10;
let l = 20;
console.log(g <20);
console.log(g <l);
console.log(g >l);

let k = 10;
let m = 20;
let n = 10;
console.log(k <=m);


function test (){
    for  (let i=0; i<100; i++){
        console.log(i)
    }
}
test();
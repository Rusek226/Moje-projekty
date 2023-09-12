function myFunc () {
    console.log("Jakiś tekst");
}
setTimeout(myFunc,5000);


setTimeout(() => {
    console.log("z zaskoczenia");
},3000);
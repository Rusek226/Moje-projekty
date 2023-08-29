// instrukcje wyboru

let box = document.getElementById("result");

let color = "green";

switch (color) {
    case  "green":
        box.style.backgroundColor = "green";
        box.style.color = "white";
        break;
    case "blue":
        box.style.backgroundColor = 'blue';
        box.style.color = "white";
        break;
    case "red":
        box.style.backgroundColor = "red";
        box.style.color = "white";
        break;
    default :
    box.style.backgroundColor = "grey";
    box.style.color = "white";
    break;
}
    

    

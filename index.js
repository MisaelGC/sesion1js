//Piramide 
var simbolo = "* ";
var linea = "";
var i = prompt("Dame un numero del 1 al 10");

for(i; i <= 10; i++){
    linea += simbolo;
    document.write(linea + "<br>")
}


//For
var color = prompt("¿Cual es tu color favorito?");
if (color == "rojo" || color == "Rojo"){
    document.write("Eres apasionado" + "<br>");
}else if(color = "azul" || color =="Azul"){
    document.write("Tas loco" + "<br>");
}else if(color = "naranja" || color == "Naranja"){
    document.write("Tienes hambre" + "<br>");
}else{
    document.write("Ninguna es buena XD que creisi" + "<br>");
}

//Switch
var estado = prompt("¿Cual es tu estado favorito?, la primera con masyuscula en cada palabra");
switch(estado){
    case "Jalisco":
        document.write("Viva las Tapatias" + "<br>");
    break;
    case "San Luis Potosi":
        document.write("Hermosa la Huasteca" + "<br>");
    break;
    case "Nuevo Leon":
        document.write("Fierro Pariente" + "<br>");
    break;
    default:
        document.write("Toluca, Guadalajara, Monterrey, No son estados yo se que los pensaste, solo tienes 3 opciones piensa bien XD" + "<br>");
    break;
}

//Array
var frutas = ["Melon",  " Naranja",  " Platano"];
document.write(frutas);

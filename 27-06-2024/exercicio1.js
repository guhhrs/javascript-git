let hora = 13; 
const bomDia = hora >= 6 && hora < 12
const boaTarde = hora >= 12 && hora < 18

if (bomDia){
    console.log("Bom dia!")
} else if (boaTarde){
    console.log("Boa tarde")
} else {
    console.log("Boa noite!")
} 
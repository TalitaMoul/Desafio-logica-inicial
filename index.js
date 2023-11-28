const name = "Talita"
let XP = 7068
let nivel = ""

if (XP < 1000){
    nivel = "Ferro" 
    console.log(`O herói de nome ${name} está no nível de ${nivel}.`)
} else if ((XP > 1000) && (XP <= 2000)) {
    nivel = "Bronze"
    console.log(`O herói de nome ${name} está no nível de ${nivel}.`)
} else if ((XP > 2000) && (XP <= 5000)) {
    nivel = "Prata"
    console.log(`O herói de nome ${name} está no nível de ${nivel}.`)
}  else if ((XP > 5000) && (XP <= 6000)) {
    nivel = "Ouro"
    console.log(`O herói de nome ${name} está no nível de ${nivel}.`)
}  else if ((XP > 6000) && (XP <= 7000)) {
    nivel = "Platina"
    console.log(`O herói de nome ${name} está no nível de ${nivel}.`)
}  else if ((XP > 7000) && (XP <= 8000)) {
    nivel = "Ascendente"
    console.log(`O herói de nome ${name} está no nível de ${nivel}.`)
}  else if ((XP > 8000) && (XP <= 9000)) {
    nivel = "Imortal"
    console.log(`O herói de nome ${name} está no nível de ${nivel}.`)
}  else {
    nivel = "Radiante"
    console.log(`O herói de nome ${name} está no nível de ${nivel}.`)
}
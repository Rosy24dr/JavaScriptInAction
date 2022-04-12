//Days of the week problem
// let dayOfWeek = 'Monday'
// console.log(dayOfWeek)
// dayOfWeek = 'Friday'
// console.log(`I can not wait for ${dayOfWeek}!`)

//Users input problem
//let animalInput = prompt('What is your favorite animal?')
//let colorInput = prompt('What is your favorite color?')
//console.log(`I have never seen a ${colorInput} ${animalInput}!`)


//Meal problem
// let timeOfDay = 1300
// let favoriteMeal = ''

// if (timeOfDay < 1200){
//     alert('Mangu con salami y huevo frito!');
// }
// else if (timeOfDay > 1200 && timeOfDay < 1700){
//     alert('Fritos con carne frita')
// }
// else if (timeOfDay > 1700){
//     alert('Sancocho')
// }

// console.log(timeOfDay)


//Randon Number Problem
let randomNumber = Math.floor(Math.random() * 11)

if (randomNumber > 0 && randomNumber < 2){
    alert('Beatles');
}
else if (randomNumber > 3 && randomNumber < 5){
    alert('Stones');
}
else if (randomNumber > 6 && randomNumber < 8){
    alert('Floyd');
}
else if (randomNumber > 9 && randomNumber < 10){
    alert('Hendrix')
}

console.log(randomNumber)
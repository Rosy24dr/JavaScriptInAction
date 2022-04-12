//Days of the week problem

let dayOfWeek = 'Monday'
console.log(dayOfWeek)
dayOfWeek = 'Friday'
console.log(`I can not wait for ${dayOfWeek}!`)

//Users input problem

let animalInput = prompt('What is your favorite animal?')
let colorInput = prompt('What is your favorite color?')
console.log(`I have never seen a ${colorInput} ${animalInput}!`)


//Meal problem

let timeOfDay = 1300
let favoriteMeal = ''

if (timeOfDay < 1200){
    alert('Mangu con salami y huevo frito!');
}
else if (timeOfDay > 1200 && timeOfDay < 1700){
    alert('Fritos con carne frita')
}
else if (timeOfDay > 1700){
    alert('Sancocho')
}

console.log(timeOfDay)


//Randon number problem

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

//Loops problems

for(let i = 0; i <= 7; i++){
    console.log('JavaScript is cool!')
}
let number = 7

for(let i = 0; i <= number; i++){
    console.log(i)
}

let stringOne = 'hello'
let stringTwo = 'goodbye'

for(let i = 0; i < 5; i++){
    console.log(stringOne)
    console.log(stringTwo)
}

//Function loop problems

function printMovieName(){
    let favoriteMovie = '50 First Dates'
    return favoriteMovie;
}
let myFavoriteMovie = printMovieName()
console.log(myFavoriteMovie)


function usersFavoriteBand(){
    let userInput = prompt('What is the name of your favortie band?')
    return userInput
}
let theUsersFavoriteBand = usersFavoriteBand()
console.log(theUsersFavoriteBand)


function concertDisplay(musicalAct){
    let myStreet = prompt('What street do you live on?');
    return myStreet
}
let myMusicalAct = theUsersFavoriteBand
let myStreetName = concertDisplay()
console.log(`It would be great if ${myMusicalAct} played a show on ${myStreetName}.`);

//Array problems

let desktopItems = ['laptop', 'phone', 'clock']
console.log(desktopItems[1]);

desktopItems.push('Infinity Gauntlet');
console.log(desktopItems)

for(i = 0; i < desktopItems.length; i++){
    console.log(desktopItems[i])
}

//Magic Number

let magicNumber = Math.floor(Math.random() * 100)
let guess = 0

function guessingMagicNumber(){
    while (guess != magicNumber){
        guess= prompt('Which number do you think is the magic number?');
        if ((guess < magicNumber + 10) && (guess > magicNumber - 10)){
            alert("Getting Warmer")
        }
        else if (guess < magicNumber){
            alert("Too low!")
        }
        else if (guess > magicNumber){
            alert("Too high!")
        }
        else if (guess == magicNumber){
            alert(`Great job! ${magicNumber} is the correct number!`);
            break
        }
    }
}

let theMagicNumber = guessingMagicNumber()
console.log(theMagicNumber)
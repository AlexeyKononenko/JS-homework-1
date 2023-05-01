const number = Math.floor(Math.random()*1000)
console.log('Загаданое число:', number)
const myNumber = prompt('Введите число от 0 до 1000')

    if(isNaN(+myNumber)){
        alert('Вы ввели не число')
    } else if (myNumber > number){
        alert('Меньше')
    } else if (myNumber < number){
        alert('Больше')
    } else{
        alert('Вы угадали')
    }

const minCount = 0;
const maxCount = 50;
const attCount = 10;

const getUserName = () => {
    const userName = prompt("Привет! Как тебя зовут?");
    return userName;
}

const userName = getUserName();

const getRenderNumber = maxLimit => Math.round(Math.random() * maxLimit);

const randomNumber = getRenderNumber(maxCount);

const playGame = (minLimit, maxLimit, attsNum, number, name) => {
    alert(`Хай, ${userName}!
    Я загадал число больше, чем ${minLimit} и меньше, чем ${maxLimit}.
    У тебя ${attsNum} попыток, чтобы отгадать его. Удачи, бро!`)

    for(let i = 0; i < attCount; i++){
        const answer = prompt(`Ну, что думаешь?`)
        if(answer > number){
            alert(`Число, которое я загадал - меньше.
            У тебя осталось ${attsNum - i} попыток.`)
        } else if (answer < number){
            alert(`Число, которое я загадал - больше.
            У тебя осталось ${attsNum - i} попыток.`)
        } else {
            alert(`${name}, ты мой Герой!!! Отгадал с ${i}-й.
            Возьми конфетку 🍬!`)
            return
        }
    }
    alert(`${name}, гейм овер, чувак... Сегодня не твой день: ты продул!!!!!`)
}

playGame(minCount, maxCount, attCount, randomNumber, userName);
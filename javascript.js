const numberGuess = document.querySelector('.number')
const FizzGuess = document.querySelector('.Fizz')
const BuzzGuess = document.querySelector('.Buzz')
const FizzBuzzGuess = document.querySelector('.FizzBuzz')
const counter = document.querySelector('.value')
const reply = document.querySelector('.replay');
const hearts = document.querySelector('.hearts');
let currentValue = 1;
let heartCount =  0;
let childRef = [];

numberGuess.addEventListener('click', inputCheck);
FizzGuess.addEventListener('click', inputCheck);
BuzzGuess.addEventListener('click', inputCheck);
FizzBuzzGuess.addEventListener('click', inputCheck);

function inputCheck(e) {
    if ((currentValue % 3 === 0) && (currentValue % 5 === 0)) {
        e.target.className === 'FizzBuzz' ? correctAnswer() : wrongAnswer()
    } else if (currentValue % 3 === 0) {
        e.target.className === 'Fizz' ? correctAnswer() : wrongAnswer() 
    } else if (currentValue % 5 === 0) {
        e.target.className === 'Buzz' ? correctAnswer() : wrongAnswer()
    } else {
        e.target.className === 'number' ? correctAnswer() : wrongAnswer()
    }
    currentValue++;
    incrementCurrentValue();
    numberGuess.value = currentValue;
}

function applyChild() {
    reply.innerHTML = '';
    let apply = document.createElement('p');
    apply.classList.add('foo');
    return apply;
}

function correctAnswer() {
    let apply = applyChild();
    reply.appendChild(apply).textContent = `Correct!`;
    reply.style.color = 'green';
}

function wrongAnswer() {
    childRef[heartCount] = hearts.removeChild(hearts.lastElementChild);
    heartCount++;
    let apply = applyChild();
    reply.style.color = 'red';
    console.log(childRef)
    if (heartCount === 3) {
        reply.appendChild(apply).textContent = `Lost! :c`;
        resetGame();
    } else {
        reply.appendChild(apply).textContent = `Wrong!`;
    }  
 }

function incrementCurrentValue() {
    counter.textContent = currentValue;
}

function resetGame() {
    currentValue = 0;
    heartCount =  0;
    reply.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        hearts.appendChild(childRef[i]);
    }
}



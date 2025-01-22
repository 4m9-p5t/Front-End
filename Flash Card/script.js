const flashcards = [
    {question: 'What is the capital of France?', answer: 'Paris'},
    {question: 'Who is CEO of Tesla?', answer: 'Elon Musk'},
    {question: 'The iPhone was created by which company?', answer: 'Apple'},
    {question: 'How many Harry Potter books are there?', answer: '7'},
    {question: 'The Big Apple is a nickname given to which U.S. city?', answer: 'New York City'}
];

let currentCardIndex = 0;
let showingAnswer = false;

const cardElement = document.querySelector('.card p');
const progressBar = document.getElementById('progressBar');
const progressText = document.querySelector('.progress-container span:last-child');
const progressPercentage = document.querySelector('.progress-container span:first-of-type');

function updateCard(){
    const card = flashcards[currentCardIndex];
    cardElement.textContent = showingAnswer ? card.answer : card.question;
    updateProgress();
}

function updateProgress(){
    const progress = ((currentCardIndex + 1) / flashcards.length) * 100;
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${currentCardIndex + 1} of ${flashcards.length}`;
    progressPercentage.textContent = `${Math.round(progress)}%`;
}

document.getElementById('previous').addEventListener('click', () => {
    if(currentCardIndex > 0){
        currentCardIndex--;
        showingAnswer = false;
        updateCard();
    }
});

document.getElementById('next').addEventListener('click', () => {
    if(currentCardIndex < flashcards.length - 1){
        currentCardIndex++;
        showingAnswer = false;
        updateCard();
    }
});

document.getElementById('showAnswer').addEventListener('click', () => {
    showingAnswer = !showingAnswer;
    updateCard();
});

updateCard();
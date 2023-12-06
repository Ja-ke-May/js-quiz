const questions = [
        {
          question: "Which planet is known as the 'Red Planet'?",
          options: ["Venus", "Jupiter", "Mars", "Saturn"],
          correctAnswer: "Mars",
        },
        {
          question: "Who wrote the famous play 'Hamlet'?",
          options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
          correctAnswer: "William Shakespeare",
        },
        {
          question: "In which year did the Titanic sink?",
          options: ["1912", "1923", "1931", "1945"],
          correctAnswer: "1912",
        },
        {
          question: "What is the capital city of Japan?",
          options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
          correctAnswer: "Tokyo",
        },
        {
          question: "Who is the author of 'To Kill a Mockingbird'?",
          options: ["J.K. Rowling", "Harper Lee", "George Orwell", "Ernest Hemingway"],
          correctAnswer: "Harper Lee",
        },
        {
          question: "Which element has the chemical symbol 'O'?",
          options: ["Oxygen", "Gold", "Osmium", "Iodine"],
          correctAnswer: "Oxygen",
        },
        {
          question: "Which mountain is the highest in the world?",
          options: ["Mount Everest", "K2", "Makalu", "Lhotse"],
          correctAnswer: "Mount Everest",
        },
        {
          question: "What is the currency of Brazil?",
          options: ["Peso", "Real", "Dollar", "Euro"],
          correctAnswer: "Real",
        },
        {
          question: "Who is known as the 'Father of Computer Science'?",
          options: ["Alan Turing", "Bill Gates", "Steve Jobs", "Ada Lovelace"],
          correctAnswer: "Alan Turing",
        },
        {
          question: "In which year did the Berlin Wall fall?",
          options: ["1989", "1991", "1977", "1995"],
          correctAnswer: "1989",
        },
        {
          question: "What is the largest mammal on Earth?",
          options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
          correctAnswer: "Blue Whale",
        },
        {
          question: "Who painted the 'Mona Lisa'?",
          options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
          correctAnswer: "Leonardo da Vinci",
        },
        {
          question: "Which gas do plants absorb from the atmosphere?",
          options: ["Oxygen", "Carbon Monoxide", "Nitrogen", "Carbon Dioxide"],
          correctAnswer: "Carbon Dioxide",
        },
        {
          question: "What is the largest desert in the world?",
          options: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Antarctica"],
          correctAnswer: "Antarctica",
        },
        {
          question: "Who discovered penicillin?",
          options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Joseph Lister"],
          correctAnswer: "Alexander Fleming",
        },
        {
          question: "Which planet is known as the 'Morning Star'?",
          options: ["Mercury", "Venus", "Mars", "Jupiter"],
          correctAnswer: "Venus",
        },
        {
          question: "What is the largest ocean on Earth?",
          options: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
          correctAnswer: "Pacific Ocean",
        },
        {
          question: "Who wrote the 'Iliad' and the 'Odyssey'?",
          options: ["Homer", "Virgil", "Sophocles", "Aristotle"],
          correctAnswer: "Homer",
        },
        {
          question: "In which year did World War II end?",
          options: ["1945", "1950", "1939", "1941"],
          correctAnswer: "1945",
        },
        {
          question: "What is the largest planet in our solar system?",
          options: ["Earth", "Jupiter", "Saturn", "Neptune"],
          correctAnswer: "Jupiter",
        },
        {
          question: "Which country is known as the 'Land of the Rising Sun'?",
          options: ["China", "South Korea", "Japan", "Vietnam"],
          correctAnswer: "Japan",
      },
      {
          question: "Who is the 16th President of the United States?",
          options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John F. Kennedy"],
          correctAnswer: "Abraham Lincoln",
      },
      {
          question: "What is the largest continent on Earth?",
          options: ["North America", "Europe", "Asia", "Australia"],
          correctAnswer: "Asia",
      },
      {
          question: "Who wrote 'Romeo and Juliet'?",
          options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"],
          correctAnswer: "William Shakespeare",
      },
      {
          question: "Which chemical element has the symbol 'H'?",
          options: ["Helium", "Hydrogen", "Hassium", "Hafnium"],
          correctAnswer: "Hydrogen",
      },
      {
          question: "What is the capital city of France?",
          options: ["Berlin", "Madrid", "Paris", "Rome"],
          correctAnswer: "Paris",
      },
      {
          question: "Who is the 44th President of the United States?",
          options: ["Barack Obama", "Donald Trump", "George W. Bush", "Bill Clinton"],
          correctAnswer: "Barack Obama",
      },
      {
          question: "In which year was the Eiffel Tower completed?",
          options: ["1889", "1901", "1923", "1945"],
          correctAnswer: "1889",
      },
      {
          question: "What is the capital city of Australia?",
          options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
          correctAnswer: "Canberra",
      },
      {
          question: "Who wrote '1984'?",
          options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Philip K. Dick"],
          correctAnswer: "George Orwell",
      },
      {
          question: "Who is the author of 'The Great Gatsby'?",
          options: ["F. Scott Fitzgerald", "Ernest Hemingway", "Jane Austen", "Charles Dickens"],
          correctAnswer: "F. Scott Fitzgerald",
      },
      {
          question: "What is the largest river in the world?",
          options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
          correctAnswer: "Amazon River",
      },
      {
        question: "Who developed the theory of general relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Galileo Galilei"],
        correctAnswer: "Albert Einstein",
      }
];

// Shuffle function
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
    if (array[i].options) {
      // Shuffle answer options if present
      shuffleArray(array[i].options);
    }
  }
};

shuffleArray(questions);

const quizContainer = document.getElementById('quiz-container');
const questionBox = document.getElementById('question-box');
const answerBoxs = document.getElementById('answer-boxs');
const answerButtons = document.getElementsByClassName('answer-box');
const plusThree = document.getElementById('green-plus');
const minusFive = document.getElementById('red-minus');

let currentQuestionIndex = 0;
let count = 0;

// Load the current question and its options
const loadQuestion = () => {
  const currentQuestion = questions[currentQuestionIndex];

  // Display the question
  questionBox.textContent = currentQuestion.question;

  // Remove existing event listeners on answer buttons
  Array.from(answerButtons).forEach((button) => {
    button.removeEventListener('click', checkAnswer);
  });

  // Display the answer options
  Array.from(answerButtons).forEach((button, i) => {
    button.textContent = currentQuestion.options[i];
    // Add event listener to check the answer when a button is clicked
    button.addEventListener('click', checkAnswer);
  });
};

// Function to check the selected answer
const checkAnswer = (event) => {
  const selectedAnswer = event.target.textContent;
  const correctAnswer = questions[currentQuestionIndex].correctAnswer;

  // Check if the selected answer is correct
  if (selectedAnswer === correctAnswer) {
    count++;
    timerDuration += 3;
    plusThree.style.display = 'block';
    setTimeout(() => {
      plusThree.style.display = 'none';
    }, 500);

  } else {
    timerDuration -= 6;
    minusFive.style.display = 'block';
    setTimeout(() => {
      minusFive.style.display = 'none';
    }, 500);
  }

  // Move to the next question
  currentQuestionIndex++;

  // Check if there are more questions
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    // Display a message or perform actions when the quiz ends
    alert('Quiz completed! Your score: ' + count);

    // Reset the quiz when the alert "OK" is clicked
    resetQuiz();
  }
};

const timerElement = document.getElementById('timer');
let timer;
let timerDuration = 22; // Initial timer duration in seconds

// Function to update and display the timer
function updateTimer() {
  const minutes = Math.floor(timerDuration / 60);
  const seconds = timerDuration % 60;
  timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Function to start the timer
function startTimer() {
  timer = setInterval(function () {
    if (timerDuration > 0) {
      timerDuration--;
      updateTimer();
    } else {
      // Time is up, end the quiz
      clearInterval(timer);
      alert('Out of Time! Your score: ' + count);
      resetQuiz();
    }
  }, 1000);
}

// Function to reset the timer
function resetTimer() {
  clearInterval(timer);
  timerDuration = 22; // Reset the timer duration
  updateTimer();
  startTimer(); // Start the timer again after resetting
}

// Function to reset the quiz and timer
function resetQuiz() {
  currentQuestionIndex = 0;
  count = 0;
  shuffleArray(questions);
  loadQuestion();
  resetTimer(); // Reset the timer when resetting the quiz
}

// Initial load of the first question and start the timer
loadQuestion();
updateTimer(); // Display initial timer value
startTimer(); // Start the timer


// AUDIO
const audio = document.querySelector('audio');
const audioOn = document.getElementById('audioOn');
const audioOff = document.getElementById('audioOff');

audioOn.addEventListener('click', () => {
  audioOn.style.display = "none";
  audioOff.style.display = "block";
  audio.pause();
});

audioOff.addEventListener('click', () => {
  audioOn.style.display = "block";
  audioOff.style.display = "none";
  audio.play();
});
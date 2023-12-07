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

// Shuffle function, Fisher-Yates shuffle algorithm
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
const finalScore = document.getElementById('final-score');
const finalTime = document.getElementById('final-time');
const secs = document.getElementById('secs');
const endMessage = document.getElementById('end-message');
const endMessage1 = document.getElementById('end-message1');

let currentQuestionIndex = 0;
let count = 0;

// Load the current question and options
const loadQuestion = () => {
  const currentQuestion = questions[currentQuestionIndex];

  // Display question
  questionBox.textContent = currentQuestion.question;

  // Remove existing event listeners on answer buttons
  Array.from(answerButtons).forEach((button) => {
    button.removeEventListener('click', checkAnswer);
  });

  // Display answer options
  Array.from(answerButtons).forEach((button, i) => {
    button.textContent = currentQuestion.options[i];
    // Add event listener
    button.addEventListener('click', checkAnswer);
  });
};

// Check selected answer
const checkAnswer = (event) => {
  const selectedAnswer = event.target.textContent;
  const correctAnswer = questions[currentQuestionIndex].correctAnswer;

  // Check selected answer is correct
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
  };

  // Move to next question
  currentQuestionIndex++;

  // Check if there are more questions
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    // Congratulations end quiz
    clearInterval(timer); // Stop the timer
    endContainer.style.display = "block";
      quizContainer.style.display = "none";
    finalScore.textContent = count;
    finalTime.textContent = timerDuration; 
    endMessage.innerText = "Congratulations!"
    endMessage1.innerText = "You've Completed all 33 questions!"
  }
};

const timerElement = document.getElementById('timer');
let timer;
let timerDuration = 22; // Initial timer duration in seconds

// Update and display timer
function updateTimer() {
  const minutes = Math.floor(timerDuration / 60);
  const seconds = timerDuration % 60;
  timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  updateTimerColor()
};

// Start timer
function startTimer() {
  timer = setInterval(function () {
    if (timerDuration > 0) {
      timerDuration--;
      updateTimer();
    } else {
      // Time is up, end the quiz
      clearInterval(timer); // Stop the timer
      endContainer.style.display = "block";
      quizContainer.style.display = "none"; 
      // Display final score and time
    finalScore.textContent = count;
    finalTime.textContent = timerDuration;
    endMessage.innerText = "Out of Time!"
    endMessage1.innerText = "";
    secs.style.display = "none";
    }
  }, 1000);
  count = 0;
};

// 3, 2, 1 timer red function
function updateTimerColor() {
  if (timerDuration <= 5 && timerDuration >= 0) {
    timerElement.classList.add("text-red-500", "brightness-125");
  } else {
    timerElement.classList.remove("text-red-500", "brightness-125");
  }
};

// Reset timer
function resetTimer() {
  clearInterval(timer);
  timerDuration = 22; // Reset the timer duration
  updateTimer();
};

// Reset quiz and timer
function resetQuiz() {
  currentQuestionIndex = 0;
  count = 0;
  shuffleArray(questions);
  loadQuestion();
  resetTimer(); // Reset the timer when resetting the quiz
};

// AUDIO
const audio = document.querySelector('audio');
const audioOn = document.getElementById('audioOn');
const audioOff = document.getElementById('audioOff');

// Turn audio off
audioOn.addEventListener('click', () => {
  audioOn.style.display = "none";
  audioOff.style.display = "block";
  audio.pause();
});

// Turn audio on
audioOff.addEventListener('click', () => {
  audioOn.style.display = "block";
  audioOff.style.display = "none";
  audio.play();
});

// Instructions

// Welcome

const welcomeContainer = document.getElementById('welcome-container');
const welcomeNext = document.getElementById('welcome-next');

welcomeNext.addEventListener('click', () => {
  audioOn.style.display = "block";
  audioOff.style.display = "none";
   welcomeContainer.style.display = "none";
   instruction1Container.style.display = "block";
});

// Instruction 1
const instruction1Container = document.getElementById('instruction1-container');
const instruction1Next = document.getElementById('instruction1-next');
const instruction1Previous = document.getElementById('instruction1-previous');

instruction1Next.addEventListener('click', () => {
   instruction1Container.style.display = "none";
   instruction2Container.style.display = "block";
});

instruction1Previous.addEventListener('click', () => {
  instruction1Container.style.display = "none";
  welcomeContainer.style.display = "block";
});

// Instruction 2

const instruction2Container = document.getElementById('instruction2-container');
const instruction2Next = document.getElementById('instruction2-next');
const instruction2Previous = document.getElementById('instruction2-previous');

instruction2Next.addEventListener('click', () => {
   instruction2Container.style.display = "none";
   startContainer.style.display = "block";
});

instruction2Previous.addEventListener('click', () => {
  instruction2Container.style.display = "none";
  instruction1Container.style.display = "block";
});

// Start container

const startContainer = document.getElementById('start-container');
const startNext = document.getElementById('start-next');
const startPrevious = document.getElementById('start-previous');

startNext.addEventListener('click', () => {
   startContainer.style.display = "none";
   quizContainer.style.display = "block";
loadQuestion(); // Initial load of the first question and start timer
updateTimer(); // Display initial timer value
startTimer(); // Start the timer
});

startPrevious.addEventListener('click', () => {
  startContainer.style.display = "none";
  instruction2Container.style.display = "block";
});

// End Quiz

const endContainer = document.getElementById('end-container');
const endNext = document.getElementById('end-next');

endNext.addEventListener('click', () => {
   startContainer.style.display = "block";
   endContainer.style.display = "none";
resetQuiz();
});

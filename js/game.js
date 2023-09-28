const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const progressBarFull = document.getElementById("progressBarFull");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: `¿Quién dijo 'Mi alma que desborda humanidad ya no soporta tanta injusticia'? Para posteriormente inmolarse en protesta de la industria Pizarreño y su holding internacional, por no haber protegido a sus trabajadores y sus familias del veneno del asbesto.`,
    choice1: `Victor Jara Martínez`,
    choice2: `Carmen Parra Sandoval`,
    choice3: `Eduardo Miño Pérez`,
    choice4: `Armando Zurita`,
    answer: 3
  },
  {
    question: `¿Quién fue el educador y cardiocirujano reconocido mundialmente por haber desarrollado el bypass coronario?`,
    choice1: `Floreal Antonio Ferrara`,
    choice2: `Luis de la Fuente`,
    choice3: `Liliana Rosa Grinfeld`,
    choice4: `René Gerónimo Favarolo`,
    answer: 4
  },
  {
    question: `¿Qué continente fue devastado por la peste negra en el siglo XIV?`,
    choice1: `África`,
    choice2: `Sudamérica`,
    choice3: `Asía`,
    choice4: `Europa`,
    answer: 4
  },
  {
    question: `¿Quién creo la primera imprenta funcional?`,
    choice1: `Johannes Gutenberg`,
    choice2: `Nikola Tesla`,
    choice3: `Henry Ford`,
    choice4: `Benjamin Franklin`,
    answer: 1
  },
  {
    question: `¿En qué año comenzó la primera guerra mundial?`,
    choice1: `1937`,
    choice2: `1914`,
    choice3: `1917`,
    choice4: `1941`,
    answer: 2
  },
  {
    question: `¿Cuál fue la adquisición de territorio que Estados Unidos le compró a Francia en 1803?`,
    choice1: `Texas`,
    choice2: `Alaska`,
    choice3: `Luisiana`,
    choice4: `Ninguna`,
    answer: 3
  },
  {
    question: `¿En qué evento político-social se dio el periodo del 'Reino del Terror'?`,
    choice1: `Revolución cubana`,
    choice2: `Revolución Americana`,
    choice3: `Revolución Haitiana`,
    choice4: `Revolución Francesa`,
    answer: 4
  },
  {
    question: `¿Qué portencia mundial mandó el primer hombre al espacio en 1961?`,
    choice1: `Unión Soviética`,
    choice2: `China`,
    choice3: `Estados Unidos`,
    choice4: `Francia`,
    answer: 1
  },
  {
    question: `¿En dónde se oficiaron los primeros 'Juegos Olímpicos' de la era moderna de 1896?`,
    choice1: `Francia`,
    choice2: `Grecia`,
    choice3: `Inglaterra`,
    choice4: `Italia`,
    answer: 2
  },
  {
    question: `¿En qué fecha Julio César cayó asesinado en el senado víctima de una conspiración?`,
    choice1: `15 de Abril`,
    choice2: `15 de Mayo`,
    choice3: `15 de Febrero`,
    choice4: `15 de Marzo`,
    answer: 4
  },
  // 10

  
  {
    question: "¿Cuál de estos ríos está asociado con un área que contenía la tierra más húmeda y fértil?",
    choice1: `Negro`,
    choice2: `Yangtsé`,
    choice3: `Caspio`,
    choice4: `Éufrates`,
    answer: 4
  },
  {
    question: `¿Qué líder militar, que después se convirtió emperador, subió al poder durante la revolución francesa, en 1804?`,
    choice1: `Marqués de Lafayette`,
    choice2: `Luis XVI`,
    choice3: `Napoleón Bonaparte`,
    choice4: `Maximiliano de Robespierre`,
    answer: 3
  },
  {
    question: `¿Cuál fue el nombre de la primera computadora?`,
    choice1: `INIAC`,
    choice2: `ENIAC`,
    choice3: `CAINE`,
    choice4: `CNIEC`,
    answer: 2
  },
  {
    question: `¿Qué civilización estaba arraigada en la ciudad de Tenochtitlán?`,
    choice1: `Maya`,
    choice2: `Inca`,
    choice3: `Mexica`,
    choice4: `Olmeca`,
    answer: 3
  },
  {
    question: `¿Qué nación africana se resistió a la conquista europea a finales del siglo XIX?`,
    choice1: `Etiopía`,
    choice2: `Ghana`,
    choice3: `Nigeria`,
    choice4: `Camerún`,
    answer: 1
  },
  {
    question: `¿Quién escribió 'El manifiesto del partido comunista'?`,
    choice1: `Karl Marx`,
    choice2: `Frederich Engels`,
    choice3: `Karl Marx y Frederich Engels`,
    choice4: `Ninguno`,
    answer: 3
  },
  {
    question: `¿Quién fue el responsable de la liberación de gran parte de Sudamérica?`,
    choice1: `Carlos III`,
    choice2: `Agustín de Iturbide`,
    choice3: `Manuel Noriega`,
    choice4: `Simón Bolivar`,
    answer: 4
  },
  {
    question: `¿Quién fue el primer hombre en la luna?`,
    choice1: `Buzz Aldrin`,
    choice2: `Neil Armstrong`,
    choice3: `Yuri Gagarin`,
    choice4: `John Glenn`,
    answer: 2
  },
  {
    question: `¿Cuál fue la primera dinastía china, responsable de construir gran parte de la muralla china?`,
    choice1: `Dinastía Qin`,
    choice2: `Dinastía Ming`,
    choice3: `Dinastía Han`,
    choice4: `Dinastía Tang`,
    answer: 1
  },
  {
    question: `¿Quién fue el emperador romano que firmó el 'Edicto de Milán' para legalizar el cristianismo?`,
    choice1: `Constantino`,
    choice2: `Augusto`,
    choice3: `Nerón`,
    choice4: `Marco Aurelio`,
    answer: 1 
  },
  // 10


  {
    question: `¿A qué filósofo griego se atribuye la famosa obra 'La República'?`,
    choice1: `Ptolomeo`,
    choice2: `Aristóteles`,
    choice3: `Platón`,
    choice4: `Sócrates`,
    answer: 3
  },
  {
    question: `¿Qué científico es considerado el 'Padre de la bomba atómica'?`,
    choice1: `Albert Einstein`,
    choice2: `Robert Oppenheimer`,
    choice3: `Jonas Salk`,
    choice4: `Leó Szilárd`,
    answer: 2
  },
  {
    question: `¿Qué civilización prehispánica adoró al dios Kukulkán?`,
    choice1: `Incas`,
    choice2: `Inuit`,
    choice3: `Mayas`,
    choice4: `Griegos`,
    answer: 3
  },
  {
    question: `¿Cuál es el nombre de la famosa batalla donde Napoleón Bonaparte fue derrotado?`,
    choice1: `La batalla de Waterloo`,
    choice2: `La batala de Stalingrado`,
    choice3: `La batalla del Álamo`,
    choice4: `La batalla de Hastings`,
    answer: 1
  },
  {
    question: `¿Qué hito informático de 1969 cambiaría radicalmente el curso de la historia de la humanidad?`,
    choice1: `El primer router wi-fi`,
    choice2: `Ethernet`,
    choice3: `El primer ordenador personal`,
    choice4: `Internet`,
    answer: 4
  },
  {
    question: `¿Cómo se llamaba el legendario caballo de Alejandro Magno?`,
    choice1: `Marengo`,
    choice2: `Bucéfalo`,
    choice3: `Babieca`,
    choice4: `Rocinante`,
    answer: 2
  },
  {
    question: `¿Quién fue el último emperador romano en occidente?`,
    choice1: `Rómulo Augusto`,
    choice2: `Trajano`,
    choice3: `Julio César`,
    choice4: `Nerón`,
    answer: 1
  },
  {
    question: `¿Quién inventó el papel?`,
    choice1: `Sima Quian`,
    choice2: `Shen Kuo`,
    choice3: `Cai Lun`,
    choice4: `Ban Gu`,
    answer: 3
  },
  {
    question: `¿Qué etapa de la humanidad termina con el descubrimiento de la agriculura?`,
    choice1: `Edad de piedra`,
    choice2: `Mesolítico`,
    choice3: `Neolítico`,
    choice4: `Paleolítico`,
    answer: 4
  },
  {
    question: `¿Cómo se llamaba el perro de Hades?`,
    choice1: `Canbero`,
    choice2: `Kerbero`,
    choice3: `Cerbero`,
    choice4: `Lerbero`,
    answer: 3
  },
  //10

  
  {
    question: `Muralista mexicano originario de Guanajuato, México. Responsable de haber pintado la obra 'El hombre controlador del universo'`,
    choice1: `David Alfaro Siqueiros`,
    choice2: `José Clemente Orozco`,
    choice3: `Juan O'Gorman`,
    choice4: `Diego Rivera`,
    answer: 4
  },
]

const points = 1;
const max_questions = 31;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [ ... questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length == 0 || questionCounter >= max_questions) {
    localStorage.setItem("mostRecentScore", score);
    return window.location.assign("end.html");
  }

  questionCounter++;

  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });
  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    progressBarFull.style.width = `${(questionCounter / max_questions) * 100}%`;

    if (selectedAnswer == currentQuestion.answer) {
      correctAlert.style.setProperty("display", "block");
      gap.style.setProperty("display", "none");
      elementQuestion = document.getElementById("question");
      elementQuestion.classList.remove("animateFadeIn");

      score++;

      setTimeout(() => {
        correctAlert.style.setProperty("display", "none");
        gap.style.setProperty("display", "block");
        elementQuestion.classList.add("animateFadeIn");
        getNewQuestion();
      }, 1500);
    } else {
      elementQuestion = document.getElementById("question");
      elementAnswers = document.getElementById("answersContainer");
      incorrectAlert.style.setProperty("display", "block");
      gap.style.setProperty("display", "none");
      elementQuestion.classList.remove("animateFadeIn");

      setTimeout(() => {
        incorrectAlert.style.setProperty("display", "none");
        gap.style.setProperty("display", "block");
        elementQuestion.classList.add("animateFadeIn");
        getNewQuestion();
      }, 1500);
    }
  });
});

startGame();
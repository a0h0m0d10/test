(function() {
  "use strict";

  let questions = [
    {
      question: "   أي العبارات الآتية لا تنطبق مع عملية الإخراج في النبات ؟       ",
      answers: [" طبقة الكيوتين التي تغطى البشرة لا تمنع النتح      ", " معدل الإخراج لا يرتبط بمعدل الهدم      ", "فتحات الثغور المائية مفتوحة طوال العام      ", " ثغور الورقة تفتح وتغلق خلال اليوم      "],
      correctAnswer: 2
    },
    {
      question: "يتميز ماء النتج عن ماء الإدماع بجميع ما يلي ماعدا      ",
      answers: [" ماء خال من أي مواد       ", "  يخرج بكميات كبيرة      ", "يخرج من الثغور في صورة بخار      ", " لا يتحكم النبات في خروجه      "],
      correctAnswer: 4
    },
    {
      question: "يمكن أن يخرج الماء الزائد في النباتات العشبية من خلال جميع ما يلي ماعدا      ",
      answers: [" النتح الثغري      ", " النتح العديسي       ", "النتح الكيوتيني      ", "الإدماع  "],
      correctAnswer: 2
    },
    {
      question: "جميع العوامل التالية يمكن أن تسبب زيادة معدل النتح في النبات ماعدا      ",
      answers: [" زيادة شدة الضوء      ", " فتح الثغور      ", "ارتفاع درجة الحرارة      ", "  ارتفاع نسبة رطوبة الجو"],
      correctAnswer: 4
    },
    {
      question: "أي مما يلى يحتوى على أقل محتوی مائی داخل النبات ؟      ",
      answers: [" أوعية الخشب في الجذور      ", "  أوعية الخشب في الساق      ", "الغرف الهوائية في الورقة      ", " جدران خلايا الورقة "],
      correctAnswer: 3
    },
    {
      question: "عند نقل نبات نام من مكان مظلم إلى مكان مشمس دافئ      ",
      answers: [" يزداد معدل البناء الضوئي ويقل معدل النتح      ", " يقل معدل البناء الضوئي ويزداد معدل النتح      ", "يقل معدل البناء الضوئي ومعدل النتح      ", " يزداد معدل البناء الضوئي ومعدل النتح      "],
      correctAnswer: 4
    },
    {
      question: "      أي العبارات التالية يتعارض حدوثها عند غياب الجيوب الهوائية من أوراق نبات الفول ؟       ",
      answers: [" يتوقف النبات عن النتح الثغرى      ", " ترتفع درجة حرارة النبات مما يضر بالبروتوبلاست      ", "يتوقف ارتفاع الماء والأملاح إلى الأوراق      ", " يتوقف النبات عن النتح الكيوتيني "],
      correctAnswer: 4
    },
    {
      question: "عند غمس أوراق نبات نام معرض للضوء في زيت بارافين، فإن النتح عن طريق الثغور       ",
      answers: [" يقل ", "  يزداد ", "لا يتأثر      ", " ينعدم "],
      correctAnswer: 4
    },
    
  ];

  const shuffledquestions = questions.sort(() => 0.5 - Math.random());

  function createQuiz() {
    let currentQuiz = shuffledquestions[quizCount];
    questionEl.innerHTML = currentQuiz.question;
  
    answerContEl.innerHTML = ``;
  
    currentQuiz.choices
      .sort(() => 0.5 - Math.random())
      .forEach((choice) => {
        createQuizChoices(choice);
      });
  }
  
  let questionIndex,
    currentQuestion,
    score,
    timeSpent,
    quizTimer,
    questionIsAnswered,
    isQuizDone;
  let quiz = document.getElementById("quiz");

  function initQuiz() {
  

    questionIndex = 0;
    currentQuestion = 1;
    questionIsAnswered = 0;
    score = 0;
    timeSpent = "00:00";

    quiz.innerHTML = `<div id="progress-container"><span id="progress"></span></div>
    <div id="stats">
    <p>الاسئلة: <span id="questionNumber">${currentQuestion}/${
      questions.length
    }</span></p>
    <p>الإجابات الصحيحة: <span id="score">${score}</span></p>
    <p>الوقت المستغرق: <span id="timer">00:00</span></p>
    </div>
    <section id="answers"></section>`;

    displayQuestion();
    startTimer();
  }

  function displayQuestion() {
    let question = questions[questionIndex];
    let answers = document.getElementById("answers");
    let answerNumber = 0;
    let output = `<h2 class="text-center bold"> ${
      question.question
    }</h2>`;

    for (let i in question.answers) {
      answerNumber++;
      output += `<div class="answer">
      <input type="radio" id="answer-${answerNumber}" name="answers" value="${answerNumber}">
      <label for="answer-${answerNumber}">
      <span class="answer-number"></span> ${question.answers[i]}
      </label>
      </div>`;
    }

    answers.innerHTML = output;
  }

  function startTimer() {
    let s = 0;
    let m = 0;
    let h = 0;
    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    let timer = document.getElementById("timer");

    quizTimer = setInterval(function() {
      s++;

      if (s > 59) {
        s = 0;
        m++;
        seconds = "0" + s;
      }

      if (m > 59) {
        m = 0;
        h++;
        minutes = "00";
      }

      seconds = s > 9 ? s : "0" + s;
      minutes = m > 9 ? m : "0" + m;
      hours = h > 9 ? h : "0" + h;

      timeSpent = h
        ? hours + ":" + minutes + ":" + seconds
        : minutes + ":" + seconds;
      timer.textContent = timeSpent;
    }, 1000);
  }

  function displayResults() {
    let notification = document.getElementById("notification");
    notification.parentElement.removeChild(notification);
    quizTimer = null;
    isQuizDone = 1;

    let pageURL = window.location.href;
    let shareText = `I just finished this quiz and got ${score} out of ${
      questions.length
    } questions right.`;
    let fbShareURL = `https://www.facebook.com/sharer.php?u=${pageURL}&quote=${shareText}`;
    let twitterShareURL = `https://twitter.com/intent/tweet?text=${shareText} ${pageURL}`;

    quiz.innerHTML = `<section id="results" class="text-center">
    <h2 class="bold">إليك نتيجة الأختبار</h2>
    <p id="percentage">${scorePercentage()}%</p>
    <p>لقد أجبت على  <span class="bold">${score}</span> أسئلة من  <span class="bold">${
      questions.length
    }</span> </p>
    <p style="margin-top: 10px;">الوقت المستغرق : <span class="bold">${timeSpent}</span></p>


    <button type="button" id="start-over-btn" class="btn blue-btn"> حاول مرة أخرى</button>
    </section>`;
  }

  function goToNextQuestion() {
    currentQuestion++;
    questionIndex++;
    questionIsAnswered = 0;

    let notification = document.getElementById("notification");
    notification.parentElement.removeChild(notification);

    let questionNumber = document.getElementById("questionNumber");
    questionNumber.textContent = `${currentQuestion}/${questions.length}`;

    displayQuestion();
  }

  function submitAnswer(e) {
    let selectedAnswer = Number(e.target.value);
    let rightAnswer = questions[questionIndex].correctAnswer;
    let answers = document.getElementsByName("answers");
    let progress = document.getElementById("progress");

    questionIsAnswered = 1;

    progress.style.width = progressPercentage() + "%";

    let notification = document.createElement("div");
    let message = document.createElement("p");
    let label = e.target.nextElementSibling;
    notification.id = "notification";

    if (selectedAnswer === rightAnswer) {
      score++;
      message.textContent = " !إجابة صحيحة";
      label.classList.add("green-bg");
    } else {
      message.textContent = "!إجابة خاطئة";
      label.classList.add("red-bg");

      answers.forEach(answer => {
        if (Number(answer.value) !== rightAnswer) return;

        answer.nextElementSibling.classList.add("green-bg");
      });
    }

    let button = document.createElement("button");
    button.classList.add("blue-btn");

    if (isLastQuestion()) {
      button.id = "show-results-btn";
      button.textContent = "أعرض النتيجة ";
      clearInterval(quizTimer);
      quizTimer = null;
    } else {
      button.id = "next-btn";
      button.textContent = "السؤال التالي";
    }

    notification.appendChild(message);
    notification.appendChild(button);
    quiz.insertAdjacentElement("afterend", notification);

    button.focus();

    answers.forEach(answer => (answer.disabled = "disabled"));

    document.getElementById("score").textContent = score;
  }

  let scorePercentage = () => (score / questions.length * 100).toFixed(0);
  let progressPercentage = () =>
    (currentQuestion / questions.length * 100).toFixed(0);
  let isLastQuestion = () => currentQuestion === questions.length;

  function spaceBarHandler() {
    if (document.querySelector(".quiz-intro")) {
      initQuiz();
    }

    if (questionIsAnswered && quizTimer) {
      goToNextQuestion();
    }

    if (!quizTimer && !isQuizDone) {
      displayResults();
      console.log("last");
    }
  }

  function numericKeyHandler(e) {
    let answers = document.getElementsByName("answers");

    answers.forEach(answer => {
      if (answer.value === e.key) {
        if (questionIsAnswered) return;

        answer.checked = "checked";

        let event = new Event("change");
        answer.dispatchEvent(event);
        submitAnswer(event);

        questionIsAnswered = 1;
      }
    });
  }

  document.addEventListener("click", function(e) {
    if (
      e.target.matches("#start-quiz-btn") ||
      e.target.matches("#start-over-btn")
    )
      initQuiz();
    if (e.target.matches("#next-btn")) goToNextQuestion();
    if (e.target.matches("#show-results-btn")) displayResults();
  });

  document.addEventListener("change", function(e) {
    if (e.target.matches('input[type="radio"]')) submitAnswer(e);
  });

  document.addEventListener("keyup", function(e) {
    if (e.keyCode === 32) spaceBarHandler(); // init quiz / go to next question
    if (e.keyCode >= 48 && e.keyCode <= 57) numericKeyHandler(e); // choose an answer
  });

  document
    .getElementById("shortcuts-info-btn")
    .addEventListener("click", function() {
      let info = document.querySelector(".shortcuts-info");
      info.classList.toggle("display-block");
    });
})();
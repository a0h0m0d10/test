(function() {
  "use strict";

  let questions = [
     { question: " التواء الصخور لأعلى قد ينتج عن ",
      answers: ["القبة العادية"," القبة المقلوبة"," العروق القاطعة"," الجدد الموازية"],
      correctAnswer: 1
    },
     { question: "قد تكون الصخور النارية طية تحت تأثير ",
      answers: ["الباثوليت","الجدد","اللوبوليث"," الطفوح البركانية"],
      correctAnswer: 3
    },
     { question: "يتسبب اللاكوليت في تكوين",
      answers: ["فالق ذو حركة أفقية","فالق تتكرر فيه الطبقات رأسيا","طية أقدم طبقاتها عند المركز ","طية أحدث طبقاتها عند المركز"],
      correctAnswer: 3
    },
      {uestion: "التركيب الناري الذي يمتد حوالی ۲۰۰ کم تحت سطح الأرض يعرف بـ ",
      answers: ["اللاكوليث","اللوبوليث","الباثوليث"," الطفوح البركانية"],
      correctAnswer: 3
    },
     { question: "يؤدى تصلب اللاقا المكونة لجبال فوق سطح الأرض إلى تكون الصخور النارية ",
      answers: ["المتداخلة"," الجوفية","خشنة التبلور"," زجاجية النسيج"],
      correctAnswer: 4
    },
     { question: " الصهارة التي تكون تراكيب تكتونية عند تبلورها تعرف بـ ",
      answers: ["الجدد","العروق","القباب","الباثوليث"],
      correctAnswer: 3
    },
     { question: "تعتبر الجدد الموازية من نواتج ",
      answers: [" تصلب الطفوح","اللاقا","تداخل الصهير","تكسير أعناق البراكين"],
      correctAnswer: 3
    },
     { question: "الماجما (أ) عالية اللزوجة والماجما (ب) قليلة اللزوجة يكون شكلهما بعد التصلد وتأثيرهما على الصخور المحيطة على الترتيب هـو ",
      answers: ["قبة عادية مع طية مقعرة وقبة مقلوبة مع طية محدبة"," قبة مقلوبة مع طية مقعرة وقبة عادية مع طية محدبة","قبة عادية مع طية محدبة وقبة مقلوبة مع طية مقعرة"," قبة مقلوبة مع طية محدبة وقبة عادية مع طية مقعرة"],
      correctAnswer: 3
    },
     { question: "الترتيب الصحيح الصخور الناتجة عن تبلر الجدد تدريجيا مكونة صخور نسيجها بورفيري هو ",
      answers: ["دولیرایت - بازلت ــ جابرو","دولیرایت ــ میكر وجرانيت ـ میکرودایورایت"," دولیرایت ــ میکرودايورایت - ميكروجرانيت","دولبرايت ــــــ بازلت ـــــ جراثیت"],
      correctAnswer: 3
    },
     { question: "عند تصلد اللافا على سطح الأرض تأخذ أشكال ",
      answers: ["فواصل وطيات","لاکولیث ولوبوليث","جدد وعروق","حبال ووسائد"],
      correctAnswer: 4
    },
     { question: "الحطام الصخري المدبب الذي ينتج من عنق البراكين يسمى ",
      answers: [" البريشيا البركانية"," اللافا المتصلدة"," المقذوفات البركانية","الرماد البركاني"],
      correctAnswer: 1
    },
     { question: "يتصاعد الرماد البركاني من فوهات البراكين ويتطاير منتشرا في الجو حتى يسقط مكونا",
      answers: ["جزر بركانية"," تربة خصبة"," جبال بركانية","صخور متحولة"],
      correctAnswer: 2
    },
     { question: "نسيج صخور المخروط البركاني قد يكون",
      answers: ["بورفیری","زجاجي","خشن","متوسط"],
      correctAnswer: 2
    },
     { question: " الرماد البركاني من أشكال الصخور النارية ",
      answers: [" تحت السطحية","الجوفية","السطحية"," المتداخلة"],
      correctAnswer: 3
    },
     { question: "ثورة بركان بحرى لفترة طويلة ثم يخمد يؤدي لتكوين",
      answers: ["بحيرة بركانية"," جزيرة بركانية","جدد","لاکولیث"],
      correctAnswer: 2
    },
     { question: "تظهر بعض المناطق الأرضية محاطة بمياه البحار نتيجة",
      answers: ["ترسیب مياه البحار لحمولتها","ثوران البركان أسفل البحار","مخلفات السفن في البحار","الصرف الصناعي في البحار"],
      correctAnswer: 2
    },
     { question: "أي العبارات التالية تعد السبب الأرجح لحدوث الثورات البركانية ؟",
      answers: ["التغيرات المناخية"," حفر آبار النفط","ضغط الغازات في الأسينوسفير"," انصهار اللب الخارجي"],
      correctAnswer: 3
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
    wrong,
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
    wrong = 0;
    timeSpent = "00:00";

    quiz.innerHTML = `
    <div id="stats">
    <p> Q : <span id="questionNumber">${currentQuestion}/${
      questions.length
    }</span></p>
    <p> correct : <span class="score" id="score">${score}</span></p>
    <p> Wrong : <span class="wrong" id="wrong">${wrong}</span></p>

    <p> Time <span id="timer">00:00</span></p>
    </div>
    <div id="progress-container"><span id="progress"></span></div>
    <section id="answers"></section>
    
    `;

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
      wrong++;
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
    document.getElementById("wrong").textContent = wrong;

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
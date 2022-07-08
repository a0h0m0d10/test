(function() {
  "use strict";

  let questions = [
    {
      question: "أكبر فترات السلم الجيولوجي زمنياً",
      answers: ["الحقب ", " الزمن", " الدهر", " العصر"],
      correctAnswer: 3
    },
    {
      question: "أقصر فترات السام الچيولوچي عمراً",
      answers: [" الحقب", "الزمن ", "العصر ", "الدهر "],
      correctAnswer: 2
    },
    {
      question: "أربعة بليون سنة تمثل تقريباً عمر",
      answers: [" الأرض", " الكريبتوزي", "الفانيروزي", "الهاديان "],
      correctAnswer: 2
    },
    {
      question: "تمكن العلماء من تحديد تاريخ نشأة الأرض عن طريق تحلل العناصر",
      answers: [" الفلزية", "اللافلزية ", "المشعة ", "الخاملة "],
      correctAnswer: 3
    },
    {
      question: "الحفرية التي تتوقع تواجدها في طبقة من الحجر الجيري ويرجع ترسيبها للعصر الترياسي في حفرية",
      answers: ["النيموليت ", "الأمونيتات ", " السمكة العظمية", " الطائر البدائى"],
      correctAnswer: 2
    },
    {
      question: "النيموليت من الحفريات المميزة لحقب",
      answers: ["الحياة القديمة", "الحياة المتوسطة", "الحياة الحديثة", "البروتيرزوي "],
      correctAnswer: 3
    },
    {
      question: "الكائنات التي بدأت الظهور فى حقب الأركى هي الكائنات",
      answers: [" متعددة الخلايا", " الأولية", "الهيكلية", " الزاحفة"],
      correctAnswer: 2
    },
    {
      question: "سبب عدم وجود السجل الچيولوچي كاملاً فى أى منطقة",
      answers: [" وجود طيات محدبة", " وجود أسطح عدم التوافق", "حدوث حركات بانية للجبال", " انقراض الزواحف العملاقة"],
      correctAnswer: 2
    },
    {
      question: "العصر الذى لم تتواجد فيه زواحف مما يلي هو العصر",
      answers: [" الديفونى", " البرمى", "الترياسى ", " الجوراسى"],
      correctAnswer: 1
    },
    {
      question: "يبلغ عمر الصخور التي تحتوى على أول كائنات هيكلية حوالى",
      answers: [" ٤٠٠٠ مليون سنة", " ٥٤٢ مليون سنة", " ٢٠٠٠ مليون سنة", "٨٧٠ مليون سنة "],
      correctAnswer: 2
    },
    {
      question: "وجود حفرية لأقدم طائر على الأرض فى صخر يدل على أن هذا الصخر تكون فى العصر",
      answers: ["الكمبرى ", "السيلورى ", "الترياسى ", "الجوراسى "],
      correctAnswer: 4
    },
    {
      question: "الحقب التى يتميز بسيادة وتنوع اللافقاريات هو حقب",
      answers: [" الحياة القديمة", " الهاديان", " الحياة المتوسطة", "الحياة الحديثة "],
      correctAnswer: 1
    },
    {
      question: "مجموعة الحفريات التي لم تظهر لأول مرة فى حقب الحياة المتوسطة هي",
      answers: [" الأمونيتات والطيور البدائية والنباتات الزهرية", "الزواحف المائية والثديات صغيرة الحجم والسمكة العظمية", "الزواحف الهوائية والزواحف العملاقة والثدييات المشيمية", "الطحالب الخضراء وثلاثية الفصوص والنيموليت "],
      correctAnswer: 4
    },
    
    

  ];

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
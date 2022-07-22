(function() {
  "use strict";

  let questions = [
    {
      question: "يحدث تكسير الحصى في المناطق الصحراوية نتيجة",
      answers: [" التجوية الكيميائية", " التمدد الناتج عن تخفيف الحمل", "التمدد الحراري      ", "النشاط الحياتي للحيوانات      "],
      correctAnswer: 4
    },
    {
      question: "    أي مما يلى لا يتواجد في فتات من صخر الكوماتيت في حجم الحصى ؟       ",
      answers: ["الأرثوكليز ", " الأوليفين", "البيروكسين ", " البلاجيوكليز الكلسي"],
      correctAnswer: 4
    },
    {
      question: "      عند تفتيت قطعة من الجرانيت إلى قطع في حجم الحصى، فإن كل قطعة تتكون من      ",
      answers: ["معدن واحد      ", " معدنين", " 3 معادن      ", "4 معادن      "],
      correctAnswer: 4
    },
    {
      question: "    عند تفتيت قطعة من صخر الجابرو إلى حبيبات متوسط قطرها 3 مم، فإنها لا تحتوي على معدن       ",
      answers: [" الكوارتز", " الفلسيار البلاجيوكليزي الكلسي      ", " الأوليفين      ", " البيروكسين"],
      correctAnswer: 4
    },
    {
      question: "      عند تفتيت قطعة من صخر الجرانيت إلى حبيبات متوسط قطرها 1 مم، فإنها لا تحتوى على معدن       ",
      answers: [" الكوارتز", "الأرثوكليز ", " الأوليفين", " المسكوفيت"],
      correctAnswer: 4
    },
    {
      question: "    تراكم الفتات الصخري بجوار جبال الألب تكون نتيجة      ",
      answers: [" الاختلاف المتكرر في درجات الحرارة      ", " تكرار تجمد وذوبان المياه في الشقوق الصخرية      ", "اختلاف الأحمال على الصخور      ", " النشاط الحياتي للنبات والحيوان"],
      correctAnswer: 4
    },
    {
      question: "    عند صعود الجرانيت لسطح الأرض نتيجة عوامل تعرية يحدث له      ",
      answers: ["تحول ", "تقشر ", "تميؤ ", " أكسدة"],
      correctAnswer: 4
    },
    {
      question: "   يفضل عدم استخدام الصخور الجيرية في إقامة المباني في المناطق الصناعية الساحلية منعا لحدوث عملية      ",
      answers: [" تميؤ", " أكسدة", " تحلل وإذابة", " تكسير الصخور"],
      correctAnswer: 4
    },
    {
      question: "    أي مما يلي يعتبر مثال للتجوية الكيميائية ؟      ",
      answers: ["تساقط فتات من الصخور في حجم الرمال من الكوارتز والميكا والفلسبار      ", "تساقط فتات من الصخور في حجم الحصى من صخر جبلي      ", "تجمد المياه الظاهرة ثم تمدد المعادن وتفككها      ", "سقوط أمطار حمضية على الحجر الجيري      "],
      correctAnswer: 4
    },
    {
      question: "    صخر الكوماتيت أكثر عرضة للتجوية الكيميائية عن طريق عملية       ",
      answers: [" التميؤ", " الأكسدة", "الكرينة ", " التحل"],
      correctAnswer: 4
    },
    {
      question: "    الصخور الأكثر تأثرا بالأكسدة هي       ",
      answers: ["القاعدية ", " الحامضية", "المتوسطة ", "الغنية بالسيليكا      "],
      correctAnswer: 4
    },
    {
      question: "المعادن التي تتحلل بالتجوية الكيميائية وتتحول إلى معادن أقل صلابة هي      ",
      answers: ["الكوارتز والميكا       ", "الأرثوكليز والكوارتز      ", " الأرثوكليز والميكا      ", " البلاجيوكليز والكوارتز      "],
      correctAnswer: 4
    },
    {
      question: "إحدى المناطق ينتشر بها فئات من معادن الكاولينايت والكوارتز مما يدل على أن الصخر الأصلي هو الجرانيت وحدث له",
      answers: ["تجوية كيميائية      ", "تجوية ميكانيكية      ", " تقشر", "تحول "],
      correctAnswer: 4
    },
    {
      question: "      إحدى المناطق ينتشر بها فتات من معادن الفلسبار البوتاسي والكوارتز مما يدل على أن الصخر الأصلي هو الجرانيت وحدث له    ",
      answers: ["تجوية كيميائية      ", " تجوية ميكانيكية      ", " إحلال", " تحول"],
      correctAnswer: 4
    },
    {
      question: "أي الخواص التالية تظل ثابتة لكتلة ضخمة من الحجر الجيري تعرضت لعملية تحت شديدة ؟      ",
      answers: ["الشكل ", "الكتلة", "الحجم  ", " التركيب الكيميائي"],
      correctAnswer: 4
    },
    {
      question: "ناتج التجوية الكيميائية لجبال الأنديز قد يحتوى على      ",
      answers: ["أوليفين ", "کاولینایت ", "دولومیت ", "کالسیت "],
      correctAnswer: 4
    },
    {
      question: "أي عوامل التجوية تكون أكثر انتشارا في بيئة حارة وجافة ؟      ",
      answers: ["التمدد الحراري      ", "الكربنة ", " التمدد نتيجة تخفيف الحمل      ", "التميؤ "],
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
(function() {
  "use strict";

  let questions = [
    {
      question: " العامل الأساسي لأستقامة ساق النعناع بعد عملية الري هو وجود",
      answers: ["الفجوات العصراية", "الأنوية", "الجدر الخلوية", "الميتوكوندريا"],
      correctAnswer: 1
    },
    {
      question: "يرجع أنتفاخ خلايا النبات عند الري بالماء إلى",
      answers: ["دخول الماء بالخاصية الاسموزية", "خروج السكر منها بخاصية الانتشار", "دخول الماء إليها بخاصية الإنتشار", " خروج السكر منها بالخاصية الاسموزية"],
      correctAnswer: 1
    }, {
      question: " تؤثر جدر خلايا النبات دليل على",
      answers: ["اكتساب النبات الدعامة الفسيولوجية", "فقد النبات الدعامة الفسيولوجية", "اكتساب النبات الدعامة التركيبية", " فقد النبات الدعامة التركيبية "],
      correctAnswer: 2
    }, {
      question: " تم نقل أحد أنواع الطحالب من بيئة مياة عذبة إلى بيئة مياة مالحة فما التغيير الذي يحدث في خلايا الطحلب؟",
      answers: ["تنتفخ خلايا الطحلب", "يتمدد الغشاء البلازمي", "يتحرك الغشاء البلازمي للداخل", "لا يحدث اي تغيير"],
      correctAnswer: 3
    }, {
      question: "أي الخالية التالية تكتسب دعامة فسيولوجية عند ري النبات",
      answers: ["الانابيب الغربالية", "أوعية الخشب", "الخلايا الحجرية", " الخلايا البارانشيمية"],
      correctAnswer: 4
    }, {
      question: "ينشأ ضغط الامتلاء في الخلية النباتية بالتأثير الأساسي ل ",
      answers: ["الجدار الخلوي", "الغشاء البلازمي", "الفجوة العصارية", "السيتوبلازم "],
      correctAnswer: 3
    }, {
      question: " أي مما يلي تتأثر به الدعامة الفسيولوجية بشكل مباشر",
      answers: ["عملية النتح فقط", "عملية الامتصاص فقط", "عمليتي النتح والامتصاص ", "عمليتي النقل النشط والنتح "],
      correctAnswer: 3
    }, {
      question: "في أحد التجارب المعملية تم إستخدام ثلاث قطع متساوية الأبعاد من الجزر ، حيث تم غلي القطعة الاولى في الماء ، ووضعت القطعة الثانية في ماء مقطر ، أما القطعة الثالثة فوضعت في محلول سكري مركز أي من هذه القطع فقدت الدعامة الفسيولوجية",
      answers: ["الاولى فقط", "الثالثة فقط", "الأولى والثانية", "الثانية والثالث "],
      correctAnswer: 2
    }, {
      question: " هل تلعب البلاستديدات الخضراء دورا في إكساب الطحلب دعامة فسيولوجية",
      answers: ["نعم لأن البلاستديدات الخضراء ينتج عنها سكريات بسيطة", "نعم لأن البلاستديدات الخضراء تمتص الماء اللازم لعملية البناء الضوئي", "لا لأن البلاستديدات الخضراء لا تغير في اسموزية الخلايا", " لا لأن البلاستديدات الخضراء لا تؤثر في حجم الفجوات العصراية"],
      correctAnswer: 1
    }, {
      question: "اي مما يلي يصحاب اكتساب النباتية دعامة فسيولوجية؟",
      answers: ["صغر حجم الفجوة العصارية", "نقص كمية المحلول داخل الفجوة العصارية", "نقص تركيز المحلول داخل الفجوة العصارية", " زيادة تركيز المحلول داخل الفجوة العصارية"],
      correctAnswer: 3
    }, {
      question: " ما مدى صحة العبارتين  التاليتين تحتوي معظم الخلايا النباتية الحية الناضجة على فجوات عصارية كبيرة الحجم هذه الفجوات تساعد الخلايا على امتصاص الماء بالانتشار",
      answers: ["العبارتان صحيحتان وبينهما علاقة", "العبارتان صحيحتان وليس بينهم علاقة", "العبارة الأولى صحيحة والعبارة الثانية خطأ", " العبارة الأولى خطأ والعبارة الثانية صحيحة"],
      correctAnswer: 3
    },
     {
      question: " ما سبب عدم انتقال الماء الى داخل الخلايا الأسكلرنشيمية بالخاصية الاسموزية",
      answers: ["وجود الكيوتين", "غياب البرتوبلازم", "وجود السيليلوز", "وجود اللجنين"],
      correctAnswer: 2
    },
    {
      question: "اذا حدث ترسيب لمادة الكيوتين على بشرة المجموع الجذري لنبات ما ، ماذا تتوقع أن يحدث لهذا النبات",
      answers: ["تفقد خلاياه الدعامة التركيبية", "تكتسب خلاياه الدعامة الفسيولوجية", "لا يمتص النبات الماء فتفقد خلاياه الدعامة الفسيولوجية", "يمتص النبات الماء فتكتسب خلاياه دعامة فسيولوجية وتركيبية"],
      correctAnswer: 3
    },
    {
      question: " ما المادة التي تغطي بشرة سيقان وأوراق نبات الفول ؟",
      answers: ["السيوبرين", "اللجنين", "الكيوتين", " السليلوز"],
      correctAnswer: 3
    },
    {
      question: "تزداد قوة جدر الخلايا النباتية نتيجة ترسيب",
      answers: ["الكيوتين فقط", "السليلوز فقط", "السيوبرين فقط", "السليلوز واللجنين "],
      correctAnswer: 4
    },
    {
      question: " أي من البلوميرات التالية يتواجد في النسيج الوعائي للنبات ويوفر له المزيد من الدعامة التركيبية",
      answers: ["اللجنين", "الكيوتين", "السليلوز", " الكيراتين"],
      correctAnswer: 1
    },
    {
      question: " أي البدائل التالية لا يتفق مع باقية البدائل بالنسبة لحدوث الدعامة في النبات ؟",
      answers: ["السليلوز", "الكيتين", "اللجنين", " السيوبرين"],
      correctAnswer: 2
    },{
      question: "في أي الحالات التالية تكون فيها الدعامة الفسيولوجية وتركيبية معا",
      answers: ["ترسيب اللجنين على جدر الخلايا الحجرية لثمرة الكمثري", "أنتفاخ بذور نبات الفول الجافة عند وضعها في الماء", "استقامة نبات النعناع بعد ريه بالماء", " ترسيب الكيوتين على جدر خلايا بشرة التين الشوكي"],
      correctAnswer: 4
    },
    {
      question: "أي المواد التالية وجودها في جدر خلايا النبات يزيد من مرونتها وصلابتها ولكن لا يمنع نفاذ الماء",
      answers: ["الكيوتين", "السيوبرين", "اللجنين", "السليلوز "],
      correctAnswer: 4
    },
    {
      question: "أي مما يلي يعمل على الحفاظ على الأنسجة الداخلية لنبات الصنوبر ؟",
      answers: ["السليلوز واللجنين", "الكيوتين والسليلوز", "الكيوتين والسيوبرين", " اللجنين والسيوبرين"],
      correctAnswer: 3
    },
    {
      question: "تحافظ ثمار البرقوق على محتواها من الماء لأحتواء الطبقة الخارجية لها على مادة",
      answers: ["السيوبرين", "السليلوز", "الكيوتين", "اللجنين "],
      correctAnswer: 3
    },
    {
      question: " أي مما يلي يمثل الدور الأساسي للكيوتين والسيوبرين في النبات ؟",
      answers: ["توفير الدعامة للأنسجة الوعائية", "الحفاظ على شكل الجدران الخلوية", "العمل كحواجز غير منفذة للماء", " تحديد المواد التي تدخل الخلايا النباتية أو تخرج منها"],
      correctAnswer: 3
    },
    {
      question: " أكبر الفقرات القطنية هي الفقرة رقم",
      answers: ["21", "22", "23", "24 "],
      correctAnswer: 4
    },
    {
      question: " حجم الفقرة رقم ( 20 ) بالنسبة لحجم الفقرة رقم (19) من فقرات العمود الفقري للأنسان يكون",
      answers: ["أصغر منها", "مساوٍ لها", "أكبر منها قليلاً", " أكبرمنها كثيراً"],
      correctAnswer: 3
    }
    ,
    {
      question: " الفقرة المنصفة للعمود الفقري توجد في المنطقة",
      answers: ["العنقية", "الظهرية", "القطنية", " العجزية"],
      correctAnswer: 2
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
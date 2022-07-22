(function() {
  "use strict";

  let questions = [
    {
      question: "    كل مما يأتي من مكونات أنبوية النفرون ماعدا  ",
      answers: ["الأنبوية الملتفة القريبة", " الأنبوية الملتفة البعيدة", "الجمع", " ثنية هنل"],
      correctAnswer: 3
    },
    {
      question: "     تقع محفظة بومان والأنبوية الملتفة البعيدة في منطقة القشرة بالكلية، ويحدث في كل منهما عملية الامتصاص الاختياري",
      answers: ["العبارتان صحیحتان", "العبارتان خطأ", "العبارة الأولى صحيحة والعبارة الثانية خطأ", " العبارة الأولى خطأ والعبارة الثانية صحيحة"],
      correctAnswer: 3
    },
    {
      question: "تتشابه محفظة بومان مع ثنية هنل للشخص السليم في",
      answers: ["العمليات التي تتم في كل منهما", "مكان وجود كل منهما بالكلية", "نسبة الجلوكوز في كل منهما", " وجود اليوريا في كل منهما"],
      correctAnswer: 4
    },
    {
      question: "     إعادة امتصاص كل جزيئات الجلوكوز بواسطة أنبوبة النفرون دلالة على إتمام هذه العملية بخاصية",
      answers: ["الاسموزية", "النقل النشط", "الانتشار", "النفاذية الاختيارية"],
      correctAnswer: 2
    },
    {
      question: "أي مما يلى لا يحدث عند مرور الرشيح الكلوى خلال أنيبيبات النفرون ؟",
      answers: ["استعادة الجسم للجلوكوز مرة أخرى", "استعادة الجسم للأملاح اللازمة له", "استعادة الجسم للماء اللازم لعملياته الحيوية", " استعادة الجسم لبعض الأحماض الأمينية وتحويل الفائض منها إلى يوريا"],
      correctAnswer: 4
    },
    {
      question: "أي مما يلى لا تتخلص منه كلية الإنسان ؟.",
      answers: ["البروتين الزائد في الدم", "الأملاح الزائدة في الدم", "الماء الزائد في الدم", " اليوريا الموجودة بالدم"],
      correctAnswer: 1
    },
    {
      question: "عندما تزيد نسبة الجلوكوز في الشريان الكلوي عنها في الوريد الكلوى بكثير، فإن هذا مؤشر بحدوث خلل في العمليات التي تتم في",
      answers: ["محفظة بومان", "أنبوبة النفرون", "القناة الجامعة", " الجمع"],
      correctAnswer: 2
    },
    {
      question: "     كمية الدم التي يضخها القلب وتمر خلال الكليتين في الدقيقة الواحدة تساوى.....لتر تقريبا",
      answers: ["6", "5", "2.4", " 1.2"],
      correctAnswer: 3
    },
    {
      question: "يتم تنقية دم مريض الفشل الكلوي خلال عملية الغسيل الكلوى اعتمادا على ظاهرة",
      answers: ["الانتشار", "الأسموزية", "النفاذية الاختيارية", "النقل النشط"],
      correctAnswer: 1
    },
    {
      question: "أي المواد التالية من المتوقع وجودها بنسبة أعلى عن الطبيعي في عينة دم لمريض يعاني من مرض الفشل الكلوى ؟",
      answers: ["جلوكوز", "بروتينات", "يوريا", "أملاح "],
      correctAnswer: 3
    },
    {
      question: "أي الوجبات الغذائية التالية يؤدى تناولها إلى إنتاج المزيد من اليوريا ؟",
      answers: ["وجبة غنية بالكربوهيدرات وفقيرة في الدهون", "وجبة فقيرة في الكربوهيدرات وغنية بالبروتينات", "وجبة غنية بالدهون وفقيرة بالألياف", " وجبة فقيرة في الدهون وغنية بالألياف"],
      correctAnswer: 2
    },
    {
      question: "أي العبارات التالية لا تنطبق على مادة اليوريا ؟",
      answers: ["تطردها الكلى من الجسم في صورة بولينا", "يكونها الكبد من التمثيل الغذائي للبروتينات", "تخرج من الجسم دون النفاذ من الأغشية البلازمية للخلايا", " يؤدى الفشل الكلوى إلى تراكمها في الجسم"],
      correctAnswer: 3
    },
    {
      question: "تتميز الكلي بأنها",
      answers: ["طويلة في الأرنب", "أكثر اكتنازا في الضفدعة", "تمتد على جانبي العمود الفقاري في السلمندر", " تقع في الجزء السفلي للتجويف البطني في الإنسان"],
      correctAnswer: 3
    },
    {
      question: "يمتد بين قشرة ونخاع الكلية في الإنسان",
      answers: ["الأنابيب الملتفة القريبة", "الأنابيب الملتفة البعيدة", "ثنية هنل", "القنوات الجامعة"],
      correctAnswer: 4
    },
    {
      question: "أي العبارات الآتية تتعارض مع الوظيفة الأساسية للكلية في الإنسان ؟",
      answers: ["التخلص من الماء الزائد", "ثبات نسبة الماء في خلايا الجسم", "زيادة الضغط الأسموزي بالجسم", " التخلص من الأملاح الزائدة"],
      correctAnswer: 3
    },
    {
      question: "في الحالات الطبيعيـة تـكـون نسبـة البـروتـيـنـات فـي الشـريـان الـكـلـوى بالنسبـة لـه في الوريد الكـلـوى",
      answers: ["أعلى", "أقل", "متساوية", "متغيرة "],
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
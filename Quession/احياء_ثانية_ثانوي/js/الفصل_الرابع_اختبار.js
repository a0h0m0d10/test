(function() {
  "use strict";

  let questions = [
    {
      question: "أي المواد الإخراجية التالية يتخلص منها الجسم بواسطة الكليتين، الرئتين، الجلد ؟      ",
      answers: [" التوابل ", " الماء  ", "اليوريا", " الأملاح "],
      correctAnswer: 2
    },
    {
      question: "تتشابه وسائل الإخراج في النباتات العشبية مع الأشجار المعمرة في جميع ما يلي ماعدا      ",
      answers: ["النتح الثغرى       ", " النتح الكيوتيني      ", "النتح العديسي       ", "الإدماع  "],
      correctAnswer: 3
    },
    {
      question: "أثناء اشتراك طالب في مسابقة العدو لمسافة 800 متر لاحظ ارتفاع درجة حرارة جلده، قد يرجع ذلك إلى",
      answers: [" زيادة العرق المفرز من الجلد       ", " فتح مسام العرق الموجودة بسطح الجلد      ", "ضيق الشعيرات الدموية الموجودة بالجلد       ", " اتساع الشعيرات الدموية الموجودة بالجلد "],
      correctAnswer: 4
    },
    {
      question: "عند فحص عينة بول لشخص ما بعد تناوله في الليلة السابقة لأخذ العينة وجبة غذائية تحتوى على كميات كبيرة من اللحوم، فمن المتوقع أن تحتوى العينة على نسبة أعلى من      ",
      answers: ["البروتين ", " الأحماض الأمينية       ", "اليوريا", " الأملاح "],
      correctAnswer: 3
    },
    {
      question: "جميع ما يلى ينتج عن وجود خلل في عمل محفظة بومان ماعدا       ",
      answers: [" إخراج بول أحمر اللون      ", "ظهور بروتين في البول      ", "ظهور کریات دم بيضاء في البول ", " غياب البروتين من البول "],
      correctAnswer: 4
    },
    {
      question: "شخص يحتوى جسمه على 5 لتر دم وتقوم كليتاه بترشيح ١,٢٥ لتر في الدقيقة  ، يكون عدد مرات مرور الحجم الكلى للدم خلال الكليتين في ساعتين      ",
      answers: [" 75مرة ", " 60 مرة      ", "30 مرة      ", "15 مرة  "],
      correctAnswer: 3
    },
    {
      question: "بمقارنة كمية متساوية من البول والعرق نجد دائما      ",
      answers: [" تساوى نسبة الأملاح في كل منهما      ", "  نسبة الأملاح أعلى في العرق      ", "نسبة الفضلات النيتروجينية أعلى في البول      ", "نسبة الفضلات النيتروجينية أعلى في العرق  "],
      correctAnswer: 3
    },
    {
      question: "يختلف العرق في الإنسان عن ماء النتح في النبات بأنه      ",
      answers: [" يحتوى على أملاح معدنية       ", "  يخفض من درجة حرارة الجسم      ", "يخرج عبر الأغشية البلازمية       ", " يزداد خروجه مع ارتفاع درجة حرارة الوسط المحيط      "],
      correctAnswer: 1
    },
    {
      question: "إذا علمت أن الوظيفة الرئيسية لثنية هنل هي إعادة امتصاص الماء مرة أخرى مـن أنبوبـة النفرون، في أي الكائنات الحيـة التالية تتوقع غياب ثنيـة هنل من تركيب النفرون ؟",
      answers: ["  الفأر الصحراوي      ", "  الطيور الجارحة السحلية      ", "الأسماك", " السحلية "],
      correctAnswer: 4
    },
    {
      question: "يختلف الشخص البدين عن الشخص النحيف في زيادة سمك      ",
      answers: [" طبقة الجلد التي تمتلئ بالكيراتين      ", " طبقة الجلد التي تحتوى على حبيبات الميلانين      ", "الطبقة التي تلتصق بعضلات الجسم      ", " طبقة الأدمة "],
      correctAnswer: 3
    },
    {
      question: "جميع ما يلى من فوائد عملية الإخراج في الإنسان ماعدا       ",
      answers: [" التخلص من غاز النيتروجين الداخل مع هواء الشهيق      ", " الحفاظ على تركيز الماء والأملاح داخل الجسم      ", "الحفاظ على ثبات تركيب الدم      ", " التخلص من فضلات عملية الأيض      "],
      correctAnswer: 1
    },
    {
      question: "إذا افترضنا أن كل قناة جامعة يتصل بها 10 نفرونات، فإن عدد القنوات الجامعة في الكليتين يكون حوالي      ",
      answers: [" 100 ألف      ", "  200 ألف      ", "500 ألف      ", " مليون "],
      correctAnswer: 2
    },
    {
      question: "تتأثر عمليتا النتح الثغرى والإدماع في النبات بتغير فصول السنة، لكنهما تختلفان في كمية وطبيعة الماء المفقود      ",
      answers: [" العبارتان صحیحتان      ", " العبارتان خطأ      ", "العبارة الأولى صحيحة والعبارة الثانية خطأ      ", " العبارة الأولى خطأ والعبارة الثانية صحيحة      "],
      correctAnswer: 1
    },
    {
      question: "الوعاء الدموي الذي يحتوى على أقل نسبة من اليوريا هو       ",
      answers: ["الوريد الكبدى      ", " الوريد البابي الكبدى      ", "الشريان الكلوى      ", " الوريد الكلوي "],
      correctAnswer: 2
    }
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
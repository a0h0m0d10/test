(function() {
  "use strict";

  let questions = [
    {
      question: "تؤثر جاذبية القمر على مياه البحار مصيبة       ",
      answers: ["تكوين الجروف", "تكوين العينات المدرجة", "تكوين المغارات الساحلية", "حدوث الأمواج"],
      correctAnswer: 4
    },
    {
      question: "منسوب المياه وقت المد تستدل عليه من",
      answers: [" قوة الأمواج", "المد والجزر", "العينات المدرجة", "قوة التيارات البحرية"],
      correctAnswer: 4
    },
    {
      question: "المنطقة التي تتميز بوجود البقايا السليسية مما يلي هي",
      answers: ["اللسان ", "منطقة المنحدر القاري", "المنطقة الشاطئية      ", "منطقة الرف القاري"],
      correctAnswer: 4
    },
    {
      question: "تسمى الرواسب الرملية المتكونة عند احتكاك تيارين مائيين يسيران في اتجاهين متضادين بـ",
      answers: ["الخلجان ", "الألسنة", "المغارات الساحلية", "الجروف"],
      correctAnswer: 4
    },
    {
      question: "الحواجز البحرية الضيقة المتكونة من الرمال والموجودة في المحيط ترسبت بفعل",
      answers: ["حركة الرياح", "مجری نهري", "المد والجزر", "التيارات البحرية"],
      correctAnswer: 4
    },
    {
      question: "المنطقة التي لا يتواجد بها رواسب رياح أو أنهار في منطقة",
      answers: [" الأعماق", "المنحدر القاري", "الرف القاري", "الشاطئ"],
      correctAnswer: 4
    },
    {
      question: "مجری ماني يصب في بحيرة، الرواسب التي تترسب أولا عند حواف البحيرة هي رواسب",
      answers: [" الصلصال", "الغرين", "الرمال", "الحصى"],
      correctAnswer: 4
    },
    {
      question: "أي من العوامل التالية لا يسبب تيارات بحرية ؟",
      answers: [" اختلاف كثافة الماء", "اختلاف درجة الحرارة", "اختلاف نسبة الاملاح", "اختلاف الضغط الواقع على الماء"],
      correctAnswer: 4
    },
    {
      question: "الحواجز البحرية قد تكون مرحلة متطورة لظاهرة",
      answers: [" المياندرز", "الألسنة", "البحيرات القوسية", "المغارات الساحلية"],
      correctAnswer: 4
    },
    {
      question: "تیار نهرى يصب حمولته من الرواسب في البحر، فإن الرواسب الأكثر ترسينا في المياه الأعمق كلما بعدنا عن الشاطئ هي رواسب",
      answers: ["الصلصال والغرين", "الغرين والحصى", "الرمال والجلاميد", "الحصى والرمال"],
      correctAnswer: 4
    },
    {
      question: "تتكون المغارات الساحلية نتيجة تأكل الطبقات الأقل صلابة من الصخور بسبب العمل الهدمي لـ         ",
      answers: [" الانهار", "المياه الأرضية", "البحار", "الرياح"],
      correctAnswer: 4
    },
    {
      question: "حفريات الشعاب المرجانية توجد في طبقات الحجر الجيري، فإن البيئة التي تزدهر فيها الشعاب المرجانية      ",
      answers: ["المياه البحرية الضحلة", "المنطقة الشاطئية", "الغابات الاستوائية", "مناطق الأعشاب"],
      correctAnswer: 4
    },
    {
      question: "عند نمو الشعاب المرجانية أمام الخليج تنشأ",
      answers: ["السنة ", "حواجز", "بحيرات ملحية", "دلتا"],
      correctAnswer: 4
    },
    {
      question: "الرواسب الموجودة في بحيرة إدكو تكونت نتيجة       ",
      answers: ["تبخر المياه من بحيرة بركانية", "رواسب نهرية", "تبخر المياه من بحيرات ملحية", "تبخر المياه من بحيرات قوسية      "],
      correctAnswer: 4
    },
    {
      question: "وصول المياه من المنحدرات إلى أماكن فوهات البراكين الخامدة يكون",
      answers: ["مخروط السيل", "دلتا جافة", "بحيرات عذبة", "أخوار عميقة"],
      correctAnswer: 4
    },
    {
      question: "أي مما يلي لا يسبب اندثار البحيرات ؟",
      answers: [" كثرة الترسيب", "ارتفاع درجة الحرارة", "انخفاض درجة الحرارة", "تسرب الماء في مسام الصخور      "],
      correctAnswer: 4
    },
    {
      question: "التربة التي يوجد بها الكونجلوميرات هي التربة",
      answers: [" الوضعية", "المنقولة", "متدرجة النسيج", "السطحية"],
      correctAnswer: 4
    },
    {
      question: "تكونت بحيرة إدكو نتيجة",
      answers: [" عمل هدمي في منطقة الرف القاري", "عمل ترسیبي في المنطقة الشاطئية", "عمل هدمي في المنطقة الشاطئية      ", "عمل ترسيبي في منطقة الرف القاري"],
      correctAnswer: 4
    },
    {
      question: "من أهم رواسب بحيرة إدكو بعد حدوث البخر",
      answers: ["كلوريد الصوديوم وكبريتات الكالسيوم المائية ", "كلوريد الصوديوم وكبريتات الكالسيوم اللامائية", "كربونات الصوديوم وكربونات الماغنسيوم", "كلوريد الكالسيوم وكربونات الماغنسيوم"],
      correctAnswer: 4
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
(function() {
  "use strict";

  let questions = [

    {
      question: "تبعا لنظرية الألواح التكتونية، فإن البحر الأحمر يقع حاليا",
      answers: ["عند حافة ألواح تباعدية      ", "فوق براكين ثائرة      ", "عند حافة ألواح تقاربية      ", "قرب مركز لوح تکتونی کبیر      "],
      correctAnswer: 4
    },
    {
      question: "الحركة التكتونية التي تتواجد بين اللوح الأمريكي واللوح الأفريقي هي الحركة      ",
      answers: ["التطاحنية", "التقاربية", "التباعدية", "الاندساسية"],
      correctAnswer: 4
    },
    {
      question: "يظهر عادة نتيجة تباعد الألواح كل من",
      answers: ["حيد وسط المحيط وحوض محیطی", "الوديان المتسعة والدلتا      ", "الأغوار البحرية ومناطق الاندساس      ", "الأغوار البحرية وقوس الجزر البركانية      "],
      correctAnswer: 4
    },
    {
      question: "بناء على نظرية الألواح التكتونية، أمكن استنتاج أن قارة أمريكا الشمالية تحركت خلال آخر ٢٥٠ مليون سنة في اتجاه      ",
      answers: ["الشمال الغربي", "الجنوب الغربي      ", "الجنوب الشرقي      ", "الشمال الشرقي      "],
      correctAnswer: 4
    },
    {
      question: "بناء على نظرية الألواح التكتونية، فإن الشاطئ الغربي لأمريكا الشمالية يقترب من الشاطئ      ",
      answers: ["الغربي لأوروبا", "الشرقي لأوروبا      ", "الغربي لآسيا      ", "الشرقي لأسي"],
      correctAnswer: 4
    },
    {
      question: "الكتل الصخرية المكونة للحيد في قاع البحر الأحمر هي صخور       ",
      answers: ["حامضية من الفلسبار الأرثوكليزي والكوارتز والمسكوفيت      ", "متوسطة من الفلسبار البلاجيوكليزي والأمفيبول والكوارتز      ", "قاعدية من الفلسبار البلاجيوکليزي والبيروكسين والأمفيبول      ", "فوق قاعدية من الفلسبار الأرثوكليزي والأوليفين والكوارتز"],
      correctAnswer: 4
    },
    {
      question: "الحيد المحيطي يتكون من صخور بها نسبة سيليكا حوالي      ",
      answers: ["20%", "50%", "60%", "70%"],
      correctAnswer: 4
    },
    {
      question: "يفسر تغير الوضع الجغرافي لقارة أستراليا عبر التاريخ الجيولوچی بسبب",
      answers: ["قوة التجاذب بين الشمس والأرض      ", "تيارات الحمل المتولدة نتيجة الطاقة الحرارية داخل الأرض      ", "دوران الأرض أدى لتحرك قارة أستراليا في أماكن مختلفة      ", "دوران الأرض أدى لتحرك قارة أستراليا في أماكن مختلفة      "],
      correctAnswer: 4
    },
    {
      question: "الأغوار الموجودة غرب اللوح الأمريكي الجنوبي نشأت بسبب       ",
      answers: ["الصفائح المتحركة على طول الصدوع التطاحنية      ", "الصفائح المتحركة نتيجة تيارات حمل دورانية هابطة في الوشاح      ", "الحركة التباعدية      ", "الحركة التقاربية بين لوحين قاريين      "],
      correctAnswer: 4
    },
    {
      question: "يعتقد أن جبال الأنديز تكونت نتيجة      ",
      answers: ["حركة بانية السلاسل الجبال بين لوحين قاربين      ", "انجراف جزء من جبال الهيمالايا عبر المحيط الهادي      ", "تدفق حمم بركانية من تقارب الألواح التكتونية الكبيرة      ", "تدفق حمم بركانية من أغوار عميقة بين اللوح الأفريقي واللوح الأمريكي      "],
      correctAnswer: 4
    },
    {
      question: "الحركات البانية لسلاسل الجبال تحدث عند حركة الألواح التكتونية       ",
      answers: ["التباعدية", "التقاربية", "الانزلاقية      ", "التطاحنية"],
      correctAnswer: 4
    },
    {
      question: "أي من الظواهر الآتية تتكون على حواف الألواح التكتونية عندما تتقارب قشرة قارية مع قشرة محيطية ؟      ",
      answers: ["سلاسل من الجبال الضخمة في منتصف القارات      ", "أغرار بحرية عميقة وسلسلة جبال بركانية على القارة قرب الشاطئ      ", "سلسلة جبال بركانية تحت الماء ووادي متصدع على حافة المحيط قرب الشاطئ الشاطئ      ", "سلاسل طويلة من الجزر البركانية عند حيد وسط المحيط عمودية على      "],
      correctAnswer: 4
    },
    {
      question: "حركة القشرة الأرضية نتيجة صدوع انتقالية عمودية يستدل عليها في      ",
      answers: ["البحر الأحمر", "جبال الهيمالايا", "خليج العقبة      ", "المحيط الهندي"],
      correctAnswer: 4
    },
    {
      question: "نوع فالق سان أندرياس المتواجد بأمريكا الشمالية هو فالق      ",
      answers: ["عادي", "معکوس", "انتقالی عمودی", "دسر"],
      correctAnswer: 4
    },
    {
      question: "السلاسل الجبلية التي تكونت نتيجة تصادم اللوح القاري الهندي مع اللوح القاري الأسبوأوروبي هي سلاسل جبال      ",
      answers: ["أطلس", "الألب", "الهيمالايا", "الأنديز"],
      correctAnswer: 4
    },
    {
      question: "عند تصادم لوحـين تكتونيين يندس اللوح المحيطي أسفل اللوح القاري لأن اللوح المحيطي يتكون أساسا   من صخور نارية",
      answers: ["قاعدية ولها كثافة أقل", "حامضية ولها كثافة أقل      ", "قاعدية ولها كثافة أعلى      ", "حامضية ولها كثافة أعلى      "],
      correctAnswer: 4
    },
    {
      question: "قوس الجزر البركانية يتكون نتيجة      ",
      answers: ["اندساس لوح قاری", "اندساس لوح محیطی", "تباعد لوحين قاربين", "تباعد لوحين محيطنين"],
      correctAnswer: 4
    },
    {
      question: "نتجت الكتلة الصخرية السطحية المتكونة من أندساس اللوح المحيطي أسفل اللوح الأمريكي الجنوبي عن       ",
      answers: ["تلاحم الرواسب الفتاتية والترسيب في مياه البحر", "تبريد وتبلور اللافا      ", "تحول حراري للصخور الرسوبية والنارية      ", "تحول بالضغط والحرارة الصخور الرسوبية"],
      correctAnswer: 4
    },
    {
      question: "ترتيب وصول الموجات الزلزالية إلى جهاز السيزموجراف هو       ",
      answers: ["طولية ثم ثانوية ثم طويلة", "سطحية ثم طولية ثم ثانوية", "سطحية ثم مستعرضة ثم طولية", "ابتدائية ثم طويلة ثم ثانوية      "],
      correctAnswer: 4
    },
    {
      question: "العبارة الأدق للمقارنة بين الموجات الزلزالية الأولية والثانوية هي أن الموجات الأولية تنتقل",
      answers: ["أسرع من الموجات الثانوية وتنتشر خلال نطاقات الأرض السائلة", "أسرع من الموجات الثانوية ولا تنتشر خلال نطاقات الأرض السائلة      ", "أبطأ من الموجات الثانوية وتنتشر خلال نطاقات الأرض السائلة      ", "أبطأ من الموجات الثانوية ولا تنتشر خلال نطاقات الأرض السائلة"],
      correctAnswer: 4
    },
    {
      question: "يستدل على تغير    التركيب الداخلي للأرض من الحالة الصلبة للوشاح الداخلى إلى الحالة السائلة للب الخارجي من أن",
      answers: ["الموجات الابتدائية تصل قبل الموجات الثانوية", "الموجات الابتدائية والموجات الثانوية كلاهما يتم تسجيلهما في كل محطات الرصد      ", "الموجات الثانوية فقط تسجل في جميع محطات الرصد      ", "الموجات الأولية تنخفض سرعتها وتختفي الموجات الثانوية      "],
      correctAnswer: 4
    },
    {
      question: "إذا علمت أن الموجات الزلزالية الثانوية وصلت إلى محطة رصد الزلازل بعد 11 دقيقة من حدوث الزلزال، فنستنتج أن الموجات الزلزالية الأوليـة قـد وصلت إلى نفس محطة الرصد بعد حدوث الزلزال بحوالي       ",
      answers: ["22 دقيقة", "16,5 دقيقة", "7.5 دقيقة", "11 دقيقة"],
      correctAnswer: 4
    },
    {
      question: "إذا كان زمن وصول أول الموجات الزلزالية الأولية لزلزال مـا إلى محطة الرصد كان الساعة 25 : 10  فإن الزمن المحتمل لوصول الموجات الزلزالية الثانوية إلى نفس المحطة الساعة       ",
      answers: ["10 : 10      ", "20:10", "25:10", "30 : 10"],
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
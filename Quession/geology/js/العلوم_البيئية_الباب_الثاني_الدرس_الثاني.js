(function() {
  "use strict";

  let questions = [
    {
      question: "   القطع الجائر لأشجار الغابات يؤدى إلى",
      answers: ["زيادة خصوبة التربة", "الزيادة المستمرة للخامات الصناعية", "التنوع البيولوجي", "انقراض بعض الطيور "],
      correctAnswer: 2
    },
    {
      question: "   يمكن ترشيد استهلاك الماء العذب في مصر عن طريق       ",
      answers: ["الري السطحي", "الري بالتنقيط", "الري الدائم", "الري بالغمر "],
      correctAnswer: 2
    },
    {
      question: "   موت الملايين من قطعان البيسون بأمريكا حدث بسبب",
      answers: ["الرعي الجائر", " الصيد الجائر", "القطع الجائر للأشجار", " كثرة المبيدات الحشرية"],
      correctAnswer: 2
    },
    {
      question: "    تعمل المزارع السمكية على علاج مشكلة الصيد الجائر لأنها توفر",
      answers: ["الدهون", "النيتروجين", "البروتين", " الأكسجين"],
      correctAnswer: 2
    },
    {
      question: "   ترشيد استهلاك الماء العذب يؤدى إلى",
      answers: ["نقص الماء اللازم للشرب", "زيادة منسوب الماء خلف السد العالي", " تصدير الماء للدول المجاورة", " زيادة المساحة الزراعية"],
      correctAnswer: 2
    },
    {
      question: "    المصدر الذي لا يوفر الماء للاستخدام في الري هو    ",
      answers: ["المياه الجوفية      ", " استخدام صنابير تعمل بأشعة إكس", "تحلية مياه البحر", "تجميع مياه الأمطار"],
      correctAnswer: 2
    },
    {
      question: "   يمكن الاستفادة من تدوير المخلفات الزراعية في كل مما يأتى عدا",
      answers: ["علاج الصيد الجائر", "علف الحيوان", "سماد عضوی", " بديلا للأخشاب في بعض الصناعات"],
      correctAnswer: 2
    },
    {
      question: "   يتم الحصول على الطاقة بتأثير القمر عن طريق الطاقة المتولدة عن       ",
      answers: ["المد والجزر", "مساقط المياه", "الضوء", " الحرارة"],
      correctAnswer: 2
    },
    {
      question: "   يتم الحصول على غاز الميثان من تدوير المخلفات",
      answers: ["النباتية", "المعدنية", "الصلبة في القمامة      ", "الصناعية "],
      correctAnswer: 2
    },
    {
      question: "   البطاريات الشمسية تستخدم في تحويل       ",
      answers: ["الطاقة الحرارية إلى طاقة حركية      ", "الطاقة الضوئية إلى طاقة كهربية", "الطاقة الشمسية إلى طاقة حرارية      ", " الطاقة الشمسية إلى طاقة ضوئية      "],
      correctAnswer: 2
    },
    {
      question: "   التوسع في البحث عن الفلسبار لاستخدامه في صناعة الفخار والسيراميك يعتبر       ",
      answers: ["استخدام بدائل", "استنزاف موارد", "إعادة استخدام", "تحويل النواتج الثانوية لصناعات أخرى"],
      correctAnswer: 2
    },
    {
      question: "كل مما يأتي من نواتج صناعات البتروكيماويات ماعدا       ",
      answers: ["الألياف الصناعية", "الدواء والأصباغ", "الطلاء وأكياس التعبئة", " البيوجاز"],
      correctAnswer: 2
    },
    {
      question: "   لمعالجة مشكلة استنزاف المعادن يجب",
      answers: ["صهر وإعادة تشكيل المصنوعات البلاستيكية", "استخدام اللدائن في صناعة أواني الطهي", "استخدام الألومنيوم بدلا من النحاس", "صناعة أواني الطهي من السيراميك      "],
      correctAnswer: 2
    },
    {
      question: "    لعلاج مشكلة استنزاف المعادن يمكن صناعة أواني الطهى من كل مما يأتي ماعدا       ",
      answers: ["الطمي", "الفلسبار", "السيراميك", "اللدائن "],
      correctAnswer: 2
    },
    {
      question: "   لعلاج مشكلة استنزاف المعادن يمكن صناعة السيراميك من كل مما يأتي ماعدا      ",
      answers: ["الكوارتز", "الفلسبار", "الزركون", " الألمنيت"],
      correctAnswer: 2
    },
    {
      question: "    كل مما يأتي من صور الطاقة النظيفة ماعدا      ",
      answers: ["مساقط المياه", "الغاز الطبيعي", "طاقة الرياح", "  طاقة المد"],
      correctAnswer: 2
    },
    {
      question: "    يعتبر الفحم من الموارد       ",
      answers: ["المحدودة التي تتناقص بالاستخدام", "غير المحدودة التي تتناقص بالاستخدام", "المحدودة التي لا تتناقص بالاستخدام       ", " غير المحدودة التي لا تتناقص بالاستخدام"],
      correctAnswer: 2
    },
    {
      question: "   يتم استخدام الفلسبار في صناعة جميع ما يلي عدا      ",
      answers: ["الفخار", "السيراميك", "الخزف", " الزجاج"],
      correctAnswer: 2
    },
    {
      question: "   من مكونات الرمال السوداء وتحصل منه على عنصر لتوليد الطاقة       ",
      answers: ["المونازيت", "الألمنيت", "الزركون", "القصدير "],
      correctAnswer: 2
    },
    {
      question: "   في حالة عدم حدوث التقدم الهائل في التكنولوجيا فإن نصيب الفرد من المعادن سوف .      ",
      answers: ["يصبح ثلاثة أمثال الزيادة السكانية      ", "يصبح أقل من ثلاثة أمثال الزيادة السكانية", "يصبح أكثر من ثلاثة أمثال الزيادة السكانية      ", "يبقى كما هو دون تغير      "],
      correctAnswer: 2
    },
    {
      question: "     إذا كان استهلاك مواطن أوروبي للطاقة حاليا حوالی ۱۰۰ کیلووات فإن استهلاكه بعد عام يكون      ",
      answers: ["103 كيلوات", "130 كيلوات", "200 كيلوات", " 300 كيلوات"],
      correctAnswer: 2
    },
    {
      question: "   يمكن صناعة الطوب من جميع ما يلي ماعدا       ",
      answers: ["الفلسيار", "الطفل", "الأسمنت", "الرمل "],
      correctAnswer: 2
    },
    {
      question: "    تم بناء توربينين رياحيين جديدين مؤخرا داخل برج إيفل في باريس، ستكون الطاقة التي تولدها هذه التوربينات كافية لتشغيل الدور الأول للبرج كاملا بما يشمل من المطاعم والمتاجر والمعارض، يرجع استخدام     طاقة الرياح كمصدر بديل للطاقة إلى أنها       ",
      answers: ["غير متجددة، وغير ملوثة للبيئة", "متجددة وستقلل من الأثر السلبي على البيئة", "من صور الطاقة النظيفة المحدودة", " غير محدودة وتريد من الأثر السلبي على البيئة      "],
      correctAnswer: 2
    },
    {
      question: "    مصدر للطاقة ينتج من إعادة تدوير مخلفات الحيوانات والنباتات هو       ",
      answers: ["الميثان", "الإيثان", "البرويان", " النيتروجين"],
      correctAnswer: 2
    },
    {
      question: "    من العمل الجيولوجي للأنهار ويمكن الاستفادة منه في الحصول على الطاقة هو       ",
      answers: ["الشلالات", "الشرفات النهرية", "أسر الأنهار", " الدلتا"],
      correctAnswer: 2
    },
    {
      question: "    من المظاهر الطبيعية التي تسببت في تكوين العينات المدرجة وتستخدم في الحصول على الطاقة هي      ",
      answers: ["الأمواج", "التيارات البحرية", "المد والجزر", "الجروف "],
      correctAnswer: 2
    },
    {
      question: "     يمكن الاستفادة من قش الأرز في كل مما يأتى ماعدا      ",
      answers: ["تحويله لسماد عضوی", "تحويله لعلف الحيوانات", " استخدامه في صناعة اللدائن", "تحويله إلى وقود"],
      correctAnswer: 2
    },
    {
      question: "بعض الدول تفرض رسوما إضافية على المستهلكين عند شراء المشروبات التي تباع في معلبات من الألومنيوم والزجاجات البلاستيكية وتعاد هذه الرسوم إلى المشترين عندما يعيدون هذه المعلبات والزجاجات لإعادة التدوير، تعتبر هذه السياسة محاولة لـ",
      answers: ["تشجيع الناس على إنفاق المزيد من المال لشراء المشروبات      ", "الحفاظ على الموارد المصنوعة من الألومنيوم والبلاستيك", "تقليل كمية ثاني أكسيد الكربون الناتجة عن تراكم نفايات الألومنيوم والبلاستيك", " القضاء تماما على استخدام هذه المعلبات"],
      correctAnswer: 2
    },
    {
      question: "      إذا علمت أن نسبة الزيادة السكانية تساوي 4 ٪، فإن نصيب الفرد من المعادن سوف يزداد بنسبة      ",
      answers: ["٤٪", "٨٪", "۱۲٪", " ١٦٪"],
      correctAnswer: 2
    },
    {
      question: "      إذا كان معدل الاستهلاك العالمي من الطاقة الآن هو (س) فبعد ٢٠ سنة يصبح      ",
      answers: ["س+٠,٣س", "٣س", "٤س", " س + ٠.٣ ، ٠س"],
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
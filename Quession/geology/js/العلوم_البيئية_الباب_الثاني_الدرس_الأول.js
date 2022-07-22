(function() {
  "use strict";

  let questions = [
    {
      question: "    الاستهلاك المتزايد للموارد غير المتجددة يسمى       ",
      answers: ["استنزاف الموارد", "الثورة الصناعية", " التوازن البيئي", "التخلص من النفايات الصناعية"],
      correctAnswer: 2
    },
    {
      question: "الموارد غير المتجددة هي موارد",
      answers: ["غير محدودة ولا يتم استهلاكها بمرور الوقت", "غير محدودة ويتم استهلاكها بمرور الوقت", "محدودة ولا يتم استهلاكها بمرور الوقت", "محدودة ويتم استهلاكها بمرور الوقت      "],
      correctAnswer: 2
    },
    {
      question: "استخدام الإنسان لنترات الكالسيوم كأسمدة كيميائية يؤدى إلى      ",
      answers: ["قلة خصوبة التربة      ", " انجراف التربة      ", " تجريف التربة", "  نشاط ديدان الأرض"],
      correctAnswer: 2
    },
    {
      question: "تکرار زراعة نبات القطن في نفس التربة يؤدى إلى  ",
      answers: [" إنهاك التربة ", "زيادة خصوبة التربة  ", " نقص تهوية التربة   ", "  يكسب التربة خصائص طبيعية مرغوبة"],
      correctAnswer: 2
    },
    {
      question: "قيام بعض المزارعين بزراعة نفس الأرض بمحصول اقتصادي بشكل مستمر يؤدي إلى",
      answers: ["زيادة دخل المزارعين", "زيادة الإنتاج", "زيادة خصوبة التربة", " قلة خصوبة التربة"],
      correctAnswer: 2
    },
    {
      question: "استخدام مركبات كيميائية سامة للقضاء على الحشرات يؤدى إلى",
      answers: [" تهوية التربة      ", "زيادة الحشرات الضارة", "زيادة خصوبة التربة", "زيادة الحشرات النافعة "],
      correctAnswer: 2
    },
    {
      question: "للحفاظ على خصوبة التربة ينبغي القيام بـ",
      answers: ["زراعة نوع واحد من المحاصيل", "مكافحة ديدان الأرض", "استخدام الأسمدة الكيميائية الحديثة", " التنوع في زراعة المحاصيل      "],
      correctAnswer: 2
    },
    {
      question: "الاستخدام المفرط لبيد (DDT) الزراعي قد يؤدى إلى",
      answers: ["موت ديدان الأرض", "زيادة حلقات سلاسل الغذاء ", "نشاط الكائنات الحية", "زيادة نسبة النيتروجين "],
      correctAnswer: 2
    },
    {
      question: "أحد التأثيرات السلبية لبناء السد العالي في مصر يتمثل في",
      answers: ["انخفاض نصيب الفرد من ماء النيل", "انخفاض مساحة الأراضي المنزرعة في مصر      ", "حجب ترسیب الطمي عن تربة الوادي      ", "ارتفاع أسعار الكهرباء في مصر      "],
      correctAnswer: 2
    },
    {
      question: "الموارد المؤقتة الصلبة العضوية التي سوف تختفي من البيئة من أمثلتها      ",
      answers: ["البترول", "الفحم", "التربة", " المعادن"],
      correctAnswer: 2
    },
    {
      question: "جميع ما يلي من الموارد البيئية التي ستختفي من البيئة عاجلا أم أجلا ماعدا",
      answers: ["رمل الزجاج      ", "الحديد", "الألومنيوم", "النحاس "],
      correctAnswer: 2
    },
    {
      question: "الموارد البيئية هي التي",
      answers: ["يعتمد عليها الإنسان ولا يتدخل في وجودها", "صنعها الإنسان ويعتمد عليها", "لا دخل للإنسان في وجودها ولا يعتمد عليها", "يعتمد عليها الإنسان ويتدخل في وجودها "],
      correctAnswer: 2
    },
    {
      question: "تكرار زراعة نبات في نفس التربة مرات متتالية يؤدى إلى      ",
      answers: ["نقص عناصر الفوسفور والكربون      ", "فوائد اقتصادية دائمة", "نشاط الكائنات الحية في التربة      ", "جفاف التربة      "],
      correctAnswer: 2
    },
    {
      question: "       قـام مـعـمـل أبحـاث للتـربـة بـقـيـاس نسـبة العـنـاصـر فـي تـربـة عـلى فترات زمنية متبـاعـدة فـوجـد  تناقص لبعض العناصر بصفة مستمرة وذلك دليل على      ",
      answers: ["اللجوء للزراعات وحيدة المحصول", "استخدام | الأسمدة الكيميائية", "استخدام المبيدات الحشرية", " الرى على فترات متباعدة"],
      correctAnswer: 2
    },
    {
      question: "كل مما يلى من طرق علاج مشكلة تعامل المزارعين غير السوي في الزراعة ماعد",
      answers: ["تنظیم استخدام المبيدات الحشرية", "استخدام الأسمدة العضوية", "عدم زراعة نفس المحصول لعدة سنوات متتالية", " التوسع في زراعة الأشجار حول المدن      "],
      correctAnswer: 2
    },
    {
      question: "يؤدي استخدام مخلفات الحيوانات في الزراعة إلى",
      answers: ["تلوث التربة", "انجراف التربة", "إكساب التربة خصائص مرغوبة", "قتل الحشرات الضارة "],
      correctAnswer: 2
    },
    {
      question: "صناعة الملابس من الألياف الصناعية بدلا من القطن تساهم في",
      answers: ["قلة جودة الملابس", "زيادة جودة الملابس", "توفير مساحات لزراعة الحبوب", " توفير الأراضي البناء عليها"],
      correctAnswer: 2
    },
    {
      question: "السبب في نقص النيتروجين في التربة قد يكون",
      answers: ["الإفراط في استخدام المبيدات الحشرية", " الإفراط في استخدام الأسمدة العضوية", "التنوع في زراعة المحاصيل", "نشاط الكائنات الحية الموجودة بالتربة      "],
      correctAnswer: 2
    },
    {
      question: "كل مما يأتي يعتبر مصدر للأسمدة العضوية ماعدا",
      answers: ["المخلفات الزراعية", "مخلفات البترول", "المخلفات الحيوانية", "المواد العضوية بالقمامة"],
      correctAnswer: 2
    },
    {
      question: "جميع ما يلى يؤدى لاستنزاف التربة الزراعية ماعدا",
      answers: ["اتباع نظام الدورات الزراعية", "استخدام الأسمدة الكيميائية بدلا من الأسمدة العضوية", "استخدام الطمي في صناعة الطوب الأحمر      ", "اتساع زمام المدن على حساب الأراضي الزراعية      "],
      correctAnswer: 2
    },
    {
      question: "مساحة الرقعة الزراعية التي تفقدها خلال عامين نتيجة للزحف العمراني حوالي       ",
      answers: [" 30 فدان", "60 ألف فدان", "30 ألف فدان", " 6 آلاف فدان"],
      correctAnswer: 2
    },
    {
      question: "نقص عنصر الفوسفور في التربة قد يكون سببه",
      answers: ["المبيدات الحشرية", " الأسمدة الكيميائية", "الأسمدة العضوية", " الزراعات وحيدة المحصول"],
      correctAnswer: 2
    },
    {
      question: "      يؤدى اعتماد المزارعين على سماد الفوسفات المصنع كيميائيا إلى      ",
      answers: ["انجراف التربة", "زيادة نشاط الكائنات الحية بالتربة", "زيادة النيتروجين بالتربة", " اكتساب التربة خصائص طبيعية مرغوبة "],
      correctAnswer: 2
    },
    {
      question: "     يرجع تدهور مراعي مرسى مطروح إلى      ",
      answers: [" القطع الجائر للأشجار", " استهلاك الأعشاب بمعدل أكبر من معدل نموها", " تلوث البحر المتوسط", "استهلاك الأعشاب بمعدل أقل من معدل نموها      "],
      correctAnswer: 2
    },
    {
      question: "     الرعي في مناطق الأعشاب يسبب زيادة      ",
      answers: ["النباتات الحولية المستساغة", "الأشجار والشجيرات", "النباتات الحولية غير المستساغة      ", " خصوبة التربة"],
      correctAnswer: 2
    },
    {
      question: "     إقامة المساكن في الأماكن الصحراوية يعتبر علاج المشكلة",
      answers: ["الزحف العمراني", "تجريف التربة", "القطع الجائر للأشجار", "الرعي الجائر"],
      correctAnswer: 2
    },
    {
      question: "     التربة الأبالية تنتج من تحلل      ",
      answers: ["أوراق الأشجار في الغابات", "جذور الأشجار", "سيقان الأشجار", " الأزهار والثمار"],
      correctAnswer: 2
    },
    {
      question: "النشاط البشري الذي يعد أحد الأسباب في زيادة كمية ثاني أكسيد الكربون بنسبة كبيرة في الغلاف الجـوى هـو      ",
      answers: ["قطع كميات كبيرة من الأشجار", "استخدام منتجات مصنعة من مواد عضوية", " استخدام المبيدات الحشرية", " زراعة عدد كبير من الأشجار"],
      correctAnswer: 2
    },
    {
      question: "ترجع أهمية الأشجار في الصناعة إلى أنها تعتبر",
      answers: ["مصدات للرياح و السيول", "مصفاة لتنقية الهواء من ثاني أكسيد الكربون", "مصدر للأخشاب والسليلوز", "مصدر لغاز الأكسجين وتوفير الظل "],
      correctAnswer: 2
    },
    {
      question: "إذا كان استهلاك حيوانات الرعي للحشائش أقل من معدل نمو الحشائش يكون ذلك",
      answers: ["رعي منظم", "رعی جائر", "رعی موسمی", "رعي في الأشجار والشجيرات "],
      correctAnswer: 2
    },
    {
      question: "يتواجد الدبال بكثرة في الصحاري لوجود الكساء الخضري الدائم» ، «يوفر الدبال العناصر الغذائية لتربة، ما مدى صحة العبارتين السابقتين ؟      ",
      answers: ["العبارتان صحیحتان", "العبارتان خطأ", "العبارة الأولى صحيحة والعبارة الثانية خطأ", " العبارة الأولى خطأ والعبارة الثانية صحيحة      "],
      correctAnswer: 2
    },
    {
      question: "تحول الساحل الشمالي المطل على البحر المتوسط لمناطق صحراوية بسبب",
      answers: [" الزيادة السكانية والرعي الجائر", "القطع الجائر والرعي الجائر", "الزيادة السكانية والقطع الجائر للأشجار      ", "تجريف التربة وانجرافها      "],
      correctAnswer: 2
    },
    {
      question: "يؤدى الرعي المنظم إلى",
      answers: ["الحفاظ على النباتات الصالحة", "زيادة معدل النتح والبخر", "تناقص مساحة المراعي الطبيعية", "ارتفاع معدل استهلاك الحيوانات الحشائش"],
      correctAnswer: 2
    },
    {
      question: "أي مما يلي يعبر عن الرعي الجائر ؟",
      answers: ["يحدث عندما يكون معدل نمو الحشائش أكثر من استهلاك الحيوانات لها", "يحدث عندما يكون معدل استهلاك الحيوانات الحشائش أكثر من معدل نموها", "يفيد في خفض نسبة النتح", "يفيد في خفض نسبة البحر      "],
      correctAnswer: 2
    },
    {
      question: "المتوقع عند إزالة أشجار الغابات الاستوائية المطيرة أن يحدث",
      answers: ["نقص كمية الوقود الحفري المستخدم في الصناعة", "زيادة كمية الأكسجين في الغلاف الجوي", "زيادة المواد الكيميائية التي تزيد من خصوبة التربة", "نقص العناصر والمركبات الكيميائية وتعرض التربة لخطر الانجراف      "],
      correctAnswer: 2
    },
    {
      question: "الطلب المتزايد على زراعة البقول والحبوب أدى إلى تحويل الغابات إلى حقول للزراعة، هذا التغير البيئي قد يؤدي إلى",
      answers: ["ارتفاع نسبة الأكسجين في البيئة      ", "تناقص المأوى الطبيعي المناسب للحياة البرية", "", "انخفاض درجة الحرارة "],
      correctAnswer: 2
    },
    {
      question: "يترتب على الرعي الجائر آثار ضارة ليس منها",
      answers: ["تشرد الحيوانات", " تدهور النبات الطبيعي", "تعرض التربة للانجراف", " حدوث الزحف الصحراوي"],
      correctAnswer: 2
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
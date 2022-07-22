(function() {
  "use strict";

  let questions = [
    {
      question: "أي المناطق الآتية في مصر يتواجد بها بقايا سراخس وحرشفيات ؟",
      answers: ["سفاجا والقصير", "بدعة وثورا", "السباعية وأبو طرطور", "حلوان والعين السخنة"],
      correctAnswer: 4
    },
    {
      question: "الحدث الجيولوجي الذي صاحب اختفاء الديناصورات هو",
      answers: ["تكوين جبال الهيمالايا", "تراكم حيوانات بحرية فقارية في شمال أفريقيا", "تفتق المحيط الأطلنطي", "تراكم طبقات الملح الصخري في وسط أوروبا"],
      correctAnswer: 4
    },
    {
      question: "الحدث الجيولوجي الذي صاحب ظهور الزواحف لأول مرة هو      ",
      answers: ["تكوين طبقات الفحم في بدعة وثورا جنوب غرب سيناء", "تراكم رواسب الفوسفات في شمال أفريقيا", "تراكم طبقات الملح الصخري في وسط أوروبا", "نمو التربة وتكوين مزارع ذات إنتاج وفير بالصحراء الكبرى في أفريقيا"],
      correctAnswer: 4
    },
    {
      question: "تراکمت رواسب الفوسفات ذات القيمة الاقتصادية بمصر خلال العصر",
      answers: ["الكربوني", "الطباشيري العلوي", "البرمي", "الجوراسي"],
      correctAnswer: 4
    },
    {
      question: "طبقات الفحم المتواجدة بمنطقة بدعـة وثـورا جنوب غرب سيناء تكونت في عصر تميز بوجود       ",
      answers: ["النباتات الزهرية", "الأشجار الحرشفية والسراخس", "الطحالب الخضراء", "النباتات معراة البذور"],
      correctAnswer: 4
    },
    {
      question: "العصر الذي تنتمي إليه صخور منطقة السباعية في وادي النيل والتي تحتوي على رواسب ناتجة من تراكم بقايا الفقاريات البحرية هو       ",
      answers: ["الكمبري", "الكربوني", "الطباشيري العلوي", "البرمي"],
      correctAnswer: 4
    },
    {
      question: "الحدث الجيولوجي الأحدث في الوقوع مما يلي هو",
      answers: ["تكوين فوسفات أبو طرطور", "انتشار الحيوانات الرعوية", "انتشار ثلاثية الفصوص", "ترسيب الفحم في بدعة وثورا"],
      correctAnswer: 4
    },
    {
      question: "المنطقة التي تحتوي على أقدم طبقات صخرية مما يلي هي",
      answers: ["السباعية في وادي النيل", "وسط أوروبا", "بدعة وثورا جنوب غرب سيناء", "ابو طرطور في الوادي الجديد"],
      correctAnswer: 4
    },
    {
      question: "المنطقة المصرية التي ظهرت فيها طبقات من الصخور الرسوبية يرجع ترسيبها إلى الفترة من ٣٢٠ إلى ۲۷۰ مليون سنة مضت هي منطقة",
      answers: ["سفاجا والقصير قرب ساحل البحر الأحمر", "السباعية في وادي النيل      ", "بدعة وثورا جنوب غرب سيناء      ", "الواحات البحرية بالصحراء الغربية      "],
      correctAnswer: 4
    },
    {
      question: "الرواسب التي تتواجد في مناطق مصرية ويرجع تكونها إلى أكثر من ٢٠٠ مليون سنة مضت هي",
      answers: ["الفحم", "الفوسفات", "الرواسب الطينية", "الملح الصخري"],
      correctAnswer: 4
    },
    {
      question: "النسبة التي يمثلها حقب الحياة الحديثة من عمر الأرض حوالي",
      answers: ["1.4%", "5%", "13%", "87%"],
      correctAnswer: 4
    },
    {
      question: "الحفريات الأحدث المتوقع تواجدها في الصخور المكونة لسفاجا والقصير هي",
      answers: ["ثلاثية الفصوص", "الأمونيتات", " الثدييات الأولية", "الثدييات المشيمية"],
      correctAnswer: 4
    },
    {
      question: "المادة المانعة التي تسري في أعماق القشرة الأرضية من أسفل منطقة الترسيب إلى قاع منطقة التفتيت هي       ",
      answers: ["المياه الجوفية الحارة", "اللافا", "المياه الجارية", "الصهارة"],
      correctAnswer: 4
    },
    {
      question: "عند حركة الصهارة من قاع المنطقة (ص) إلى قاع المنطقة (س)، فإن ذلك يعني أن يصبح الصهير غني بالمواد       ",
      answers: ["الحامضية عند المنطقة (ص)", "الحامضية عند المنطقة (س)", "عالية الكثافة عند المنطقة (س)", "منخفضة الكثافة عند المنطقة (ص)"],
      correctAnswer: 4
    },
    {
      question: "إذا حدث ترسيب في المنطقة (أ) مقابل تفتيت في المنطقة (ب) ينتج عن ذلك",
      answers: ["ارتفاع الجبال في المنطقة (أ)", "ارتفاع الطبقات في المنطقة (ب)", "سريان تدريجي للصهارة من (ب) إلى (أ)", "انخفاض الطبقات في المنطقة (ب)"],
      correctAnswer: 4
    },
    {
      question: "الصهارة التي تتحرك إلى جذور الجبال تكون عند تبريدها وتبلورها صخور غنية بمعادن",
      answers: ["الكوارتز والأوليفين", "الأرثوكليز والبيروكسين", "الأرثوكليز والكوارتز", "الأوليفين والبيروكسين"],
      correctAnswer: 4
    },
    {
      question: "استجابة جذور الجبال لعوامل التعرية التي تحدث للجبال التي تعلوها تتمثل في أن",
      answers: ["الجذر سوف يغوص إلى الوشاح لتقل عمليات التعرية", "الجذر سوف يرتفع مسببا حركات أرضية رافعة والمزيد من التعرية      ", "التعرية سوف تؤدي لزيادة الضغط في الجذور القارية مسببة زلازل      ", "التعرية ليس لها تأثير على الجذور القارية      "],
      correctAnswer: 4
    },
    {
      question: "يعتبر تدفق نهر النيل قبل عام ١٩٦٤م أكبر دليل على خاصية التوازن الأيزوستاتيكي حيث كانت تنتقل الصهارة من أسفل",
      answers: ["هضبة الحبشة إلى الدلتا", "الدلتا إلى الحبشة", "الدلتا إلى البحر الأبيض", "هضبة الحبشة إلى أسوان"],
      correctAnswer: 4
    },
    {
      question: "جبل ارتفاعـه م كـم فـوق سطح البحـر وبالتالي تبلغ المسافة بين قـمـتـه حـتـى قـاع جـذره حوالي",
      answers: ["40 كم", "12 کم", "15 کم", "20 کم"],
      correctAnswer: 4
    },
    {
      question: "إذا علمت أن المسافة بين قمة جبل وقاع جذر هـذا الجـبـل تساوی 25 كم، فإن قـاع الجـبـل يغوص في الوشاح حتى عمق حوالي .",
      answers: ["5 کم", "10 کم", "15 کم", "20 کم"],
      correctAnswer: 4
    },
    {
      question: "الصخر المتواجد في الطبقات السطحية لقمة أفرست في جبال الهيمالايا هو صخر",
      answers: ["الرخام", "الجرانيت", "البازلت", "الحجر الجيري"],
      correctAnswer: 4
    },
    {
      question: "تمثل هضبة أبو طرطور مكان تواجد كائنات بحرية قديمة هي",
      answers: ["الكائنات الهيكلية", "الفورامينفرا والشعاب المرجانية", "الحيوانات البحرية الفقارية", "الزواحف العملاقة والتيموليت      "],
      correctAnswer: 4
    },
    {
      question: "عند تشويه صخور القشرة الأرضية بالحركات الأرضية واندفاع الحمم البركانية تنتج      ",
      answers: ["باثولیث", "حبال ووسائد", "عروق", "لاکولیث"],
      correctAnswer: 4
    },
    {
      question: "المنطقة التي تتكون بها طبقات رسوبية جيرية مطوية على ارتفاعات عالية من سطح البحر هي",
      answers: ["جبال الهيمالايا", "الاخدود العظيم لنهر كلورادو", "جبال الأنديز", "جبال كلمنجارو"],
      correctAnswer: 4
    },
    {
      question: "الفوالق التي تصاحب الحركات البانية للجبال تكون فوالق       ",
      answers: ["عادية", "سواتر", "دسرية", "خندقية"],
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
(function() {
  "use strict";

  let questions = [
    
    {
      question: "القارة العملاقة في العصور الجيولوجية الأولى المتكونة من صخور السيال فوق صخور السيما والتي يفترض أنها انقسمت إلى أجزاء هي      ",
      answers: ["جوندوانا", "لوراسيا", "بانجيا", "استرالیا"],
      correctAnswer: 4
    },
    {
      question: "تبعا لنظرية الانجـراف القاري بدأت أم القـارات بـانجيا تتفتق منذ حقب",
      answers: ["الأركي", "اللافقاريات", "الزواحف", "الثدييات"],
      correctAnswer: 4
    },
    {
      question: "قارة أفريقيا في العصر الكربوني كانت تتبع قارة تسمى       ",
      answers: ["جوندوانا", "لوراسیا", "أوراسيا", "بانجيا"],
      correctAnswer: 4
    },
    {
      question: "تزامن وجود أجزاء من أمريكا الشمالية عند خط الاستواء مع      ",
      answers: ["ظهور حفرية التيموليت", "انتشار البرمائيات", "ظهور الأسماك العظمية", "تراكم رواسب الفوسفات في شمال أفريقيا"],
      correctAnswer: 4
    },
    {
      question: "مقارنة بالخصائص الفيزيائية للصخور النارية المضية، فإن الصخور النارية القاعدية تكون",
      answers: ["أقل كثافة وخفيفة الوزن النوعي", "أقل كثافة وثقيلة الوزن النوعي", "أعلى كثافة وخفيفة الوزن النوعي", "أعلى كثافة وثقيلة الوزن النوعي"],
      correctAnswer: 4
    },
    {
      question: "مقارنة بالقشرة المحيطية، فإن القشرة القارية تكون",
      answers: ["اکثر كثافة وأكثر حامضية", "أكثر كثافة وأكثر قاعدية", "أقل كثافة وأكثر حامضية", "أقل كثافة وأكثر قاعدية      "],
      correctAnswer: 4
    },
    {
      question: "توجد صخور السيما فوق",
      answers: ["الوشاح الداخلي القشرة الأرضية", "الجزء العلوي من الوشاح", "اللب الخارجي", "السيال"],
      correctAnswer: 4
    },
    {
      question: "أي المواقع التالية يكون سمك القشرة الأرضية فيها أقل ؟",
      answers: ["جبال الهيمالايا", "الأخدود العظيم لنهر كلورادو      ", "قاع البحر الأحمر", "منطقة بدعة وثورا"],
      correctAnswer: 4
    },
    {
      question: "نسبة السيليكا في القشرة القارية لبانيا",
      answers: ["أقل من 45 %", "من 45 - 55 %", "من 55 : 66 %", "أكثر من 66 %"],
      correctAnswer: 4
    },
    {
      question: "من المعادن المغناطيسية في الصخور التي تظهر تشابها في اتجاه وشدة المجال المغناطيسي",
      answers: ["أكاسيد الصوديوم", "أكاسيد البوتاسيوم", "أكاسيد الحديد", "أكاسيد الكالسيوم"],
      correctAnswer: 4
    },
    {
      question: "تتماثل الأشرطة المغناطيسية ذات الأقطاب المغناطيسية العادية والمنعكسة الموجودة في الصخور القاعدية علی جانبی",
      answers: ["حيد وسط المحيط الأطلنطي", "جبال الأنديز بأمريكا الجنوبية", "جبال الهيمالايا بالهند", "صدع سان أندرياس بأمريكا      "],
      correctAnswer: 4
    },
    {
      question: "الحزام المناخي الموجود بين الاستوائي والمراعي هو",
      answers: ["الغابات متساقطة الأوراق", "الغابات الصنوبرية", "المناخ المداري", "المناخ القطبي"],
      correctAnswer: 4
    },
    {
      question: "يتضح انعكاس اتجاه الأقطاب المغناطيسية عدة مرات في الماضي في",
      answers: ["الصخور المتحولة في السلاسل الجبلية", "حفريات الطبقات الصخرية التي تحتوى على مواد مشعة       ", "طبقات الصخور الرسوبية الموجودة في الأخدود العظيم", "الصخور النارية للقشرة المحيطية      "],
      correctAnswer: 4
    },
    {
      question: "   يستدل على اتساع قاع المحيط الأطلنطي من خلال أن       ",
      answers: ["الصخور الموجودة عند الحيد من الصخور النارية      ", "الحيد موجود في منطقة كلها أنشطة بركانية      ", "عدة فوالق تقطع الحيد وقاع المحيط المجاور      ", "صخور قاع المحيط بالقرب من الحيد أحدث في العمر من الصخور البعيدة عن الحيد      "],
      correctAnswer: 4
    },
    {
      question: "الصخور في أحد جانبي حيد وسط المحيط يكون لها       ",
      answers: ["مغناطيسية واحدة وعمر متماثل      ", "مغناطيسية مختلفة وعمر مختلف      ", "مغناطيسية متماثلة وعمر مختلف      ", "مغناطيسية مختلفة وعمر متماثل"],
      correctAnswer: 4
    },
    {
      question: "تتشابه أعمار الصخور الرسوبية الموجودة علـى جـداري الأخدود العظيم لنهر كلورادو ويستدل على ذلك      ",
      answers: ["التركيب المعدني      ", "المحتوى الحفري      ", "اللون", "حجم الحبيبات      "],
      correctAnswer: 4
    },
    {
      question: "وجد صخر معدل انحراف الإبرة المغناطيسية له 85° بالقرب من القطب الشمالي فهذا يعتبر دليل أن الصخر       ",
      answers: ["انتقل من خط الاستواء إلى القطب الشمالي      ", "ناری حمضی جوفی       ", "لم يتحرك من مكانه      ", "انتقل من منطقة المناخ المدار"],
      correctAnswer: 4
    },
    {
      question: "تبعا للبيانات على القطاع، فإن كل مليون سنة تتحرك صخور قاع المحيط تقريبا      ",
      answers: ["20 كم ناحية حيد وسط المحيط الأطلنطي      ", "20 كم بعيدا عن حيد وسط المحيط الأطلنطي      ", "40 كم ناحية حيد وسط المحيط الأطلنطي      ", "40 كم بعيدا عن حيد وسط المحيط الأطلنطى      "],
      correctAnswer: 4
    },
    {
      question: "موقع ومناخ أوروبا تغير خلال 200 مليون سنة لأن أوروبا تحركت .      ",
      answers: ["جنوبا وأصبح مناخها دافئ      ", "جنوبا وأصبح مناخها بارد       ", "شمالا وأصبح مناخها دافئ      ", "شمالا وأصبح مناخها بارد      "],
      correctAnswer: 4
    },
    {
      question: "مناجم الفحم الموجـودة في منطقة بدعـة وثـورا تعطي دليل أن المناخ في شمال مصر كان أكثر دفئًا ورطوبة    خلال العصر الكربوني، أفضل تفسير لهذا التغير في المناخ عبر التاريخ الجيولوچي هـو",
      answers: ["حركة القارات      ", "تغير الفصول      ", "التغير في البيئة نتيجة نشاط الإنسان      ", "تطور الحياة      "],
      correctAnswer: 4
    },
    {
      question: "الصخير التي تكونت قديما في وسط وشمال أوروبا هي      ",
      answers: ["الصخر الرملي وصخور البازلت      ", "الملح الصخري والحجر الجيري المتكون من شعاب مرجانية      ", "الطفل وصخور الكومانيت      ", "صخور الأنديزيت وصخور الدايورايت      "],
      correctAnswer: 4
    },
    {
      question: "بناء على شواهد نظرية الانجراف القاري، فمن المتوقع وجود الرواسب المحمية القديمة حاليا في مناطق       ",
      answers: ["استوائية", "مدارية", "معتدلة", "قطبية"],
      correctAnswer: 4
    },
    {
      question: "الصخور التي تحتوى على حفريات الفحم القديم في شمال أوروبا وكندا لها زاوية انحراف مغناطیسی يقترب من       ",
      answers: ["90°", "80°", "صفر°", "60°"],
      correctAnswer: 4
    },
    {
      question: "رسوبيات مثالج حقب الحياة القديمة في جوندوانا يرجع عمرها من نهاية       ",
      answers: ["العصر البرمي إلى العصر الطباشيري", "العصر الترياسي إلى العصر الطباشيري", "العصر الكمبري إلى العصر الطباشيري      ", "العصر الكمبري إلى العصر البرمي"],
      correctAnswer: 4
    },
    {
      question: "الصخور على بعد 200 كم يمين حيد وسط المحيط بالنسبة للصخور على بعد 50 كم يسار حيد وسط المحيط يكون لها      ",
      answers: ["نفس العمر واتجاه مغناطیسی مختلف", "عمر أحدث      ", "عمر أقدم      ", "نفس العمر ونفس الاتجاه المغناطيسي"],
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
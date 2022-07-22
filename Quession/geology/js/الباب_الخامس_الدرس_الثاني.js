(function() {
  "use strict";

  let questions = [
    
    {
      question: "     هبوب رياح محملة بالرمال واصطدامها بصخور صلبة مرتفعة يؤدى إلى تكوين       ",
      answers: ["مصاطب وكثبان رملية      ", " مصاطب وتموجات رملية      ", " تموجات وكثبان رملية      ", "مصاطب وجروف      "],
      correctAnswer: 4
    },
    {
      question: "الظاهرة الطبوغرافية التي تتكون نتيجة العمل البنائي للرياح       ",
      answers: [" الجروف", "الدلتا      ", " التموجات الرملية      ", "المصاطب "],
      correctAnswer: 4
    },
    {
      question: "     تنتج الحصوات ذات الوجه المصقول في الصحراء نتيجة الفعل      ",
      answers: [" البنائي للرياح", "البنائي للمياه الجوفية      ", "الهدمي للرياح      ", "الهدمي للأنهار      "],
      correctAnswer: 4
    },
    {
      question: "       تكونت الغرود المنتشرة بين الواحات البحرية وحتى الواحات الخارجة بتأثير       ",
      answers: [" العمل الهدمي للرياح      ", " العمل البنائي للرياح      ", " الأمواج البحرية الموازية للشاطئ      ", " البحرية العمودية على الشاطئ      "],
      correctAnswer: 4
    },
    {
      question: "  عملية النحت طبيعية بواسطة الرياح المحملة بالرمال لبعض الطبقات الصخرية متباينة الصلابة في المناطق الصحراوية تؤدى إلى تكوين",
      answers: [" حصى مثلث الأضلاع      ", "حصى مستدير      ", " كثبان مستطيلة      ", " المصاطب"],
      correctAnswer: 4
    },
    {
      question: "    متـوسـط عدد السـنـيـن الـذي تحتاج إليه الكثبان الرملية لتنتقل مسافة 100 متر      ",
      answers: [" 5 سنوات", "10 سنوات", "15 سنة", " 50 سنة"],
      correctAnswer: 4
    },
    {
      question: "ينتج عن مرور الرياح على صخر حجم حبيباته أقل من ٦٢ ميكرون يعلوه صخر يتكون من معدن الكالسيت تكوين       ",
      answers: ["مصاطب ", "كثبان رملية", " جروف", "حصی مصقول"],
      correctAnswer: 4
    },
    {
      question: "     الظاهرة الترسيبية المتوقع وجودها عندما تقل سرعة السيل هي      ",
      answers: [" المصاطب      ", "الدلتا الجافة      ", " الكثبان الرملية      ", "الغرود الرملية      "],
      correctAnswer: 4
    },
    {
      question: "    الممرات الضيقة التي تمر فيها المياه من أعلى الجبل تعرف بـ       ",
      answers: [" الجروف", "الأخوار ", "الأغوار ", " الأخاديد"],
      correctAnswer: 4
    },
    {
      question: "    الترتيب الأصوب لرواسب السيول من مخرج الخور لنهاية الترسيب هو       ",
      answers: ["حصی - جلاميد - طين - رمال      ", "حصی - رمال - طين - جلاميد      ", " جلاميد - رمال - صلصال - طين      ", " جلاميد - حصى - رمال - طين      "],
      correctAnswer: 4
    },
    {
      question: "     الدلتا الجافة من المظاهر الطبوغرافية الناتجة عن العمل       ",
      answers: ["البنائي للأمطار      ", " الهدمي للرياح      ", "الهدمي للسيول      ", " البنائي للسيول      "],
      correctAnswer: 4
    },
    {
      question: "    وجود أخاديد وجروف في سيناء يدل على      ",
      answers: [" مناخ جاف وحرارة شديدة      ", "سقوط أمطار شديدة      ", "رياح شديدة وارتفاع درجة الحرارة      ", "عدم وجود رياح وأمطار"],
      correctAnswer: 4
    },
    {
      question: "التربة التي تحتوي على نسبة كبيرة من الفراغات بين الحبيبات تتميز ب       ",
      answers: ["معامل نفاذية منخفض      ", "معامل تسرب منخفض      ", "مسامية عالية      ", "خاصية شعرية عالية      "],
      correctAnswer: 4
    },
    {
      question: "العوامل التي تتحكم في كمية المياه المتسربة في الصخور هي       ",
      answers: [" لون الصخر وسمكه      ", " مسامية الصخر ونفاذيته      ", " نسيج الصخر والمحتوى الحفري      ", " درجة حرارة تبلور الصخر وحجم البلورات      "],
      correctAnswer: 4
    },
    {
      question: "تتكون رواسب الهوابط من      ",
      answers: ["كبريتات الكالسيوم اللامائية      ", " كبريتات الكالسيوم المائية      ", "كربونات الكالسيوم والماغنيسيوم      ", " كربونات الكالسيوم"],
      correctAnswer: 4
    },
    {
      question: "وجود مغارة في قمة جبل دليل على أن القمة صخورها من       ",
      answers: [" الجرانيت", "الشيست ", "البازلت ", " الحجر الجيري      "],
      correctAnswer: 4
    },
    {
      question: "عند الحفر بالقرب من أحد جوانب النهر نجد       ",
      answers: [" ارتفاع منسوب الماء الجوفي العذب      ", " ارتفاع منسوب الماء الجوفي المالح      ", " انخفاض منسوب الماء الجوفي المالح      ", " انخفاض منسوب الماء الجوفي العذب      "],
      correctAnswer: 4
    },
    {
      question: "تستطيع العثور على المياه الجوفية بالقرب من البحار بسبب       ",
      answers: ["زيادة حمضيتها      ", " ارتفاع منسوبها       ", "انخفاض منسوبها      ", "زيادة قاعديتها "],
      correctAnswer: 4
    },
    {
      question: "العوامل التي تسبب ارتفاع منسوب المياه الأرضية هي      ",
      answers: [" التجوية وسرعة التيار      ", "القرب من البحار وكثرة الأمطار      ", " الدفن والترسيب      ", "التحجر والتكثف      "],
      correctAnswer: 4
    },
    {
      question: "يظهر تأثير التجوية الميكانيكية على جوانب السفوح الجبلية نتيجة لـ      ",
      answers: [" تميز الكتل الصخرية نتيجة الأمطار      ", "تشيع الكتل الصخرية المسامية بالماء الجوفي      ", " أكسدة الكتل الصخرية بالأكسجين المذاب في الماء      ", " كربنة الكتل الصخرية بـ CO2 المذاب في الماء"],
      correctAnswer: 4
    },
    {
      question: "الغابات المتحجرة في أبو رواش تكونت بسبب       ",
      answers: [" عمل هدمي نتيجة ذوبان ألياف الأشجار بالأحماض العضوية والمواد القلوية      ", "عمل هدمي نتيجة ذوبان السيليكا وترسيبي نتيجة إحلال السيليكا محل ألياف الأشجار      ", " عمل هدمي نتيجة ذوبان المواد الجيرية وترسيبي نتيجة إحلال المواد الجيزية محل ألياف الأشجار       ", "عمل بنائي نتيجة ذوبان السيليكا المكونة لألياف الأشجار "],
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
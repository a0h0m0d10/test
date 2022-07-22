(function() {
  "use strict";

  let questions = [
    {
      question: "اى مما يلى لا يؤدى إلى تكوين تراكيب جولوجية",
      answers: ["القوى التكتونية", "العوامل البيئية", "الظروف المناخية", "دوران الارض"],
      correctAnswer: 4
    },
    {
      question: "تتكون التشققات الطينية بسبب ",
      answers: ["قوة ضغط", "قوة شد", "عوامل خارجية ", "قوة شد وضغط معا"],
      correctAnswer: 3
    },
    {
      question:"التطبق المتقاطع تركيب جيولوجى قد ينتج عن",
      answers: ["الزلازل", "تيارات مائية", "الضغط التكتونى", "البراكين"],
      correctAnswer: 2
    },
    {
      question: "علامات النيم تظهر غالبا ف الصخور",
      answers: ["المتحولة", "الرسوبية", "الجرانيتية", "البازلتية"],
      correctAnswer: 2
    },
    {
      question: "جميع التراكيب التالية اولية ما عدا",
      answers: ["علامات النيم", "التطبق المتقاطع", "التدرج الطبقى", "الشقوق الصخرية"],
      correctAnswer: 4
    },
    {
      question: "تعد الالتواءات الصخرية احد التراكيب ",
      answers: ["الثانوية", "الاولية", "المتكونة بفعل الجفاف", "المتكونة بفعل العوامل البيئية"],
      correctAnswer: 1
    },
    {
      question: "عند تعرض الصخور الرسوبية لعوامل خارجية قد تتكون",
      answers: ["طية محدبة", "فالق عادى", "فاصل عمودى", "تطبق متقاطع"],
      correctAnswer: 4
    },
    {
      question: "طبقة رسوبية تتكون من حبيبات غير متساوية الحجم الجزء العلوى حجم حبيباته ١ ميكرون والاوسط حجم حبيباته ١ ملى والسفلى  حجم حبيباته ٣ ملى فان التراكيب التى تمثل هذة الطبقة تعتبر ",
      answers: ["تدرج طبقى", "تطبق متقاطع", "علامات النيم", "تشقق طينى"],
      correctAnswer: 1
    },
    {
      question: "فى الطية المقعرة تكون .....",
      answers: ["الصخور الاحدث على الجانبين", "الطبقة الحديثة محاطة بطبقات اقدم", "الطبقة القديمة محاطة بطبقات أحدث", "الطبقات منحنية لأعلى "],
      correctAnswer: 2
    },
    {
      question: "طية تتكون من 10طبقات، فأن عدد الأجنحة لها تكون",
      answers: ["10", "1", "2", "20"],
      correctAnswer: 3
    },
    {
      question: "نستطيع تحديد علاقة عمر طبقات الصخور ببعضها عن طريق دراسة ",
      answers: ["التطبق المتقاطع", "الطيات", "الفواصل", "الفالق ذو حركة افقية"],
      correctAnswer: 2
    },
    {
      question: "فى الطية المحدبة.....",
      answers: ["يتقارب الجناجان من أسفل", "يتقارب الجناحان من أعلى ", "يتباعد الجناحان من أعلى", "الصخور الاحدث توجد ف المركز"],
      correctAnswer: 2
    },
    {
      question: "تتكون طية من 10طبقات فأن الغلاقة العددية بين المستوى المحورى والمحور  تكون",
      answers: ["1:1", "1:5", "5:1", "1:10"],
      correctAnswer: 4
    },
    {
      question: "الخط الناتج بين المستوى المحورى للميلة مع سطح الطبقة التالتة تعرف ب",
      answers: ["جناح الطية", "محور الطية", "المستوى المحورى الثالث", "جانب الطية"],
      correctAnswer: 2
    },
    {
      question: "دراسة الطيات توضح العلاقة بين طبقاتها لانها",
      answers: ["تترسب فقط على اليابس", "تحتوى على حفريات مرشدة ", "مرتبة زمنياً من المركز الى الخارج", "أكثر وضوحاً فى الصخور الرسوبية"],
      correctAnswer: 3
    },
    {
      question: "لا تحتوى الطية التى تتكون من 8طبقات على",
      answers: ["جناحين ", "مستوى محورى واحد", "8 محاور", "محور واحد "],
      correctAnswer: 2
    },
    {
      question: "فى الطيات التى يتواجد فيها الطبقات الأحدث  عند المركز فأنه ",
      answers: ["يتقارب الجناحان من أسفل", "يتقارب الجناحان من أعلى", "يتباعد الجناحان من أعلى " ,"الصخور الاقدم تكون فى الداخل"],
      correctAnswer: 1
    },
    {
      question: "الشقوق التى تحدث فى الصخور بحيث تزيح كتل الصخور المتجاورة تعرف ب ",
      answers: ["الفواصل", "الفوالق", "التطبق المتقاطع", "التشققات الطينية"],
      correctAnswer: 2
    },
    {
      question: "الفالق الزحفى عبارة عن فالق ",
      answers: ["معكوس", "عادى", "بارز", "خندقى"],
      correctAnswer: 1
    },
    {
      question: "تظهر الالتواءات والصدوع بصورة أكثر وضوحاً فى الصخور",
      answers: ["النارية البازلتية", "المتحولة", "الرسوبية", "النارية الجرانيتية"],
      correctAnswer: 3
    },
    {
      question: "يصاحب تكوين الفالق",
      answers: ["حصى مستدير", "حصى هرمى الشكل", "فتات حادة الحواف " , " رمال وطين"],
      correctAnswer: 3
    },
    {
      question: " من التراكيب التكتونية التي لها دور في تشجيع السياحة العلاجية",
      answers: ["الفوالق", "الفواصل", "الطيات المحدبة", "الطيات المقعرة"],
      correctAnswer: 1
    },
    {
      question: "صعود مياه معدنيه في شقوق لي طول مستوي الفالق وترسيب ماتحمله قد نؤدي نكون معدن",
      answers: ["الجبس", "الكالسيت", "الكوارتز", "الذهب"],
      correctAnswer: 2
    },
    {
      question: "للفوالق أهمية كبيرة منها جميع مايلي ماعدا",
      answers: ["مصايد للبترول", "اماكن النافورات الساخنةالعلاجية", "اماكن تكون الغاز الطبيعي", "اماكن ترسيب المنجنيز"],
      correctAnswer: 3
    },
    {
      question: "الفالق التى تتحرك  فيها الكتل المكسورة دون تغير في المنسوب الرأسي للطبقات يعرف بالفالق",
      answers: ["ذو حركةافقية", "عادى", "معكوس", "خسفى"],
      correctAnswer: 1
    },
    {
      question: "اذا اشترك فالقان عاديان في الحائط السفلي يتكون فالق ",
      answers: ["الدسر", "الحوضى", "البارز", "المعكوس"],
      correctAnswer: 3
    },
    {
      question: "يعزى تكوين حمام فرعون على الساحل الشرقي لخليج السويس إلى حدوث",
      answers: ["ظاهرة التطبق في الصخور الرسوبية", "ثنى فى مجموعة من الصخور الرسوبية", "كسر فى مجموعة الصخور دون حدوث إزاحة", "كسر فى مجموعة من الصخور الرسوبية مع حدوث إزاحة"],
      correctAnswer: 3
    },
    {
      question: "عند حدوث كسر بالصخور دون تغير موضع الكتل الصخرية تتكون ",
      answers: ["فواصل", "فوالق", "طيات", "تطبق"],
      correctAnswer: 1
    },
    {
      question: "الكسور التي يصاحبها تحرك للكتل المهشمة تنتج بفعل",
      answers: ["قوة شد فقط ", "قوة ضغط فقط", "شد وضغط معا", " قوه شد او قوى ضغط فقط"],
      correctAnswer: 4
    },
    {
      question: "الفالق التى لا تتوقع حدوث إزاحة رأسية في صخوره المهشمة هو  الفالق",
      answers: ["المعكوس", "العادى", "الساتر", "ذو حركة افقية"],
      correctAnswer: 4
    },
    {
      question: "اى الفوالق الآتية مختلف في نوع القوى التي تنتج عنه",
      answers: ["الفالق العادى ", "الفالق الدسر", "الفالق  البارز", "الفالق الخندقى"],
      correctAnswer: 2
    },
    {
      question: "يحدث الفالق الدسر نتيجة",
      answers: ["ضغط وشد على الطبقات في نفس الوقت", "ضغط مؤثر على الطبقات", "ضغط والتواء الطبقات", "شد مؤثر على الطبقات"],
      correctAnswer: 2.
    },
    {
      question: "قوة الشد التكتونية تسبب",
      answers: ["فالق دسر", "فالق معکوس", "طية محدبة", "فالق ساتر"],
      correctAnswer: 1
    },
    {
      question: "تحرك الصخور المحصورة بين فالقين عاديين لأسفل يعرف بالفالق",
      answers: ["الخسفى", "الساتر", "الدسر", "ذو الحركة الأفقية"],
      correctAnswer: 1
    },
    {
      question: "إزاحة كتل الصخور المتجاورة نتيجة تعرضها للضغط والتشقق يسبب.",
      answers: ["فواصل", "فوالق عادية", "فوالق دسرية ", "طيات"],
      correctAnswer: 3
    },
    {
      question: "إلتواء طبقات القشرة الأرضية لأسفل نتيجة تعرضها لضغط ومع زيادة الضغط ينتج عنه",
      answers: ["طية مقعرة وفالق معكوس", "طية محدبة وفالق عادي", "طية محدبة وفالق عادي", "طية مقعرة وفالق عادي"],
      correctAnswer: 1
    },
    {
      question: "التراكيب التى تعد اماكن تجمع زيت البترول",
      answers: ["التدرج الطبقى", "التطبق المتقاطع", "الفواصل", "السواتر"],
      correctAnswer: 4
    },
    {
      question: "تختلف الفواصل والفوالق في",
      answers: ["أنها تراكيب تكتونية", "مقدار الإزاحة", "انها كسر فى كتل الصخور", "إنها ذات أهميةللبشر"],
      correctAnswer: 2
    },
      {
      question: "التركيب الجيولوجى الذى توجد به الطبقة القديمة محاطة بطبقات  الاحدث مما يلى هو  ",
      answers: ["الفالق الخسفي ", "الفالق البارز ", "الفالق الدسر", "الطية المقعرة"],
      correctAnswer: 2
    },
    {
      question: "اذا تواجدت صخور حائطين سفليين على  جانبى حائط علوى  يكون  الفالق المتكون فالق",
      answers: ["دسر ", "بارز", "خسفى", "معكوس"],
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
(function() {
  "use strict";

  let questions = [
    {
      question: "العلم الأساسي الذي يهتم بالبحث عن خامات الذهب والحديد هو علم ",
      answers: ["الجيوكيميا.","الطبقات","الجيوفيزياء"," الجيولوجيا الطبيعية"],
      correctAnswer: 3
    },
    {
      question: "فرع الجيولوجيا الذي تعتمد عليه أساسا عند بناء ناطحة سحاب هو ",
      answers: ["الجيوكيمياء"," الجيولوجيا الطبيعية","الجيوفيزياء"," الجيولوجيا الهندسية"],
      correctAnswer: 4
    },
    {
      question: "يمكن تحديد عمر الصخور الرسوبية من خلال دراسة علم ",
      answers: ["المعادن","الجيوفيزياء","الترسيب","الحفريات"],
      correctAnswer: 4
    },
    {
      question: "العلم الذي يدرس الصخور التي تنضج فيها المواد العضوية اللازمة لتوليد الطاقة هو علم ",
      answers: ["الجيولوجيا الهندسية","الجيوكيمياء","الجيوفيزياء"," جيولوجيا البترول      "],
      correctAnswer: 4
    },
    {
      question: "لجيولوجيا الذي تعتمد عليه أساسا في الاستدلال على طبيعة البيئة الساحلية للشعاب المرجانية  هو علم ",
      answers: ["المعادن","الأحافير","الجيوكيمياء","الجيوفيزياء"],
      correctAnswer: 2
    },
    {
      question: "يستدل على أن نسبة عناصر مجموعة السيليكات تمثل 98.5% من وزن القشرة الأرضية من دراسة ",
      answers: ["الجيولوجيا الطبيعية"," الجيولوجيا التركيبية","الجيوفيزياء","الجيوكيمياء"],
      correctAnswer: 4
    },
    {
      question: "العلم الذي يدرس الخواص الفيزيائية والكيميائية للهيماتيت هو علم",
      answers: [" الجيولوجيا الطبيعية","المعادن والبلورات ","الجيولوجيا الهندسية"," الجيولوجيا التركيبية"],
      correctAnswer: 2
    },
    {
      question: "العلم الذي يدرس تأثير كل من البحيرات والحركات الأرضية والأنهار على الصخور هو علم",
      answers: ["الطبقات","الجيوكيمياء"," المياه الجوفية","الجيولوجيا الطبيعية"],
      correctAnswer: 4
    },
    {
      question: "يبلغ سمك صخور القشرة الأرضية تحت البحار المفتوحة والمحيطات حوالي ",
      answers: [" 10 كم","50 كم","60 كم","15 كم"],
      correctAnswer: 1
    },
    {
      question: "يبلغ سمك القشرة الأرضية حوالي   ",
      answers: ["8 : 12 كم","8 : 60 كم","12 : 100 كم","60 : 100 كم"],
      correctAnswer: 2
    },
    {
      question: "تمثل نسبة الوشاح من حجم صخور الأرض حوالي .",
      answers: ["1 / 6","4 / 5","1 / 3","1 / 2"],
      correctAnswer: 2
    },
    {
      question: "التحليل الجيوكيميائي لمكونات القشرة الأرضية يوضح أن المكونات الغالية فيها هي         ",
      answers: [" سيليكا وصوديوم ويوتاسيوم","حديد وبوتاسيوم وماغنيسيوم","حديد وكالسيوم وبوتاسيوم","سيليكا وألومنيوم وماغنيسيوم"],
      correctAnswer: 4
    },
    {
      question: "الأسيتوسفير يتكون من أكاسيد الحديد والماغنيسيوم والسيليكون في حالة        .",
      answers: ["صلبة","سائلة","شبه غازية"," شبه صلبة"],
      correctAnswer: 4
    },
    {
      question: " الطبقة الأرضية التي يعادل حجمها حوالي 16.7% من حجم الأرض هي .  .",
      answers: ["القشرة الأرضية"," الأسينوسفير","النواة"," الوشاح"],
      correctAnswer: 3
    },
    {
      question: "الطبقة التي لها دور في حركة القارات هي       .",
      answers: [" القشرة الأرضية"," اللب الخارجي"," الجزء اللدن من الوشاح"," الجزء الصلب من الوشاح"],
      correctAnswer: 3
    },
    {
      question: "يتشابه الوشاح السفلي مع اللب الداخلي في   ",
      answers: ["الحجم","الضغط"," الحالة الفيزيائية","التركيب المعدني"],
      correctAnswer: 3
    },
    {
      question: "دوران مصهور الحديد والنيكل في اللب الخارجي هو السبب في        .",
      answers: [" حركة الألواح التكتونية","أصل المجال المغناطيسي للأرض","انتشار دوامات تيارات الحمل","  نشأة الغلاف الجوي للأرض"],
      correctAnswer: 2
    },
    {
      question: "الصخر الذي تبلغ كثافته حوالی 13.9 جم/سم3 يرجح انتمائه إلى       .",
      answers: ["الي الخارجي"," اللب الداخلي","الوشاح"," القشرة المحيطية"],
      correctAnswer: 2
    },
    {
      question: "أي العبارات الآتية تعبر عن لب الأرض ؟ .",
      answers: [" الجزء العلوي منه لان مانع"," يتكون من الحديد والماغنيسيوم"," يتسبب في وجود المجال المغناطيسي للأرض","يتكون من صخور نارية ورسوبية ومتحولة"],
      correctAnswer: 3
    },
    {
      question: "القشرة القارية أكثر سمكا من القشرة المحيطية» ، «القشرة المحيطية أقل كثافة من القشرة القارية»  من خلال الجملتين السابقتين نجد أن",
      answers: [" الجملة الأولى صواب والجملة الثانية صواب"," الجملة الأولى صواب والجملة الثانية خطأ"," الجملة الأولى خطأ والجملة الثانية خطأ","الجملة الأولى خطأ والجملة الثانية صواب"],
      correctAnswer: 2
    },
    {
      question: "ند أخذ قطاع في الكرة الأرضية فمن المتوقع أن تقابلنا صخور صلبة من أكاسيد الحديد والماغنيسيومعلى عمق حوالي .",
      answers: [" 40 كم"," 250 کم","500 كم","5050 کم"],
      correctAnswer: 3
    },
    {
      question: "تبلغ النسبة بين الكتلة إلى الحجم حوالي عشرة جرامات لكل سم3 في .",
      answers: [" القشرة الأرضية","الوشاح"," اللب الخارجي"," اللب الداخلي"],
      correctAnswer: 3
    },
    {
      question: "من المتوقع أن تكون درجة الحرارة والضغط الموجودة في المنطقة أسفل الوشاح حوالي   ",
      answers: ["3500° و 0.4 مليون ضغط جوی","3500°م و 3 ملیون ضغط جوی"," 5000° و 0.4 ملیون ضغط جوی","5000° و 3 مليون ضغط جوی"],
      correctAnswer: 4
    },
    {
      question: "يعتقد أن داخل الأرض عند عمق 3500 كم يكون     ",
      answers: ["مصهور عند درجة حرارة حوالي 4400°م"," صلب عند درجة حرارة حوالي 4400° م","مصهور عند درجة حرارة 5400° م","صلب عند درجة حرارة 5400°م"],
      correctAnswer: 3
    },
    {
      question: "الضغط الواقع عند الحد الفاصل بين اللب الخارجي واللب الداخلي للأرض يتوقع أن يبلغ .",
      answers: ["1.2 ملیون ضغط جوی"," 1.5 مليون ضغط جوی","2.1 ملیون ضغط جوی","3.5 ملیون ضغط جوی"],
      correctAnswer: 4
    },
    {
      question: "يرجع التوازن بين القشرة المحيطية والقارية إلى أن القشرة القارية       .",
      answers: ["أكبر سمك وأقل كثافة","أقل سمك وأقل كثافة","أقل سمك وأكبر كثافة"," أكبر سمك وأكبر كثافة"],
      correctAnswer: 1
    },
    {
      question: " كتلة لب الأرض كبيرة بالنسبة لحجمه بسبب        ",
      answers: ["أن سمكه أكبر من الوشاح"," تركيبه المعدني"," وجود لب خارجی مصهور وداخلی صلب"," أن درجة حرارته مرتفعة جدا"],
      correctAnswer: 2
    },
    {
      question: "النطاق المحصور بين الطبقة المكونة مـن السيليكا والماغنيسيوم والطبقة الصلبة من أكاسيد الحديد والماغنيسيوم والسيليكون هو        ",
      answers: ["الوشاح السفلي"," اللب الخارجي"," الوشاح العلوي"," القشرة المحيطية"],
      correctAnswer: 3
    },
    {
      question: " على عمق 200 كم أسفل القشرة الأرضية تكون الحالة الفيزيائية الصخور   ",
      answers: ["صلبة","سائلة","شبه غازيه","شبه صلبه"],
      correctAnswer: 4
    },
    {
      question: " تباين درجة حرارة الأرض الداخلية في الوشاح هي المصدر الأساسي للطاقة التي",
      answers: [" تدفئ الجزء السفلي من الغلاف الجوى","تذيب الجليد على ارتفاعات منخفضة","تحرك الألواح الصخرية"," تلوث المياه الجوفية العميقة بالمواد المشعة"],
      correctAnswer: 3
    },
    {
      question: " الطبقة الأرضية التي تتكون من أنواع الصخور الثلاثة يبلغ حجمها بالنسبة لحجم الأرض حوالي .",
      answers: ["20 %","80%","17%","3 %"],
      correctAnswer: 4
    },
    {
      question: "يبلغ مجموع نسب حجم صخور الوشاح واللب بالنسبة لحجم صخور الأرض حوالي",
      answers: ["50 %","75 %","97 %","99.3 %"],
      correctAnswer: 3
    },
    {
      question: "اللب الخارجي واللب الداخلي",
      answers: ["كثافتهما متساوية وسمكهما مختلف","كثافتهما مختلفة وسمكهما متساوي","متماثلان في الحالة الفيزيائية والسمك","مختلفان في السمك والحالة الفيزيائية والكثافة"],
      correctAnswer: 4
    },
    {
      question: " تتكون الطبقة التي تقع على عمق حوالي 5050 كم من سطح الأرض من .",
      answers: [" سيليكا وماغنيسيوم"," سيليكا وألومنيوم"," حديد وماغنيسيوم"," حديد ونيكل"],
      correctAnswer: 4
    },
    {
      question: "عند أي عمق أسفل القشرة الأرضية يوجد تقريبا الحد الفاصل بين اللب الخارجي واللب الداخلي ؟",
      answers: ["  3486"," 2900 کم","5000 كم"," 6386كم"],
      correctAnswer: 3
    },
    {
      question: " أي مما يلي تعتقد أن العلماء قاموا باستخدامه لتجميع أدلة عن الحالة الفيزيائية لمركز الأرض ؟",
      answers: ["قياس جاذبية الأرض بالأقمار الصناعية"," دراسة انتقال موجات الزلازل خلال الأرض"," تحليل قياسات حرارة الأرض السطحية"," تحليل التركيب الكيميائي للنيازك القديمة"],
      correctAnswer: 2
    },
    {
      question: "تنتقل الحرارة خلال طبقة الأسينوسفير عن طريق",
      answers: ["التلامس","الإشعاع","الحمل","التوصيل"],
      correctAnswer: 3
    },
    {
      question: "*تبلغ نسبة حجم الوشاح بالنسبة لحجم لي الأرض حوالي ",
      answers: ["5 :1 ","6 : 1","3 : 1","2 : 1"],
      correctAnswer: 1
    },
    {
      question: "يكون الضغط الواقع على عمق 2500 كم أسفل الوشاح حوالي ",
      answers: ["1 مليون ض.ج","2 مليون ض.ج"," 3 مليون ض.ج","4 مليون ض.ج"],
      correctAnswer: 3
    },
    {
      question: "يبلغ معدل الضغط الواقع على صخور داخل الأرض كثافتها تتراوح بين 9.9 : 12.12 جم/سم3حوالی ",
      answers: ["0.2 : 1.4 مليون ض.ج","0.8 : 2.3 ملیون ض.ج"," 1.4 : 3 مليون ض.ج","2.9 : 3.2 ملیون ض.ج"],
      correctAnswer: 4
    },
    {
      question: "أكبر قيمة للضغط الجوي بالنسبة لسطح البحر تكون على ارتفاع.",
      answers: [" 10 کم "," 100 کم","1000 کم ","صفر کم"],
      correctAnswer: 4
    },
    {
      question: "الفضاء الكوني يحيط بالكرة الأرضية ويبتعد عن الأرض بحوالي",
      answers: [" 800 کم","850 كم","950 کم","1050 كم"],
      correctAnswer: 4
    },
    {
      question: "استنتج العلماء تكون المياه على الأرض نتيجة تكثف بخار الماء الذي نتج من",
      answers: ["تفاعل بعض مكونات الغلاف الجوى","انفجارات البراكين القديمة"," تبخر المياه أثناء حقب الحياة القديمة","تيارات الحمل في الأسينوسفير"],
      correctAnswer: 2
    },
    {
      question: "نسبة غاز الأكسجين في الهواء الجوى تمثل من حجم الهواء حوالي ",
      answers: ["3/4","1/2","1/10","1/5"],
      correctAnswer: 4
    },
    {
      question: "تبلغ المسافة بين قمة جبل وسفحه حوالي 8840 متر، فإن هذه المسافة تنسب إلى",
      answers: ["مستوى سطح الأرض","مستوى سطح البحر"," منسوب مياه الأنهار"," منسوب سطح بحيرة قريبة"],  
          correctAnswer: 2
    },
    {
      question: "استنتج العلماء أن أصل الغلاف الجوي للأرض تكون نتيجة ",
      answers: ["انطلاق الغازات من البراكين القديمة"," تعرض سطح الأرض لعمليات التعرية  تبخر مياه البحار والمحيطات","التحلل الإشعاعي للعناصر في لب الأرض"],
      correctAnswer: 1
    },
    {
      question: "النيتروجين عنصر ذو كثافة مرتفعة لذلك يوجد ",
      answers: ["بكثرة في الطبقات السفلي من الغلاف الجوى"," بكثرة في الطبقات العليا من الغلاف الجوى","  بنفس النسبة على الارتفاعات المختلفة من الغلاف الجوى"],
      correctAnswer: 1
    },
    {
      question: "بنسبة قليلة في الغلاف الجوىنسبة (O2) في الهواء الجوي أعلى جبال الهيمالايا يكون تقريبا .",
      answers: ["78 %","أكثر من 78 %","21%","أقل من 21 %"],
      correctAnswer: 4
    },
    {
      question: "هبط رجل من طائرة على ارتفاع 11 كم بمظلة إلى ارتفاع 5.5 كم، فيكون الفرق في الضغط الجوي الواقع على جسمه حوالي",
      answers: ["1 ض.ج","0.5 ض.ج","0.25 ضغط جوي","0.125 ضغط جوي"],
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
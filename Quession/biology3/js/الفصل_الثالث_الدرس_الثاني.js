(function() {
  "use strict";

  let questions = [
    {
      question: "الكائنات التالية تكون حوصلة، لاقحة جرثومية، جراثيم على الترتيب ؟",
      answers: ["أسبيروجيرا / فوجير / عيش الغراب أميبا / أسبيروجيرا / عفن الخبز"," عفن الخبز / أسبيروجيرا / أميبا"," عفن الخبز / فوجير / أسبيروجيرا"],
      correctAnswer: 3
    },
    {
      question: "أي مما يلى من الكائنات أحادية المجموعة الصبغية وتتكاثر جنسيا ؟",
      answers: ["الهيدرا والأرنب","ذكر حشرة المن وطحلب الأسبيروجيرا طحلب الأسبيروجيرا ذكر نحل العسل"," ملكة نحل العسل والطور المشيجي للفوجير"],
      correctAnswer: 3
    },
    
       
    
    {
      question: "",
      answers: [""],
      correctAnswer: 3
    },
    {
      question: " يتكاثر طحلب الأسبيروجيرا لاجنسيا في حالة",
      answers: ["تغیر درجة حرارة الماء","تغير نقاوة الماء","التعرض للجفاف","وفرة الماء"],
      correctAnswer: 3
    },
    {
      question: "في دورة حياة طحلب الأسبيروجيرا يختلف الزيجوسبور عن الزيجوت في",
      answers: [" عدد المجموعات الصبغية"," القدرة على تحمل الظروف القاسية","نوع الاقتران","نوع التكاثر"],
      correctAnswer: 3
    },
    {
      question: "يعتمد التكاثر الجنسي في الأسبيروجيرا على حدوث",
      answers: ["الانقسام الميوزي فقط","الانقسام الميوزي يليه الانقسام الميتوزي","الانقسام الميتوري فقط","الانقسام الميتوري يليه الانقسام الميوزي"],
      correctAnswer: 3
    },
    {
      question: "   كم عدد الزيجوسبورات الناتجة من تكاثر جميع خلايا خيطين من طحلب الأسبيروجيرا أحدهما به ۸ خلايا  والآخر به ۱۰ خلايا عند حدوث جفاف في بركة ؟",
      answers: ["8","9","10","18"],
      correctAnswer: 3
    },
    {
      question: "أي مرحلة من مراحل التكاثر الجنسي يستحيل حدوثها في الاقتران ؟",
      answers: ["مرحلة الهجرة"," مرحلة الاندماج","مرحلة تكوين الزيجوت"," مرحلة تكوين الجاميتات"],
      correctAnswer: 3
    },
    {
      question: "",
      answers: [""],
      correctAnswer: 3
    },
    {
      question: "لماذا لا يعتبر الاقتران الجانبي تكاثر لاجنسي رغم أنه يتم بفرد واحد ؟",
      answers: ["لأنه يزيد من عدد الكروموسومات"," لأنه يتم في ظروف غير مناسبة","لأنه يتم باندماج الأمشاج","لأنه يعتمد على الانقسام الميوزي"],
      correctAnswer: 3
    },
    {
      question: "لاحظ أحد الطلاب أن بحيرة الماء العذب ذات الماء الرائق قد تغطت بالريم الأخضر خلال فترة وجيزة، يمكن تفسير ذلك لتكاثر طحلب الأسبيروجيرا",
      answers: ["لاجنسيا بالتقطع","لاجنسيا بالتبرعم","جنسيا بالاقتران","جنسيا بالأمشاج"],
      correctAnswer: 3
    },
    {
      question: " أي الكائنات التالية لا يتكاثر بنوعي التكاثر ؟",
      answers: ["الأسفنج","الهيدرا","طحلب الأسبيروجيرا","ذكر نحل العسل"],
      correctAnswer: 3
    },
    {
      question: "إذا حدث اقتران بين جميع خلايا خيطين من طحلب الأسبيروجيرا أحدهما يحتوي على 10 خلايا والاخر يحتوى على 6 خلايا ، فكم عدد اللاقحات المتكونة عن طريق الاقتران الجانبي ؟",
      answers: ["2","3","4","8"],
      correctAnswer: 3
    },
    {
      question: "أي الحالات التالية يكون فيها أعلى تنوع بيولوچی ؟",
      answers: ["الانشطار الثنائي في البراميسيوم","الاقتران السلمي في الأسبيروجيرا زراعة الأنسجة في نبات الطباق","الاقتران الجانبي في الأسبيروجيرا"],
      correctAnswer: 3
    },
    {
      question: " يرتبط حدوث التكاثر الجنسي دائما ب",
      answers: ["وجود الأمشاج","وجود فردین مختلفين في الجنس","حدوث تنوع وراثی کبیر","تكوين زيجوت"],
      correctAnswer: 3
    },
    {
      question: "ما طريقة التلقيح في كل من أسماك البلطى والسلاحف على الترتيب",
      answers: [" داخلی / خارجی"," خارجی / داخلی","داخلی / داخلی","خارجی / خارجی"],
      correctAnswer: 3
    },
    {
      question: "الكائنات الحية التالية لا يتكاثر جنسيا بالأمشاج ؟",
      answers: ["الأسبيروجيرا","الفوجير","البلازموديوم","حشرة المن"],
      correctAnswer: 3
    },
    {
      question: "قيم تشترك الخلايا المسئولة عن نقل المادة الوراثية في كل من (الإنسـان - الطيور – الثعابين – الضفادع - الأسماك - الفئران) ؟",
      answers: ["قدرتها على السباحة في الماء","الإخصاب الداخلي ","الإخصاب الخارجي  ","أنها أحادية العدد الصبغي"],
      correctAnswer: 3
    },
    {
      question: "الانقسام الميوزي ------- الاقتران و ------- الإخصاب.",
      answers: ["يسبق – يلى","يسبق – يسبق","يلى - يسبق"," یلی – يلی"],
      correctAnswer: 3
    },
    {
      question: " أي الحالات التالية لابد فيها من وجود فردين لإحداث التكاثر الجنسي ؟",
      answers: ["الاقتران الجانبي للأسبيروجيرا","النبات المشيجي للفوجير"," الزهرة الخنثى","حشرة نحل العسل"],
      correctAnswer: 3
    },
    {
      question: "  ما مدى صحة العبارتين التاليتين، «كل الأمشاج تتكون بالانقسام الميوزي»، «الانقسام الميوزي يختزل  عدد الصبغيات إلى النصف» ؟",
      answers: ["العبارتان صحيحتان وبينهما علاقة","العبارتان صحيحتان وليس بينهما علاقة","العبارة الأولى صحيحة والعبارة الثانية خطأ"," العبارة الأولى خطأ والعبارة الثانية صحيحة"],
      correctAnswer: 3
    },
    {
      question: " كيف ينتقل مرض الملاريا إلى الشخص السليم ؟",
      answers: ["عن طريق رذاذ الشخص المصاب بالملاريا","عن طريق دم الشخص المصاب بالأنيميا"," عن طريق لعاب أنثى بعوضة الأنوفيليس المصابة","عن طريق دم أنثى بعوضة الأنوفيليس المصابة"],
      correctAnswer: 3
    },
    {
      question: "ما الهدف من التكاثر اللاجنسي للبلازموديوم في البعوضة ؟",
      answers: ["تكوين الأطوار المشيجية"," تكوين الأسبوروزويتات","تكوين الميروزويتات","تكوين الطور الحركي"],
      correctAnswer: 3
    },
    {
      question: "ما الطور المعدى لأنثى بعوضة الأنوفيليس في دورة حياة بلازموديوم الملاريا ؟",
      answers: ["الأسبوروزويتات"," الأطوار المشيجية","اللاقحة"," الطور الحركي"],
      correctAnswer: 3
    },
    {
      question: "إذا كان عدد الصبغيات في نواة الأسبوروزويت هو (س)، فكم عدد الصبغيات في نواة الميروزويت ؟",
      answers: ["١/ ٢س","س","٢س","٣س"],
      correctAnswer: 3
    },
    {
      question: "كيف يتكون الطور المعدي للإنسان في دورة حياة بلازموديوم الملاريا ؟",
      answers: ["بالانقسام الميتوزي لنواة كيس البيض","بالانقسام الميتوزي للميروزويتات"," بالانقسام الميوزي لنواة الزيجوت"," بالانقسام الميوزي لنواة كيس البيض"],
      correctAnswer: 3
    },
    {
      question: " ما الهدف الأساسي لتكوين الأسبوروزويتات في أنثى بعوضة الأنوفيليس ؟",
      answers: ["زيادة عدد البلازموديوم"," تحمل الظروف القاسية","سرعة الانتشار"," نقل العدوى للإنسان"],
      correctAnswer: 3
    },
    {
      question: "فيم يتشابه الطور المعدى لكل من أنثى بعوضة الأنوفيليس والإنسان في دورة حياة بلازموديوم الملاريا ؟",
      answers: ["مكان وجوده","مكان تكوينه","طريقة تكوينه","عدده الصبغي"],
      correctAnswer: 3
    },
    {
      question: "أي مما يلى يمكن رؤيته عند فحص دم شخص مصاب بالملاريا ؟",
      answers: ["الاسبوروزويتات والأمشاج المؤنثة","الميروزويتات فقط","المبروزويتات والأمشاج المذكرة","الزيجوت فقط"],
      correctAnswer: 3
    },
    {
      question: "الفترة التي يطلق عليها فترة الحضانة عند إصابة إنسان بالملاريا هي الفترة منـذ إصابـة الإنسان وحتى",
      answers: [" تكوين الميروزويتات في الكبد","تحرر الميروزويتات من خلايا الدم الحمراء لأول مرة","اندماج الأمشاج في معدة البعوضة","تكوين كيس البيض خارج معدة البعوضة"],
      correctAnswer: 3
    },
    {
      question: "أي مما يلى يتكون بالتحول (دون انقسام) أثناء دورة حياة البلازموديوم ؟",
      answers: ["الميروزويتات والطور الحركي","الأطوار المشيجية والأسبوروزويتات","الزيجوت والأطوار المشيجية","الأطوار المشيجية والطور الحركي"],
      correctAnswer: 3
    },
    {
      question: "ما المكان الذي يحدث فيه تكوين ونضج للأطوار المشيجية في دورة حياة البلازموديوم ؟",
      answers: ["دم الإنسان","معدة البعوضة","دم الإنسان ومعدة البعوضة على الترتيب","معدة البعوضة ودم الإنسان على الترتيب"],
      correctAnswer: 3
    },
    {
      question: "ما مدى صحة العبارتين التاليتين،«كل مريض ملاريا مصاب بأنيميا»، «كل مريض أنيميا مصاب بالملاريا)",
      answers: ["العبارتان صحیحنان"," العبارة الأولى صحيحة والعبارة الثانية خطأ"," العبارة الأولى خطأ والعبارة الثانية صحيحة","العبارتان خطأ"],
      correctAnswer: 3
    },
    {
      question: "إذا علمت أن العامل الأساسي للطفيل هو الذي يتم فيه اندماج الأمشاج، فإن العامل الوسيط في دورة حياة البلازموديوم ",
      answers: ["يكون الإنسان فقط"," أنثى أو ذكر بعوضة الأنوفيليس","أنثي بعوضة الأنوفيليس فقط"," ذكر بعوضة الأنوفيليس فقط"],
      correctAnswer: 3
    },
    {
      question: "إذا تم إبادة كل إناث حشرات الأنوفيليس قد يحدث جميع ما يلي ماعدا",
      answers: ["انقراض البلازموديوم","استمرار المرض في الأفراد المصابة فقط ولا ينتشر","زيادة التنوع الوراثي للبلازموديوم","استمرار انتقال المرض بالعدوى عن طريق نقل الدم المصاب"],
      correctAnswer: 3
    },
    {
      question: "أي مما يلي لا يتناسب مع مكان وجوده ؟",
      answers: ["الميروزويتات - كريات الدم الحمراء","الأسبوروزويتات - لعاب البعوضة"," الأطوار المشيجية - الغدد اللعابية للبعوضة","الزيجوت - معدة البعوضة"],
      correctAnswer: 3
    },
    {
      question: "أي مما يلي لا يصاحب مرض الملاريا ؟",
      answers: ["شحوب الوجه"," نقص الأكسجين في الخلايا","نقص هيموجلوبين الدم"],
      correctAnswer: 3
    },
    {
      question: "اثناء دورة حياة بلازموديوم الملاريا، أين يتم إنتاج الأطوار ثنائية المجموعة الصبغية ؟",
      answers: ["في الغدد اللعابية لأنثى بعوضة الأنوفيليس","في معدة أنثى بعوضة الأنوفيليس"," في كريات الدم الحمراء للإنسان","في كبد الإنسان"],
      correctAnswer: 3
    },
    {
      question: "ما المدة الزمنية التي يحتاجها طفيل بلازموديـوم الملاريا لكي يتكرر ظهور الأعراض 5 مرات متتالية على شخص مصاب ؟",
      answers: ["شهر"," 10 أيام","5 أيام"," أسبوعين"],
      correctAnswer: 3
    },
    {
      question: " أي مما يلى لا يتكون في دورة حياته لاقحة ؟",
      answers: ["الهيدرا","كزبرة البئر","الأميبا","البلازموديوم"],
      correctAnswer: 3
    },
    {
      question: "تتكون أمشاج ذكر نحل العسل بالانقسام وتتكون أمشاج الفوجير بالانقسام",
      answers: ["الميتوزي - الميتوزي"," الميتوزي - الميوزي","الميوزي - الميتوزي"," الميوزي - الميوزي"],
      correctAnswer: 3
    },
    {
      question: "أي من التراكيب التالية بدورة حياة الفوجير يتكون بالانقسام الميوزي ؟",
      answers: ["الجراثيم","البويضة","السابحات الذكرية","الطور الجرثومي"],
      correctAnswer: 3
    },
    {
      question: "أي مما يلى لا يساهم فيه الماء أثناء دورة حياة سرخس الفوجير ؟",
      answers: ["وصول جراثيم الطور الجرثومي لأماكن إنباتها"," إنبات الجرثومة المتحررة من الحوافظ الجرثومية"," وصول السابحات المهدية إلى الأرشيجونيا الناضجة","تكوين غذاء للنبات المشيجي والجرثومي"],
      correctAnswer: 3
    },
    {
      question: "تحسين وتنوع الصفات الوراثية في الفوجير يحدث عند تكوين",
      answers: [" الحوافظ الجرثومية","السابحات الذكرية","البويضة","اللاقحة"],
      correctAnswer: 3
    },
    {
      question: "أي الكائنات التالية يقوم بالتكاثر الجنسي رغم وجود فرد واحد ؟",
      answers: ["طحلب الأسبيروجيرا والطور المشيجي لكزبرة البئر"," طحلب الأسبيروجيرا وأسبوروزويتات بلازموديوم الملاريا","الطور المشيجي والطور الجرثومي لكزبرة البئر","الطور الجرثومي لسرخس الفوجير وميروزويتات بلازموديوم الملاريا"],
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
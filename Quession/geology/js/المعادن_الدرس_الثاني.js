(function() {
  "use strict";

  let questions = [
    {
      question: "الدرجة التي يعكس بها المعدن الضوء توصف بخاصية....",
      answers: ["البريق","الخدش","الكسر"," الصلادة"],
      correctAnswer: 1
    },
    {
      question: "تغير طول الموجة الضوئية المرتدة من المعدن عند تحريكه أمام العين يعرف بـ .............",
      answers: ["تلاعب الألوان","البريق"," الشفافية"," المخدش"],
      correctAnswer: 1
    },
    {
      question: "من المعادن متعددة الألوان ...",
      answers: ["الكوارتز والكبريت","السفاليرايت والكبريت"," الكوارتز والمالاكيت"," الكوارتز والهيماتيت"],
      correctAnswer: 4
    },
    {
      question: "السفاليرايت البني تركيبه هو...",
      answers: ["زنك"," كبريتيد الزنك","حديد","كبريتيد الحديد"],
      correctAnswer: 2
    },
    {
      question: "تميز بعض الأحجار الكريمة بخاصية ............ ....",
      answers: ["التبلر","الانفصام","المخدش","عرض الألوان"],
      correctAnswer: 4
    },
    {
      question: " المركب الذي يعد السبب الأساسي في اكتساب الأمينيست اللون البنفسجي يتكون من عنصرين هما ....",
      answers: ["الأكسجين، الحديد","المنجنيز، الحديد","الزنك ، والحديد"," الحديد، الكربون"],
      correctAnswer: 1
    },
    {
      question: "يتغير لون البور الصخري إلى اللون الوردي بسبب ..............",
      answers: [" كسر بعض الروابط بين ذرات عناصره"," وجود فقاعات غازية كثيرة"," وجود شوائب من المنجنيز"," وجود شوائب من أكاسيد الحديد"],
      correctAnswer: 3
    },
    {
      question: "أحد معادن الكبريتيدات له لون أصفر شفاف في الحالة النقية هو معدن ................",
      answers: [" البيريت"," الجالينا"," السفاليرايت","الكبريت"],
      correctAnswer: 3
    },
    {
      question: "معظم الأسطح اللامعة الصلبة الملساء .............",
      answers: ["تشتت الضوء"," تمرر الضوء"," تعكس الضوء","تمتص الضوء"],
      correctAnswer: 3
    },
    {
      question: "المعدن الذي يتم التنقيب عنه كمصدر لعنصر الزنك (Zn) هو .............",
      answers: ["الهيماتيت","الكالسيت"," السفاليرايت"," المالاكيت"],
      correctAnswer: 3
    },
    {
      question: "الترتيب التنازلي الصحيح للمعادن بحسب درجة البريق هو .............",
      answers: ["الانهيدريت   - الجالينا - الأوليفين"," الكولينيت - الكوارتز - الذهب","البيريت - الفلسبار ــ الكاولينيت","الميكا ــ النحاس ــ الجيس"],
      correctAnswer: 3
    },
    {
      question: "عند خدش قطعة من الكوارتز الوردي وأخرى من الكوارتز اللبني يكون لون مخدشهما...",
      answers: ["وردی","لبنی"," أبيض","رمادی"],
      correctAnswer: 3
    },
    {
      question: "عند تداخل أحد العناصر التي تترسب على سطح الفالق مع الكوارتز، يظهر الكوارتز باللون .............",
      answers: ["الرمادي","  الوردي"," الشفاف"," الأبيض"],
      correctAnswer: 3
    },
    {
      question: "الخاصية الفيزيائية التي تظهر في عينة من معدن البيريت بدون استخدام أي أدوات هي ...........",
      answers: ["تغير اللون الأصفر إلى أخضر"," البريق الفلزي"," الانفصام المكعبي"," القابلية للسحب والطرق"],
      correctAnswer: 2
    },
    {
      question: "أي من المعدن التالية أكثر صلادة ؟...",
      answers: [" التلك","الارثوكليز"," المرو","الفلوريت"],
      correctAnswer: 3
    },
    {
      question: "معدن من المعادن العنصرية له انفصام في مستوى واحد هو معدن ..............",
      answers: ["الميكا","الجرافيت"," الكبريت","الماس"],
      correctAnswer: 2
    },
    {
      question: "يمكن لمعدن الأباتيت أن يخدش ....",
      answers: ["الكوارتز ","التلك","التوباز"," الماس"],
      correctAnswer: 2
    },
    {
      question: "المعدن الذي لا يخدشه التوباز هو...",
      answers: ["الجبس","الكالسيت","الكوراندوم"," القلوريت"],
      correctAnswer: 3
    },
    {
      question: "صلادة ظفر الإنسان تقع بين صلادة كل من ................",
      answers: ["التويات والكوراندوم"," التلك والجبس"," الكوارتز والتوباز","الجبس والكالسيت"],
      correctAnswer: 4
    },
    {
      question: "تبلغ صلادة البلور الصخري...",
      answers: ["3","5","7","8"],
      correctAnswer: 3
    },
    {
      question: "يمكن خدش الأرثوكليز عن طريق...",
      answers: [" ظفر الإنسان","العملة النحاسية"," اللوح الخرفي","قطعة الزجاج"],
      correctAnswer: 3
    },
    {
      question: "أي العبارات التالية صحيحة ؟...",
      answers: ["الفلوريت يخدش الجبس"," الكالسيت يخدش الفلوريت"," التلك يخدش الكالسيت","  الملك يخدش الفلوريت"],
      correctAnswer: 1
    },
    {
      question: "يتم معرفة نوع الانفصام في المعادن من خلال...",
      answers: [" الصلادة والمخدش"," عدد مستويات الانفصام والزوايا بينها","عدد الزوايا ومكسر المعدن"," أطوال المحاور والزوايا بينها"],
      correctAnswer: 2
    },
    {
      question: "معدن له مكسر مداری استخدمه إنسان العصر الحجري وهو ...............",
      answers: ["الكوارتز"," الصوان"," الهيماتيت","الليمونيت"],
      correctAnswer: 2
    },
    {
      question: "المعدن الذي لا تظهر فيه خاصية الانفصام هو ................",
      answers: ["الميكا","الصوان"," الجرافيت"," الكالسيت"],
      correctAnswer: 2
    },
    {
      question: "المعدن الذي له مستويات انفصام بزاوية قائمة (عمودي الزوايا ) هو .............",
      answers: ["الميكا"," الكوارتز","الكالسيت","الهاليت"],
      correctAnswer: 4
    },
    {
      question: "عند الطرق على الكوارتز بشدة فإنه...",
      answers: ["ينفصم في مستوى واحد"," ينكسر بمكسر مستن"," ينفصم في شكل مكعبي" ,"ينكسر بمكسر محاری"],
      correctAnswer: 4
    },
    {
      question: "المعدن الذي وزنه النوعي ١٩,٣ ينتمي إلى مجموعة ..............",
      answers: ["السيليكات","الكبريتات","الأكاسيد"," العناصر المنفردة"],
      correctAnswer: 4
    },
    {
      question: "أي مما يلي هو الترتيب التنازلي الصحيح لصلادة المعادن الآتية ؟...",
      answers: [" الماس  - التوباز - الكوارتز -الكوراندوم ","الماس - الكوراندوم - الأرثوكليز - الكوارتز"," التلك - الكالسيت -الفلوريت - الأباتيت","الأرثوكليز  - الفلوريت ـ الكالسيت - التلك"],
      correctAnswer: 4
    },
    {
      question: "المعدن الذي يمكن استخدامه في صناعة ورق الصنفرة هو .............",
      answers: ["الكوارتز","الفلوريت","النحاس"," الجبس"],
      correctAnswer: 1
    },
    {
      question: "المعدن الذي يمكنه خدش الأباتيت ولا يمكنه خدش التوباز هو ....",
      answers: ["الكالسيت","الأرثوكليز","التلك","الفلوريت"],
      correctAnswer: 2
    },
    {
      question: " ساق الخزف غير المصقول يستخدم في معرفة ................",
      answers: ["اللون والمخدش","البريق والمخدش","الصلادة والبريق"," المخدش والصلادة"],
      correctAnswer: 4
    },
    {
      question: "* نميز بين الأحجار الكريمة والمقلدة عن طريق الكوارتز لأن أغلب الأحجار الكريمة ....",
      answers: ["صلادتها أكبر من الكوارتز والمقلدة أقل"," صلادتها أقل من الكوارتز والمقلدة أكبر"," لها لون الكوارتز بينما المقلدة ألوانها مختلفة","لا تخدش الكوارتز بينما المقلدة تخدشه"],
      correctAnswer: 1
    },
    {
      question: "يمكن الحفر على العملة النحاسية بقطعة زجاج لأن...",
      answers: ["صلادة العملة النحاسية وصلادة الزجاج متساوية","صلادة العملة النحاسية حوالي «3.5» والزجاج حوالي 5.5  »"," صلادة العملة النحاسية حوالي 5.5  ، والزجاج حوالي «3.5»"," صلادة العملة النحاسية أكبر من صلادة الزجاج"],
      correctAnswer: 2
    },
    {
      question: "المعدن الذي يخدش من لوح المخدش الخرقي من الممكن أن تكون صلاته .............",
      answers: ["5.5","7","7.5","8"],
      correctAnswer: 1
    },
    {
      question: "من خلال دراستك لخاصية الصلادة، فإن العبارة الأصوب هي أن...",
      answers:  [" ظفر الإنسان يخدش الكالسيت ولا يخدش الجبس","  الكالسيت يمكن خدشه بعملة نحاسية","معدن الأباتيت يستطيع خدش التوباز","لوح المخدش تبلغ صلادته حوالی 7.5"],
      correctAnswer: 2
    },
    {
      question: "أي الخواص الآتية لا تميز معدن الجالينا ؟...",
      answers: ["له بريق فلزی","وزنه النوعي 19.3","ذات انقصام مکعبی","ينتمي لمجموعة الكبريتيدات"],
      correctAnswer: 2
    },
    {
      question: "الخاصية الأنسب التي يمكن الاعتماد عليها عند اختيار معدن يتحمل الضغط هي .............",
      answers: ["الانقصام","الصلادة"," الوزن النوعي","المخدش"],
      correctAnswer: 1
    },
    {
      question: "معادن الميكاء الكوارتز، الأوليفين، الصوان تتشابه في ............",
      answers: ["الصلادة","اللون","الانفصام","المجموعة المعدنية"],
      correctAnswer: 4
    },
    {
      question: "المعدن الذي لا يحتوى على مستويات ضعيفة الترابط مما يلي هو...",
      answers: ["الميكا"," الكوارتز","الجرافيت","الهاليت"],
      correctAnswer: 2
    },
    {
      question: " عند فحص عينة معدن لوحظ عدم وجود تشققات على سطحها بالرغم من الضغط عليه يدل ذلك على...",
      answers: ["درجة صلادة المعدن"," قوة الروابط بين جزيئات المعدن","طول العمر الجيولوجي للمعدن","زيادة الوزن النوعي المعدن"],
      correctAnswer: 2
    },
    {
      question: " الخاصية التي يتشابه فيها الذهب والجالينا هي ....",
      answers: ["الوزن النوعي العالي"," البريق اللافلزي","معادن عنصرية","الانفصام المعيني"],
      correctAnswer: 1
    },
    {
      question: "الانفصام في معدن كلوريد الصوديوم من النوع ................",
      answers: ["الصفائحي"," المكعبي","  معيني الأوجه"," القاعدي"],
      correctAnswer: 2
    },
    {
      question: "معدن مرکب له بريق فلزي ويتميز بانفصام مكعبي ينتمي إلى مجموعة ............ ...",
      answers: [" الكربونات ","الكبريتيدات","الأكاسيد","السيليكات"],
      correctAnswer: 2
    },
    {
      question: "المعدن السيليكاني الذي له انفصام في اتجاه واحد هو ...........",
      answers: ["  الميكا","الكوارتز","الجرافيت"," الهالیت"],
      correctAnswer: 1
    },
    {
      question: "النسبة بين كتلة مكعب من الجالينا ذو حجم معين وكتلة نفس الحجم من الماء ..............",
      answers: ["15 : 2","15:1","19.3 : 1","22.5 : 1"],
      correctAnswer: 1
    },
    {
      question: "عند خدش قطعة من الأمينيست بقطعة من البلور الصخرى فإنه...",
      answers: [" يخدش الأميثيست البلور الصخري"," يخدش البلور الصخري الأميثيست"," يخدش كل منهما الآخر"," لا يخدش أيا منهما الآخر"],
      correctAnswer: 3
    },
    {
      question: "يختلف الكوارتز عن الكالسيت في جميع ما يلي ماعدا ..............",
      answers: ["الصلادة","البريق"," الانفصام","المجموعة المعدنية"],
      correctAnswer: 2
    },
    {
      question: "قطعة معدنية كبيرة الحجم لونها وردي فاتح وتخدش الزجاج وتستخدم في صناعة الأواني الخزفية...",
      answers: ["الهيماتيت"," الفلسبار"," الكوارتز"," الماس"],
      correctAnswer: 2
    },
    {
      question: "حجر الزينة الذي يحتوى على اثنين من أكثر العناصر انتشارا في القشرة الأرضية هو...",
      answers: ["الأميثيست","  الكالسيت"," الهيماتيت ","السفاليرايت"],
      correctAnswer: 1
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
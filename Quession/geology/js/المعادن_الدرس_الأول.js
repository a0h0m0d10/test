(function() {
  "use strict";

  let questions = [
    {
      question: "إستخدم الإنسان القديم المعادن الطينية في صناعة",
      answers: ["الأسمنت ", " الأوانى الفخارية", " السكاكين", "الزجاج "],
      correctAnswer: 2
    },
    {
      question: "يستخدم معدن الفلسبار فى صناعة",
      answers: [" الخزف", " الأكواب الزجاجية", " الأسمنت", "الحديد "],
      correctAnswer: 1
    },
    {
      question: "يستخدم معدن الهيماتيت فى صناعة",
      answers: [" اللدائن", " زجاج النافذة", "الطوب ", "المسامير الحديدية "],
      correctAnswer: 4
    },
    {
      question: "العنصر المكون لمعدنين عنصريين مختلفين هو",
      answers: [" الكربون", " الكبريت ", " الحديد", " السيليكون"],
      correctAnswer: 1
    },
    {
      question: "من المعادن التى تتكون من عنصر واحد فقط",
      answers: ["الكوارتز ", "الكالسيت  ", "الكبريت ", "الجبس "],
      correctAnswer: 3
    },
    {
      question: "أقل العناصر التالية انتشاراً فى صخور القشرة الأرضية",
      answers: [" الأكسجين", " النيتروجين ", " السيليكون", "الحديد "],
      correctAnswer: 2
    },
    {
      question: "يمثل عنصر النيتروجين في صخور القشرة الأرضية حوالي",
      answers: ["78%", " 1.5% ", " أقل من 1.5% ", "  أكبر من 78% "],
      correctAnswer: 3
    },
    {
      question: " الأكسجين أكثر العناصر شيوعا من حيث النسبة المئوية لتواجده في...",
      answers: ["  اللب الداخلي ", "     الغلاف الجوي ", "    الوشاح", " القشرة الأرضية "],
      correctAnswer: 4
    },
    {
      question: "        يستخدم معدن المرو في صناعة",
      answers: ["   الأسمنت ", "      القلم الرصاص ", "    الخزف", " الأكواب الزجاجية  "],
      correctAnswer: 4
    },
    {
      question: " أي أنواع الصخور التالية يتكون من معدن يستخدم في إنتاج الأسمنت ؟...",
      answers: ["البازلت","  الحجر الجيري"," الملح الصخري","صخور الجبس"],
      correctAnswer: 2
    },
    {
      question: "لا يصنف البترول من المعادن لأنه...",
      answers: ["عضوى ومتبلر","سائل وعضوي","غیر عضوی وسائل","غير متبلر وغير عضوی"],
      correctAnswer: 2
    },
    {
      question: " معدن كربوناتي مركب هو المكون الأساسي لصخرين هذا المعدن هو ",
      answers: ["الكوارتز", "الكالسيت ", "النحاس ", " الهيماتيت"],
      correctAnswer: 2
    },
    {
      question: "يتشابه الكوارتز مع الكالسيت في أن المعدنان من ",
      answers: ["السيليكات","  الكربونات","   المعادن المركبة","المعادن العنصرية"],
      correctAnswer: 3
    },
    {
      question: "تعرف عناصر الذهب والفضة والبلاتين بالمعادن العنصرية، أي العبارات عن هذه المعادن تعتبر صحيحة",
      answers: ["عناصر سهلة التأكسد"," يشكلون روابط قوية مع الكبريت مكونة مجموعة الكبريتيدات"," توجد منفردة في القشرة الأرضية بنسبة منخفضة"," عناصر تقاوم الأكسدة وتتأثر بالكربنة"],
      correctAnswer: 3
    },
    {
      question: "معدن گریونانی استخدم في الزينة قديما...",
      answers: ["لكالسيت","الباريت","المالاكيت  "  , "الجالينا"],
      correctAnswer: 3
    },
    {
      question:   "العناصر الأقل وجودا في قشرة الأرض من العناصر التالية هي ............. ...",
      answers: ["الحديد و لكالسيوم","الكالسيوم والماغنيسيوم"," الماغنيسيوم والصوديوم","الحديد والبوتاسيوم"
        ],
      correctAnswer: 3
    },
    {
      question: "أي عنصر مما يلي يوجد في الميكا والذي يكون أكبر نسبة من وزن القشرة الأرضية ؟....",
      answers:["النيتروجين","الأكسجين","الماغنيسيوم","السيليكون"],
      correctAnswer: 2
    },
    {
      question: "المعادن التي تنتمى إلى أكثر المجموعات المعدنية شيوعا هي ...............",
      answers: [" الجرافيت والتلك والجبس"," الأرثوكليز والكوارتز والميكا"," الكالسيت والدولوميت والبيروكسين"," الباريت والفلوريت والأنهيدريت"],
      correctAnswer: 2
    },
    {
      question: "العناصر التي تمثل النسبة الأكبر من وزن القشرة الأرضية هي ..............",
      answers: ["البوتاسيوم والحديد"," النيتروجين والأكسجين "," السيليكون والصوديوم","الألومنيوم والكالسيوم"],
      correctAnswer: 2
    },
    {
      question: "المعدن المكون للرخام ينتمي إلى مجموعة معادن ..............",
      answers: ["السيليكات"," الكربونات","الأكاسيد","الكبريتات"],
      correctAnswer: 2
    },
    {
      question: "الترتيب التصاعدي الصحيح لمجموعة العناصر التالية حسب نسبة وزنها في القشرة الأرضية هو ...............",
      answers: ["الومنيوم ←  حديد ← كالسيوم","الومنيوم ←  سيليكون ←ماغنيسيوم","-  ماغنيسيوم ←  حديد ← ألومنيوم","ماغنيسيوم ←  سيليكون  ←كالسيوم"],
      correctAnswer: 3
    },
    {
      question: "اتحاد عناصر معدن المرو تكون وفقا للقوانين ..............",
      answers: ["الجيولوجية","الفيزيائية","الكيميائية","الجيوفيزيائية"],
      correctAnswer: 3
    },
    {
      question: "أي المعادن الآتية يعتبر المكون الأساسي لها كبريتات كالسيوم ؟...",
      answers: [" الكوارتز والباريت"," الكالسيت والانهيدريت"," الجالينا والبيريت","الجبس والانهيدريت"],
      correctAnswer: 4
    },
    {
      question: "من معادن الأكاسيد التي استخدمت قديما وحديثا معدن ....",
      answers: ["الفلسبار","الصوان","الهيماتيت","الكوارتز"],
      correctAnswer: 3
    },

    {
      question: "عنصر غازي وآخر صلب عند اتحادهما يكونان معدن بلوراته مكعبة الشكل هذان العنصران هما...",
      answers: ["الأكسجين والبوتاسيوم ","النيتروجين والكالسيوم","الكلور والسيليكون"," الكلور والصوديوم"],
      correctAnswer: 4
    },
    {
      question: "ارتباط عنصر الخارصين بعنصر الكبريت لتكوين معدن السفاليرايت يعبر عنه ...............",
      answers: ["محور التماثل الرأسي"," مستوى التماثل البلوري","الشكل البلوري"," لون المعدن الناتج"],
      correctAnswer: 3
    },
    {
      question: "لا يمكن أن يتواجد المعدن الواحد في أكثر من نظام بلوري لأن كل معدن ..............",
      answers: ["له ترکیب کیمیائی محدد"," يتواجد في بيئة مختلفة"," له ترکیب ذری ثابت"," يتكون من عدد محدد من البلورات"],
      correctAnswer: 3
    },

    {
      question: "بلورة النظام السداسي يمكن تقسيمها لنصفين متماثلين عن طريق ..............",
      answers: ["محور التماثل"," مستوى التماثل","  المستوى المحوري"," محور البلورة"],
      correctAnswer: 2
    },
    {
      question: "أي الأنظمة البلورية التالية محاورها غير متعامدة الزوايا ؟...",
      answers: ["الرباعي","المعيني القائم","المكعبي"," ثلاثي الميل"],
      correctAnswer: 4
    },



    {
      question: "بلورات معدن الهاليت لها أكبر قدر من عناصر التماثل البلوري لأن ....",
      answers: ["أطوال المحاور البلورية متساوية والزوايا بينهما مختلفة"," أطوال المحاور البلورية متساوية والزوايا بينهما متساوية"," أطوال المحاور البلورية مختلفة والزوايا بينهما متساوية","أطوال المحاور البلورية مختلفة والزوايا بينهما مختلفة"],
      correctAnswer: 2
    },
    {
      question: "أكثر الأنظمة البلورية انتشارا في المعادن يتميز بأن...",
      answers: ["الزوايا بين محاوره متساوية","  أطوال محاوره متساوية","محاوره البلورية متعامدة","أطوال محاوره مختلفة"],
      correctAnswer: 4
    },
    {
      question: "يتشابه النظام البلوري المعيني القائم وثلاثي الميل في أن...",
      answers: ["الزوايا بين المحاور البلورية لهما متساوية"," الزوايا بين المحاور البلورية لهما متعامدة"," أطوال المحاور البلورية لهما مختلفة"," أطوال المحاور البلورية لهما متساوية"],
      correctAnswer: 3
    },
    {
      question: "عند اختلاف الزوايا بين المحاور في النظام البلوري المعيني القائم فإنه يتحول إلى...",
      answers: ["رباعی","مکعبی"," ثلاثي الميل","ثلاثي"],
      correctAnswer: 3
    },
    {
      question: "وجه الاختلاف بين الفصائل البلورية التي تشمل 4 محاور بلورية هو أن ...............",
      answers: ["هناك 3 محاور أفقية"," الزوايا بين المحاور الأفقية متساوية","المحور الرأسي يتعامد على المحاور الأفقية","  المحاور الأفقية متساوية في الطول"],
      correctAnswer: 3
    },
    {
      question: "العلاقة °90 = B = a = لا تمثل فصيلة النظام ....",
      answers: ["الثلاثي","المعيني القائم","السداسي","ثلاثي الميل"],
      correctAnswer: 3
    },
    {
      question: "العلاقة a = b = c لا تمثل بلورات فصيلة النظام ..............",
      answers: ["المعيني القائم","أحادي الميل"," الرباعي"," ثلاثي الميل"],
      correctAnswer: 3
    },
    {
      question: "البلورة التي تحتوى على أكثر من ثلاثة محاور تتبع النظام....",
      answers: ["المكعبي","أحادي الميل","الثلاثي"," ثلاثي الميل"],
      correctAnswer: 3
    },
    {
      question: "عندما تكون المحاور البلورية الثلاثة أفقية والرابع محور رأسي وبها مستوى تماثل أفقى يكون النظام البلوري...",
      answers: ["الثلاثي"," السداسي","المعيني القائم","الرباعي"],
      correctAnswer: 2
    },
    {
      question: "* إذا كان (a + b + c)، الزاويـة بيـن (90 = a. b)، الـزاويـة بيـن (°90 = c ، b)، الزاويـة بيـن (80 = C ، a)، فإن النظام البلوري الذي تتبعه هذه البلورة هو النظام...",
      answers: ["المكعبي","المعيني القائم","الرباعي"," احادي الميل"],
      correctAnswer: 4
    },
    {
      question: "تشترك فصيلة المكعبي والمعيني القائم في...",
      answers: ["تعامد المحاور البلورية"," تساوي أطوال المحاور البلورية ","عدم تساوى المحاور البلورية في الطول"," عدم تساوى قيم الزوايا المحورية"],
      correctAnswer: 1
    },
    {
      question:" يختلف الكوارتز والهاليت في الشكل البلوري بسبب",
      answers: ["انعكاس الضوء من سطح البلورة","الطاقة الناتجة أثناء التبلر اختلاف"," كثرة الشوائب على سطح المعدن"," اختلاف الترتيب الداخلي للذرات"],
      correctAnswer: 4
    },
    {
      question: "يتفق الجرافيت والماس في كونهما معدنان عنصريان للكربون ويختلفان من حيث ..............",
      answers: ["ترتيب الذرات داخل المعدن"," الطاقة الناتجة أثناء التبلر"," التركيب الكيميائي","العمر الجيولوچی"],
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
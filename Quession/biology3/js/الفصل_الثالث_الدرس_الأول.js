(function() {
  "use strict";

  let questions = [
    {
      question: "ما مرادف كلمة تكاثر ؟",
      answers: ["تزاوجو","تزايد","توالد","إخصاب"],
      correctAnswer: 3
    },
    {
      question: "يؤدي الانقسام الميتوري إلى --------- عدد الصبغيات في الخلايا الناتجة.",
      answers: ["ثبات","اختزال","تضاعف","اختلاف"],
      correctAnswer: 3
    },
    {
      question: "أي الكائنات التالية يتكون حول جسمه جدار سميك في الظروف غير المناسبة ؟",
      answers: ["الأمينا"," فطر الخميرة","الهيدرا","الاسفنج"],
      correctAnswer: 3
    },
    {
      question: "إذا علمت أن الزمن اللازم لانقسام بكتيريا الزبادي حوالي نصف ساعة، فما عدد البكتيريا الناتجة عن حلية بكثيرية واحدة تعيش في كوب زبادي في فريزر الثلاجة خلال ساعتين ؟",
      answers: ["صفر","2","8","16"],
      correctAnswer: 3
    },
    {
      question: "تلجأ الأميبا إلى الانشطار الثنائي المتكرر في حالة ",
      answers: [" زيادة الاكسجين وتناقص ثاني أكسيد الكربون","توافر الحشرات المائية"," زيادة ثاني أكسيد الكربون وتناقص الأكسجين"," تناقص الضوء"],
      correctAnswer: 3
    },
    {
      question: "ما طريقة التكاثر اللاجنسي التي يختفى فيها الفرد الأبوي ؟",
      answers: ["التجديد"," الانشطار الثنائي","الجراثيم","التبرعم"],
      correctAnswer: 3
    },
    {
      question: "أي الخلايا الأمية التالية لا متلاشی بعد انقسامها ",
      answers: ["البراميسيوم"," قطر الخميرة","الأميبا","البكتيريا"],
      correctAnswer: 3
    },
    {
      question: "في الكائنات وحيدة الخلية، أي مما يلي يختلف فيه التكاثر بالتبرعم عن التكاثر بالانشطار الثنائي ؟",
      answers: ["حجم الخلايا الناتجة"," عدد الخلايا الناتجة","عدد المجموعات الصبغية للخلايا الناتجة "," نوع الانقسام"],
      correctAnswer: 3
    },
    {
      question: "أي مما يلي يلزم وجوده لإتمام التكاثر اللاجنسي في الهيدرا ؟",
      answers: ["الخلايا البينية"," القرص الوسطى","اللوامس","الأمشاج"],
      correctAnswer: 3
    },
    {
      question: "أي من الثنائيات التالية تكون متباينة المجموعة الصبغية فيما بينها ؟",
      answers: ["ذكور نحل العسل ومحلب الأسبيروجيرا "," إناث كل من نحل العسل وحشرة المن","ذكور حشرة المن وشغالات نحل العسل","ذكور كل من نحل العسل وحشرة المن"],
      correctAnswer: 3
    },
  
    {
      question: "يحدث التكاثر بالتجدد في البلاناريا والهيدرا على الترتيب إذا قطعت",
      answers: ["طوليا فقط / عرضيا فقط"," عرضيا وطوليا / طوليا فقطقدرة بعض خلايا الفقاريات العليا على الانقسام المينوري والتمايز"," عرضيا وطوليا / عرضيا فقط"," عرضيا فقط / طوليا فقط"],
      correctAnswer: 3
    },
    {
      question: "أي من الكائنات التالية يتكاثر بالتجدد ؟",
      answers: ["الجمبري","الضفدعة","السلمندر","الأسفنج"],
      correctAnswer: 3
    },
    {
      question: "إذا كان هناك نجم بحر وتم تقطيعه إلى ثلاثة أجزاء يحتوى الجزء الأول على ذراع فقط والجزء الثاني ذراع وقطعة من القرص المركزي، وتم إلقاء الأجزاء الثلاثة في حوض به ماء، ماذا تتوقع أن يحدث ؟",
      answers: ["يتم تعويض الذراع المفقود فقط ","ينتج ثلاثة أفراد كاملة","ينتج فردان کاملان فقط","تتحلل الأجزاء المفقودة فقط"],
      correctAnswer: 3
    },
    {
      question: "ما دور التجدد في طائر النورس ؟",
      answers: ["التكاثر اللاجنسي"," استعاضة الأجزاء المبتورة","التئام الجروح","التكاثر الجنسي"],
      correctAnswer: 3
    },
    {
      question: "ما مدى صحة العبارتين التاليتين، كل الفطريات تتكاثر بالجراثيم، ويعتبر التكاثر بالجراثيم من أفضل صور التكاثر اللاجنسي ؟",
      answers: ["العبارتان صحیحتان وبينهما علاقة","العبارة الأولى صحيحة والعبارة الثانية خطاً","العبارة الأولى خطأ والعبارة الثانية صحيحة","العبارتان خطأ"],
      correctAnswer: 3
    },
    {
      question: "أي صور التكاثر اللاجنسي التالية تتكاثر بها كل من السراخس وبعض الفطريات ؟",
      answers: ["التجدد","الجراثيم","التبرعم"," الانشطار الثنائي"],
      correctAnswer: 3
    },
    {
      question: " يعتمد إنبات الجراثيم لتكوين أفرادا جديدة على",
      answers: ["الانقسام الميوري فقط"," الانقسام المبتوري فقط"," الانقسام الميوزي أو الميتوزي","التحول"],
      correctAnswer: 3
    },
    {
      question: " أي مما يلي يستخدم عند زراعة الأنسجة ؟",
      answers: ["الخلايا الباراتشيمية"," الخلايا الإسكلرنشيمية"," الأنابيب الغربالية للحاء"," أوعية الخشب"],
      correctAnswer: 3
    },
    {
      question: "ما مدى صحة العبارتين التاليتين، جميع بويضات أنتى حشرة المن أحادية المجموعة الصبة بالانقسام الميوزي ؟",
      answers: ["العبارتان صحيحتان وبينهما علاقة"," العبارة الأولى صحيحة والعبارة الثانية خطأ"," العبارة الأولى خطأ والعبارة الثانية صحيحة","العبارتان خطأ"],
      correctAnswer: 3
    },
    {
      question: "أي الأفراد الآتية لا يمكنه أن يتكاثر جنسيا ؟",
      answers: ["ملكة نحل العسل"," ذكر نحل العسل","شغالة نحل العسل","انتى حشرة المن"],
      correctAnswer: 3
    },
    {
      question: " في حالة التكاثر الجنسي لنحل العسل تحصل الشغالات على است",
      answers: ["نصف المعلومات الوراثية للذكر الأب ونصف المعلومات الوراثية للملكة الأم","كل المعلومات الوراثية للذكر الآب ونصف المعلومات الوراثية للملكة الأم"," كل المعلومات الوراثية لكل من الذكر الأب والملكة الأم ","كل المعلومات الوراثية للملكة الأم ونصف المعلومات الوراثية للذكر الآب"],
      correctAnswer: 3
    },
    {
      question: "أي الكائنات التالية ينتج أمشاجه بنوعى الانقسام ؟ ",
      answers: ["ذكر نحل العسل"," ملكة نحل العسل"," إناث حشرة المن","الطور المشيجي لنبات الفوجير"],
      correctAnswer: 3
    },
    {
      question: "اتنتج ملكة النحل الذكور من خلال حدوث انقسام",
      answers: [" میتوزی - مینوری","ثم انقسام","سیوری - مینوری  ","میتوزی - میوزی"," میوری - میوزی"],
      correctAnswer: 3
    },
    {
      question: "أي مما يلى يحتوى على مجموعة واحدة من الكروموسومات في حشرة نحل العسل ؟",
      answers: ["خلايا أجنحة الشغالات والحيوانات المنوية للذكور"," خلايا أجنحة الملكات وبويضات الملكات"," خلايا أجنحة الذكور وبويضات الملكات"," خلايا أجنحة الشغالات وخلايا أجنحة الملكات"],
      correctAnswer: 3
    },
    {
      question: " تتشابه طرق التكاثر بين حشرة نحل العسل وحشرة المن في أن",
      answers: ["الإناث في كل منهما هي التي تحدد الجنس","الأفراد الناتجة عن التوالد البكرى لكل منهما لها نفس المجموعة الصبغية"," التكاثر الجنسي ينتج عنه نفس الجنس","التوالد البكري ينتج عنه نفس الجنس"],
      correctAnswer: 3
    },
    {
      question: "أي الإناث التالية تحمل كل الصفات الوراثية للأم ؟",
      answers: [" ملكات نحل العسل"," شغالات نحل العسل","إناث حشرة المن الناتجة بالتوالد البكري","إناث حشرة المن الناتجة بالتكاثر الجنسي"],
      correctAnswer: 3
    },
    {
      question: "الحيوانات المنوية لذكر نحل العسل تحتوى على ---------- عدد الصبغيات التي تحتويها خلاياه الجسدية",
      answers: ["نفس","ضعف","نصف","ربع"],
      correctAnswer: 3
    },
    {
      question: "أي العبارات الآتية غير صحيحة بالنسبة لحشرة نحل العسل ؟",
      answers: [" كل الأفراد الناتجة عن التوالد البكرى تتكاثر جنسيا فقط","كل الأفراد الناتجة تتكاثر لاجنسيا بالتوالد البكري فقط","  كل الأفراد الناتجة عن التوالد البكرى تتكاثر لتعطى إناثا فقط","يمكن أن يتم التوالد البكري والتكاثر الجنسي في نفس الجيل"],
      correctAnswer: 3
    },
    {
      question: "أي صور التكاثر اللاجنسي التالية تعتمد في حدوثها على الانقسام الميوزي ؟",
      answers: ["الانشطار الثنائي في البراميسيوم"," زراعة أنسجة نبات الجزر","التوالد البكري في نحل العسل"," التوالد البكري الطبيعي في المن"],
      correctAnswer: 3
    },
    {
      question: "تحتوي الخلايا الجسدية لذكور حشرة المن على -------- عدد صبغيات الخلايا الجسدية لإناث حشرة المن",
      answers: ["ربع","نصف","نفس","ضعف"],
      correctAnswer: 3
    },
    {
      question: " أي مما يلي يحدث عند وضع خلية من نبات الطباق منزوعة النواة في لبن جوز الهند ؟",
      answers: ["تنشط الخلية وتنقسم ميتوريا","تنشط الخلية وتنقسم ميوزيا"," تموت الخلية خلال فترة قصيرة"," تستمر الخلية حية ولا تنقسم"],
      correctAnswer: 3
    },
    {
      question: "ما سبب لجوء أنثى حشرة المن إلى التوالد البكرى بالإضافة لقدرتها على التكاثر الجنسي ؟ ",
      answers: ["لتزيد من عدد الإناث"," لتزيد من عدد الذكور"," لتزيد من عدد الجنسين","لتحافظ على ثبات عدد الصبغيات"],
      correctAnswer: 3
    },
    {
      question: "يتحدد الجنس في حشرة نحل العسل على أساس .",
      answers: ["نوع الغذاء المقدم لليرقات","موسم التزاوج"," عدد الصبغيات","عدد البويضات التي تضعها الملكة"],
      correctAnswer: 3
    },
    {
      question: "إذا علمت أن عدد صبغيات خلية في جناح ذكر النحل = ٢س ، فكم عدد الصبغيات في بويضة ملكة النحل ؟",
      answers: ["س","٢ س","٣ س","٤ س"],
      correctAnswer: 3
    },
    {
      question: "إذا علمت أن عدد الصبغيات في خلية من جناح شغالة نحل العسل يساوی ۳۲ صبغي، كم يكـون عـدد الصبغيات لخلية في جناح الملكة ؟",
      answers: ["8","16","23","64"],
      correctAnswer: 3
    },
    {
      question: "الأفراد الناتجة عن التوالد البكري في حشرة المن لها صفات وراثية",
      answers: ["تشبه الأم"," تشبه الأب","خليط من صفات الأم والأب","لا تشبه أيا من الأم أو الأب"],
      correctAnswer: 3
    },
    {
      question: "أي العبارات الآتية غير صحيحة بالنسبة لحشرة المن ؟",
      answers: ["عدد الإناث أكبر من عدد الذكور","  كل الأفراد الناتجة عن التوالد البكرى تتكاثر لتعطى إناثا فقط "," بعض الأفراد الناتجة عن التكاثر الجنسي تتكاثر بالتوالد البكري"," لا يمكن أن يتم نوعى التكاثر عند حدوث نفس نوع الانقسام"],
      correctAnswer: 3
    },
    {
      question: " أي مما يلى لا يعتبر صحيحًا بالنسبة لخليتين إحداهما من جذر نبات الجزر والأخرى من ساقه .",
      answers: ["تتساوى أعداد الكروموسومات في كل منهما","نوع الانقسام في كل منهما","كل منهما ثنائية العدد الصبغي","تحتوى كل منهما على چينات مختلفة"],
      correctAnswer: 3
    },
    {
      question: " ما المجموعة الصبغية للأفراد الناتجة عن زراعة الأنسجة لنبات الجزر ؟",
      answers: ["ن","٢ن","٣ن","٤ن"],
      correctAnswer: 3
    },
    {
      question: "تنتج إناث نحل العسل من بويضات",
      answers: ["شغالة غير مخصبة","ملكة غير مخصبة","شغالة مخصبة","ملكة مخصبة"],
      correctAnswer: 3
    },
    {
      question: "تتشابه شغالة نحل العسل مع الملكة",
      answers: ["الشكل","الحجم","عدد الصبغيات","الخصوبة"],
      correctAnswer: 3
    },
     
    {
      question: " يدخل فطر الخميرة في صناعة الخبز معتمدا بصفة أساسية على",
      answers: ["التنفس والإحساس","التنفس والتكاثر","التكاثر والحركة","الإحساس والحركة"],
      correctAnswer: 3
    },
     
    {
      question: "أي من صور التكاثر اللاجنسي التالية تؤدى إلى التنوع الوراثي في الأفراد الناتجة عنه ؟",
      answers: ["التكاثر بالتجدد في الهيدرا","الانشطار الثنائي في الأميبا","زراعة الأنسجة في الجزر"," التوالد البكري في نحل العسل"],
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
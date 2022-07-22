(function() {
  "use strict";

  let questions = [
    {
      question: ".أي الهرمونات الآتية قابل للذوبان في الماء ؟",
      answers: [" الكورتيزون","الألدوستيرون"," التستوستيرون","الأنسولين"],
      correctAnswer: 3
    },
    {
      question: "يتأثر مستوى هرمون الكورتيزون نتيجة حدوث خلل في هرمون.",
      answers: ["ADH ","ACTH"," التستوستيرون","الألدوستيرون"],
      correctAnswer: 3
    },
    {
      question: "أي الهرمونات التالية له دور في تنظيم الاتزان الداخلي للجسم ؟.",
      answers: ["هرمون النمو","التستوستيرون"," الاستروجين","الألدوستيرون"],
      correctAnswer: 3
    },
    {
      question: "أي الهرمونات التالية غير قابل للذوبان في الماء ؟.",
      answers: [" الكورتيكوستيرون","النور أدرينالين"," هرمون النمو","الثيروكسين"],
      correctAnswer: 3
    },
    {
      question: "انخفاض نسبة هرمون الألدوستيرون في الدم مؤشر لتغير محتوى البول من الصوديوم والبوتاسيوم.",
      answers: ["بالارتفاع لكل منهما"," بالانخفاض لكل منهما"," بالارتفاع للصوديوم  والانخفاض للبوتاسيوم"," بالارتفاع للبوتاسيوم والانخفاض للصوديوم"],
      correctAnswer: 3
    },
    {
      question: "ماذا يحدث عند انخفاض ضغط الدم لامرأة في نهاية الشهر التاسع من الحمل ؟.",
      answers: ["  يزداد إفراز هرمون ADH ويقل إفراز هرمون الريلاكسين"," يقل إفراز هرمون ADH ويزداد إفراز هرمون الريلاكسين "," يقل إفراز كل من هرمونی ADH والريلاكسين"," يزداد إفراز كل من هرموني ADH والريلاكسين"],
      correctAnswer: 3
    },
    {
      question: "مما يأتي يترتب على زيادة إفراز هرمون الألدوستيرون بالدم ؟.",
      answers: [" انخفاض تركيز اليوريا بالبول"," زيادة تركيز أيونات الصوديوم بالبول  زيادة تركيز أيونات البوتاسيوم بالبول"," انخفاض تركيز أيونات الهيدروجين بالبول",""],
      correctAnswer: 3
    },
    {
      question: "من أين تتحرر الهرمونات التي تؤثر على نفرونات الكلى ؟.",
      answers: ["  الفص الأمامي للغدة النخامية وقشرة الغدة الكظرية","قشرة الغدة الكظرية والفص الخلفي للغدة النخامية"," الفص الخلفي للغدة النخامية ونخاع الغدة الكظرية","  نخاع الغدة الكظرية والفص الأمامي للغدة النخامية"],
      correctAnswer: 3
    },
    {
      question: "ما الهرمون الذي تتوقع ارتفاع مستواه في الدم عند تناول وجبة من مكوناتها أسماك مملحة ؟.",
      answers: ["الجلوكاجون ","الألدوستيرون","ADH ","الكورتيزون"],
      correctAnswer: 3
    },
    {
      question: "الهرمونات التي تؤثر في أيض النشويات تفرز بتأثير هرمون .",
      answers: ["ADH ","FSH","LH ","ACTH"],
      correctAnswer: 3
    },
    {
      question: "تركيز البول في الإنسان السليم يتأثر بنشاط هرمونی .",
      answers: ["الألدوستيرون وADH","الجلوكاجون والأنسولين"," الكالسيتونين والباراثورمون","الأوكسيتوسين والثيروكسين"],
      correctAnswer: 3
    },
    {
      question: "ترجع زيادة حركة اللاعبين داخل الملاعب الرياضية إلى زيادة إفراز هرمون.",
      answers: ["الجاسترين ","الأدرينالين","التستوستيرون ","الكالسيتونين"],
      correctAnswer: 3
    },
    {
      question: "   بعد إجراء عدة فحوصات لعينة دم إنسان لوحظ نقص حاد ومستمر في مستـويـات الصـوديـوم  فيرجع ذلك إلى وجود خلل في إفراز هرمون .",
      answers: [" الكورتيكوستيرون","الكورتيزون"," الألدوستيرون","الأدرينالين"],
      correctAnswer: 3
    },
    {
      question: "أي مما يلى يحدث عند إصابة قشرة الغدة الكظرية ؟.",
      answers: ["  ارتفاع نسبة الصوديوم وانخفاض نسبة البوتاسيوم في الدم"," انخفاض نسبة الصوديوم وارتفاع نسبة البوتاسيوم في الدم"," ارتفاع نسبة كل من الصوديوم والبوتاسيوم في الدم"," انخفاض نسبة كل من الصوديوم والبوتاسيوم في الدم"],
      correctAnswer: 3
    },
    {
      question: "أي العبارات التالية تعبر عن العلاقة بين هرمون ACTH وهرمون الكورتيزون ؟.",
      answers: ["يقل إفراز الكورتيزون والألدوستيرون بزيادة هرمون ACTH","يتضاعف إفراز الكورتيزون والألدوستيرون بزيادة إفراز هرمون ACTH ثم يقل إفرازهما مرة أخرى","  يزداد إفراز الكورتيزون والألدوستيرون بزيادة إفراز هرمون ACTH ","يزداد إفراز هرمون ACTH بزيادة إفراز الكورتيزون والألدوستيرون"],
      correctAnswer: 3
    },
    {
      question: "أي الهرمونات التالية لها دور في انتقال السيال العصبي خلال محور الخلية العصبية ؟.",
      answers: ["الألدوستيرون فقط"," الباراثورمون فقط","الألدوستيرون والباراثورمون"," الكالسيتونين والباراثورمون"],
      correctAnswer: 3
    },
    {
      question: " أي الهرمونات التالية مسئولة عن استجابة العضلة للسيال العصبي ؟.",
      answers: ["الألدوستيرون ","الكالسيتونين","البارانورمون والسكيرتين","الألدوستيرون والباراثورمون"],
      correctAnswer: 3
    },
    {
      question: "ماذا يحدث عند تناولك لوجبات غذائية فقيرة جدا لملح الطعام ؟.",
      answers: ["ارتفاع مستوى هرمون الألدوستيرون بالدم","انخفاض مستوى هرمون الألدوستيرون بالدم","ارتفاع نسبة الصوديوم في البول","انخفاض نسبة البوتاسيوم في البول"],
      correctAnswer: 3
    },
    {
      question: "  قام أحد الباحثين بإزالة جزء كبير من الطبقة الخارجية للغدة الكظرية في أحد حيوانات التجارب، فمن   المحتمل أن تشير القياسات الهرمونية إلى.",
      answers: ["انخفاض إفراز هرمون ACTH","انخفاض إفراز هرمون الألدوستيرون"," انخفاض إفراز هرمون الأدرينالين","زيادة إفراز هرمون الكورتيزون  "],
      correctAnswer: 3
    },
    {
      question: "     يتعرض جسم المتسابق في نهاية ماراثون الجرى للإصابة بالجفاف، لذلك يستعيد الجسـم الاتزان   الأسموزي له عن طريق هرمونات تفرز من.",
      answers: ["الفص الأمامي للغدة النخامية وقشرة الغدة الكظرية","الفص الأمامي للغدة النخامية ونخاع الغدة الكظرية"," الفص الخلفي للغدة النخامية وقشرة الغدة الكظرية","الفص الخلفي للغدة النخامية ونخاع الغدة الكظرية"],
      correctAnswer: 3
    },
    {
      question: "أين توجد الخلايا الحويصلية التي تعمل كغدة قنوية ؟.",
      answers: ["البنكرياس ","الغدة الدرقية","الغدة الكظرية","الغدة النخامية"],
      correctAnswer: 3
    },
    {
      question: " الخلل في أيض كل من الجلوكوز والدهون بالجسم ينتج عن خلل في.",
      answers: ["نخاع الغدة الكظرية","الفص الخلفي للغدة النخامية","البنكرياس "," الغدد جارات الدرقية"],
      correctAnswer: 3
    },
    {
      question: " إذا قضيت طوال اليوم في المذاكرة متخطيا وجبتي الإفطار والغداء، أي الهرمونات التالية من المتوقع ارتفاع نسبته بالدم ؟.",
      answers: [" الجلوكاجون","هرمون النمو","الأنسولين ","الكالسيتونين"],
      correctAnswer: 3
    },
    {
      question: "يعمل الأنسولين على نقل الجلوكوز.",
      answers: ["من الدم"," من الخلايا","  إلى الدم"," إلى البول"],
      correctAnswer: 3
    },
    {
      question: " تكمن أهمية حقن الأنسولين لمريض السكر وعدم تناوله عن طريق الفم في أنه.",
      answers: ["هرمون مكون من البروتينات","يضاد عمل هرمون الجلوكاجون"," يؤثر على السكريات الأحادية"," يحول الجلوكوز إلى جليكوجين"],
      correctAnswer: 3
    },
    {
      question: " أي من الهرمونات التالية لا يزيد من مستوى سكر الجلوكوز في الدم ؟.",
      answers: ["الأنسولين ","الكورتيزون"," الأدرينالين","الثيروكسين"],
      correctAnswer: 3
    },
    {
      question: "أي من العمليات الآتية لا يقوم بها الأنسولين ؟.",
      answers: ["تحويل الدهون إلى جلوكوز","تحويل الجلوكوز إلى مواد دهنية"," زيادة نفاذية الأغشية البلازمية لمرور الجلوكوز","تكوين الجليكوجين"],
      correctAnswer: 3
    },
    {
      question: "ماذا يحدث عندما تطلق خلايا بيتا هرمون الأنسولين في الدم ؟.",
      answers: ["تحصل العضلات الهيكلية على الجلوكوز بمعدل أسرع"," تبدأ الكلى في إخراج سكر الجلوكوز مع البول"," تطلق خلايا ألفا هرمون الجلوكاجون في الدم"," يحلل الكبد الجليكوجين"],
      correctAnswer: 3
    },
    {
      question: " أي من الهرمونات التالية يزيد تركيزها في دم شخص صائم لفترة طويلة قبل الإفطار ؟.",
      answers: [" الأدرينالين والأنسولين"," الأنسولين و ADH"," الجلوكاجون و ADH"," الثيروكسين والجلوكاجون"],
      correctAnswer: 3
    },
    {
      question: "ما الهرمون الأكثر سرعة في إفرازه بعد تناول كوب من العصير ؟.",
      answers: ["الجلوكاجون ","الكورتيزون"," الأنسولين","الألدوستيرون"],
      correctAnswer: 3
    },
    {
      question: "بعد تناولك وجبة مكونة من الخبز والفول والزيت، أي الهرمونات التالية من المتوقع عدم ارتفاع نسبته بالدم.",
      answers: ["الجلوكاجون ","السكيرتين"," الأنسولين","الكوليسيستوكينين"],
      correctAnswer: 3
    },
    {
      question: "ماذا يحدث عند حقن شخص سلیم بهرمون الأنسولين ؟.",
      answers: ["يزداد تركيز الجلوكوز بالدم","يقوم الكبد بتحويل الجليكوجين إلى جلوكوز"," يزداد تخزين الدهون بالجسم","تقل نفاذية أغشية الخلايا للجلوكوز"],
      correctAnswer: 3
    },
    {
      question: " أي الهرمونات التالية لا يؤثر على نسبة الجليكوجين في الكبد بشكل مباشر ؟.",
      answers: [" الأنسولين","الجلوكاجون"," الثيروكسين","الأدرينالين"],
      correctAnswer: 3
    },
    {
      question: " أي الهرمونات التالية تؤثر على جميع خلايا الجسم بما فيها الخلايا المفرزة لها ؟.",
      answers: [" الثيروكسين والأنسولين","الباراثورمون والكالسيتونين","ADH والألدوستيرون  ","الجاسترين والأدرينالين "],
      correctAnswer: 3
    },
    {
      question: " أي الهرمونات التالية لا يزداد إفرازه أثناء أداء التمرينات الرياضية ؟.",
      answers: [" الجلوكاجون","الأنسولين","الأدرينالين ","الكالسيتونين"],
      correctAnswer: 3
    },
    {
      question: "أي من التراكيب الآتية يؤدي زيادة إفرازه للهرمونات إلى زيادة قوة العضلات في فترة البلوغ ؟.",
      answers: [" الغدة الدرقية","نخاع الغدة الكظرية","  الخلايا البيئية في الخصية","الأنيبيبات المنوية في الخصية"],
      correctAnswer: 3
    },
    {
      question: "أي من الهرمونات التالية مسئول بطريقة غير مباشرة عن خشونة الصوت عند الذكور ؟.",
      answers: ["FSH ","LH"," التستوستيرون","الإستراديول"],
      correctAnswer: 3
    },
    {
      question: "أي الاختيارات التالية يكون فيه عمل أحد الهرمونين مكملا لعمل الآخر ؟.",
      answers: ["الجلوكاجون والأنسولين في الجنسين","FSH, LH في الأنثى"," FSH, LH في الذكر ","التستوستيرون والأندروستيرون في الذكر  "],
      correctAnswer: 3
    },
    {
      question: "أي مما يلي مسئول بطريقة مباشرة عن الحفاظ على بطانة الرحم أثناء الحمل ؟.",
      answers: [" الإستروجين","البروجسترون"," FSH","LH"],
      correctAnswer: 3
    },
    {
      question: "أي الهرمونات التالية لا يؤثر على أنسجة ضامة ؟.",
      answers: ["الريلاكسين ","الأوكسيتوسين"," الباراثورمون","النمو"],
      correctAnswer: 3
    },
    {
      question: " أي من التراكيب التالية إذا حدث به خلل أدى إلى تأخر نمو الثديين لدى الأنثى عند البلوغ ؟.",
      answers: ["بطانة الرحم"," نخاع الغدة الكظرية","الفص الأمامي للغدة النخامية","الفص الخلفي للغدة النخامية"],
      correctAnswer: 3
    },
    {
      question: " أي الهرمونات التالية لا يساهم في ظهور اللحية في ذكر الإنسان البالغ ؟  .",
      answers: ["LH ","FSH"," التستوستيرون","الأندروستيرون"],
      correctAnswer: 3
    },
    {
      question: "أي من الأعضاء التالية لا يحتوى على خلايا غدية صماء ؟.",
      answers: [" الخصية","البنكرياس","المعدة ","المريء"],
      correctAnswer: 3
    },
    {
      question: "ما الهرمون الذي يفرز عند بدء وصول الطعام إلى المعدة ؟.",
      answers: ["الجاسترین ","الكوليسيستوكينين"," السكيرتين","الأنسولين"],
      correctAnswer: 3
    },
    {
      question: "ما الهرمون الذي يؤثر في عملية الامتصاص في الأمعاء الدقيقة ؟.",
      answers: [" الثيروكسين","السكيرتين"," الكورتيزون","الأدرينالين"],
      correctAnswer: 3
    },
    {
      question: ".أي الهرمونات التالية يعتبر عضو إفرازه هو نفسه عضو الاستجابة ؟",
      answers: [" السكيرتين","الجاسترین","الكوليسيستوكينين ","الكالسيتونين"],
      correctAnswer: 3
    },
    {
      question: " أي الهرمونات التالية يؤثر في عملية هضم قطعة من الخبز ؟.",
      answers: ["الأنسولين ","الثيروكسين","الجاسترین ","الكوليسيستوكينين"],
      correctAnswer: 3
    },
    {
      question: "أي الهرمونات التالية يؤثر في عملية هضم قطعة من اللحم ؟.",
      answers: ["الثيروكسين ","الكورتيزون"," النمو","الجاسترين"],
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
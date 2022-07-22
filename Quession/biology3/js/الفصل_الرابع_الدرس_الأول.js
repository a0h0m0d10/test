(function() {
  "use strict";

  let questions = [
    {
      question: "اثناء تكوين البويضة فى انثى الانسان ، ما المكان الذى يحدث فيه أختزال للعدد الصبغى ",
      answers: ["المبيض", "قمع قناة فالوب", "الثلث الاول لقناة فالوب ", "الثلث الأخير لقناة فالوب "],
      correctAnswer: 3
    },
    {
      question: "اى مما يلى لا يحدث فى قناة فالوب",
      answers: ["انقسام الزيجوت", "اخصاب البويضة", "تحلل البويضة", "انقسام الخلية البيضية الاولية"],
      correctAnswer: 3
    },
    {
      question: "تظل البويضة حية داخل قناة فالوب حتى اليوم ...... من بداية دورة الطمث",
      answers: ["الرابع عشر", "الخامس عشر", "السابع عشر", "العشرين"],
      correctAnswer: 3
    },
    {
      question: "ما الهدف من انتاج اعداد ضخمة من الحيوانات المنوية فى الذكر",
      answers: ["وصول حيوان منوى واحد لوضع اختراق البويضة", "مشاركة عدد من الحيوانات المنوية فى اخصاب ", "اتمكن من اذابة غلاف البويضة", "افراز كمية كبيرة من حمض الهيالويورنيك"],
      correctAnswer: 3
    },
    {
      question: "ما الهرمون الذى يتوقف تقريبا خلال فترة الحمل ؟",
      answers: ["FSH", "البرولاكتين", "ADH", "الريلاكسين"],
      correctAnswer: 3
    },
    {
      question: "اى مما يلى لا تتوقع حدوثه عند تسرب السائل الرهلى من الرحم خلال الحمل ",
      answers: ["تعرض الام لحدث ولادة مبكرة", "يقل معدل الاوكسجين فى الدم ", "بطء حركة الجنين فى الرحم", "يتعرض الجنين للصدمات الخارجية"],
      correctAnswer: 3
    },
    {
      question: "اى العبارات التالية تصف العلاقة بين دم الجنين ودم الام",
      answers: ["الدورة الدموية ولكل منها متصلتان حتى اكتمال تكوين المشيمة فى الشهر الرابع من الحمل ", "ينتقل الدم مباشرة من الام الى الجنين طوال فترة الحمل ", "الدورة الدموية لكل منهما منفصلة ولا يتم تبادل اى مواد بينهما", "الدورة الدموية لكل منهما ولكن تشمل بعض المواد بين الدورتين "],
      correctAnswer: 3
    },
    {
      question: "",
      answers: ["", "", "", ""],
      correctAnswer: 3
   },
   {
      question: "اثناء فترة الحمل فى انثى الانسان، متى يبدأ تكوين المبيضين فى الجنين ",
      answers: ["قبل الشهر الاول", "بعد شهر ونصف ", "قبل الشهر الثانى", "بعد الشهر الثالث"],
      correctAnswer: 3
    },
    {
      question: "اى التوقيتات التالية من بدء العمل الطبيعى يمكن تعبير جنس الجنين فيه ",
      answers: ["الاسبوع الرابع", "الأسبوع السادس", "الاسبوع التاسع ", "الاسبوع الثالث عشر"],
      correctAnswer: 3
    },
    {
      question: "ماذا يحدث عند حدوث طفرة فى أمراة حامل نتج عنها تلف مستقبلات البروجسترون ",
      answers: ["زيادة سمك بطانة الرحم وزيادة نشاطه", "غياب الخصائص الجنسية الثانوية فى الانثى", "عدم قدرة الرحم على الاحتفاظ بالمنى", "منع الفص الامامى من الغدة النخامية من إفراز هرموني FSH , LH"],
      correctAnswer: 3
    },
    {
      question: "كيف يتغذى جنى التمساح",
      answers: ["عن طريق المشيمة", "عن طريق الجسم الاصفر", "عن طريق المح", "عن طريق الرحم "],
      correctAnswer: 3
    },
    {
      question: "حدوث خلل صبغى أثر على تكوين الخملات الاصباغية ببطانة رحم الام من المؤكد حدوث هذا الخلل فى الصبغيات",
      answers: ["الام", "الجنين", "الاب", "الام والجنين"],
      correctAnswer: 3
    },
    {
      question: "متى يقل افراز هرمون البروجسترون فى المرأة الحامل",
      answers: ["عند نقص هرمون الاستروجين", "فى نهاية الشهر التاسع", "عند زيادة هرمون الاستروجين", "فى نهاية الشهر الثانى"],
      correctAnswer: 3
    },
    {
      question: "ماذا يحدث عند حقن امراة حامل فى نهاية الشهر التاسع بخلاصة افراز الفص الخلفى للغدة النخامية ",
      answers: ["يقل تركيز البول", "تتسع الاوعية الدموية", "تلد طفل مكتمل النمو", "يحدث إجهاض"],
      correctAnswer: 3
    },
    {
      question: "لماذا تزيد عقاقير الخصوبة التى تتناولها أنثى الانسان نسبيا من فرص الحمل بالتوائم ",
      answers: ["لانها تساعد على انغماس التوتية فى ثنايا بطانة الرحم", "لانها توخر عملية الحيض ", "لانها تزيد من تأثير البروجسترون على بطانة الرحم", "لانها تحفز نمو العديد من حويصلات المبيض"],
      correctAnswer: 3
    },
    {
      question: "أي من العبارات التالية تعتبر صحيحة ",
      answers: ["التوائم المتآخية لها نفس الجنس دائما", " القوائم المتماثلة لها نفس الجنس دائما", "التوائم المتآخية تختلف في الجنس دائما", "التوائم المتماثلة تختلف في الجنس دائما  "],
      correctAnswer: 3
    },
    {
      question: "ما السبب في أن التوائم المتآخية قد تختلف في الجنس ؟",
      answers: ["تكوينها نتيجة تحرر بويضتين", "تكوينها نتيجة حدوث الإخصاب بحيوانين منوبين", "وجود کیس جنبني مستقل أكل جنين", " وجود مشيمة مستقلة لكل جنين"],
      correctAnswer: 3
    },
    {
      question: " أي الخصائص التالية لا تنطبق دائما على التوائم المتماثلة »",
      answers: ["تكوينها عن طريق حيوان منوي واحد"," تكوينها عن طريق بويضة واحدة", " تكوينها بانقسام البويضة المخصبة","تكوينها داخل كيس جنيني واحد" ],
      correctAnswer: 3
    },
    {
      question: "لماذا تقل فرص نجاح أطفال الأنابيب مع تقدم عمر الأم ؟",
      answers: ["نتيجة لقلة كفاءة بطانة الرحم", "لزيادة هرمون الإستروجين", " نتيجة انسداد قناتي فالوب ", "لزيادة هرمون الريلاكسين "],
      correctAnswer: 3
    },
    {
      question: " ما الدور الرئيسي لأقراص منع الحمل ؟   ",
      answers: [" تحفيز إفراز هرمونات  البروجسترون والاستروجين ", "تحليل البويضة مائياً", "غلق مستقبلات الحيوانات المنوية على سطح البويضة", "  تشيط إفراز هرمونی FSH , LH"],
      correctAnswer: 3
    },
    {
      question: "  قد يتكون الزيجوت ولا يكتمل الحمل وذلك عند استخدام",
      answers: [" أقراص منع الحمل", "اللولب", " الواقي الذكري", " التعقيم الجراحي"],
      correctAnswer: 3
    },
    {
      question: "ما الوسيلة التي تعطل عمل الغدة النخامية لمنع حدوث الحمل ؟",
      answers: ["الأقراص", "اللولب", "الواقي الذكرى", " التعقيم الجراحي"],
      correctAnswer: 3
    },
    {
      question: " ما النتائج المترتبة على التعقيم الجراحي للذكر ؟",
      answers: ["قلة إفراز التستوستيرون", " قلة عدد الحيوانات المنوية ", "زيادة إفراز FSH", "استمرار التشكل النهائي للحيوانات المنوية"],
      correctAnswer: 3
    },
    {
      question: "أي مما يلى لا يسبب توقف نشاط المبيضين عند أنثى الإنسان ؟",
      answers: ["خلال الشهر الرابع من الحمل", "عند عمر ٦٠ سنة", "تناول أقراص منع الحمل", " ربط قناتي فالوب"],
      correctAnswer: 3
    },
    {
      question: " أي وسائل منع الحمل التالية تفضل حينما يكون الحمل خطرا على الزوجة المريضة ؟",
      answers: ["اللولب", " الواقي الذكرى", "أقراص منع الحمل", "التعقيم الجراحي"],
      correctAnswer: 3
    },
    {
      question: "ما مدى صحة العبارتين التاليتين، «التلقيح والإخصاب عمليتان متتاليتان لإتمام التكاثر الجنسي في معظم الكائنات الحية»، «يمكننا الحصول على جنين بدون حدوث العمليتين» ؟",
      answers: ["العبارتان صحیحتان", "العبارة الأولى صحيحة والثانية خطأ", "العبارة الأولى خطأ والعبارة الثانية صحيحة", " العبارتان خطأ"],
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